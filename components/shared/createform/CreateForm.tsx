"use client";
import Form from "@/components/ui/form/Form";
import Input from "@/components/ui/input/Input";
import { useEdgeStore } from "@/lib/edgestore";
import { useEffect, useState } from "react";
import { Button } from "flowbite-react";
import { SingleImageDropzone } from "@/components/ui/singleImageDropZone/SingleImageDropZone";
import { userTypes } from "@/types/userTypes";
import { createPost } from "@/app/actions/blogActions";




const CreateForm = ({ user }: { user: userTypes }) => {
  const [file, setFile] = useState<File>();
  const { edgestore } = useEdgeStore();
  const [imagePath, setImagePath] = useState("");

  const uploadImageHandler = async () => {
    if (file) {
      const res = await edgestore.publicFiles.upload({
        file,
        
      });
        setImagePath(res.url);
    }
  };

  useEffect(() => {
    if(file) {
        uploadImageHandler()
    }
  }, [file])

  return (
    <div className="min-h-screen mt-12 mx-auto w-full max-w-3xl px-4">
        <div className="bg-white py-8 shadow rounded-lg px-10">
            <h1 className="text-center text-2xl font-bold mb-10">
                Create a post
            </h1>
            {
                !user ? (
                    <h2 className="text-center text-xl font-bold uppercase">
                        Please Sign in to create a post
                    </h2>
                ) : (
                    <div>
                            <SingleImageDropzone
                                onChange={(file) => setFile(file)}
                                value={file}
                                // width={300}
                                // height={100}
                            />
                        <Form
                            action={createPost}
                            className="flex flex-col gap-5 mt-5"
                            onSubmit={() => setFile(undefined)} 
                        >
                            <Input 
                                type="hidden"
                                name="image"
                                value={imagePath}
                            />
                            <Input 
                                name="title"
                                type="text"
                                placeholder="Title of the post..."
                            />
                            <textarea
                                required
                                name="description"
                                rows={10}
                                placeholder="Description of the post..."
                                className="text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400
                                focus:ring-2 focus:ring-emerald-400 sm:text-sm sm:leading-6 border w-full border-gray-200 p-2 rounded-md
                                py-1.5
                                "
                            ></textarea>
                            <select 
                                name="category" 
                                className="text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400
                                focus:ring-2 focus:ring-emerald-400 sm:text-sm sm:leading-6 border w-full border-gray-200 p-2 rounded-md
                                py-1.5"
                            >
                                <option value="" disabled>Chose Tag</option>
                                <option value="frontend">Frontend</option>
                                <option value="backend">Backend</option>
                                <option value="fullstack">Full Stack</option>
                                <option value="devops">DevOps</option>
                                <option value="everything">Everything</option>
                            </select>
                            <Input 
                                name="email"
                                type="hidden"
                                value={user?.email || ""}
                            />

                            <Button type="submit">Create Post</Button>
                        </Form>
                    </div>
                )
            }
        </div>
    </div>
  );
};

export default CreateForm;

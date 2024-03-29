'use client'
import { useState } from "react"
import { deletePost } from "@/app/actions/blogActions"
import { Button } from "flowbite-react"
import { PostTypes } from "@/types/postTypes"
import Input from "@/components/ui/input/Input"






const DeletePost: React.FC<{post: PostTypes}> = ({ post }) => {
    
    const [showModal, setShowModal] = useState(false)

    const handleDelete = () => {
        setShowModal(true)
    }
    const closeModal = () => {
        setShowModal(false)
    }



  return (
    <div className="w-full mt-2 mb-10 flex justify-center">
        <Button
            onClick={handleDelete}
            color='failure'
        >
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center z-50" onClick={() => setShowModal(false)}>
                    <div className="w-screen h-screen bg-black/40 absolute" />
                    <div className="bg-white p-6 rounded shadow-lg z-40" onClick={(e) => e.stopPropagation()}>
                        <p className="text-black">Are you sure you want to delete this post?</p>
                        <div className="flex gap-3 mt-5">
                            <form
                                action={deletePost}
                                onSubmit={closeModal}
                            >
                                <Input 
                                    type="hidden"
                                    name='postId'
                                    value={post.id}
                                />
                                <Button
                                    type="submit"
                                    color="success"
                                >
                                    Yes
                                </Button>
                            </form>
                            <Button onClick={closeModal} color="failure">
                                No
                            </Button>
                        </div>
                    </div>
                </div>
            )}
            Delete Post
        </Button>
    </div>
  )
}

export default DeletePost
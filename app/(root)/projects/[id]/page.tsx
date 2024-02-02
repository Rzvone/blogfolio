import { Button } from "flowbite-react";
import Image from "next/image";

interface searchParamsTypes {
    id: string;
    title: string;
    image_path: string;
    paragraph: string;
    featured: boolean;
    topPost: boolean;
    tags: string;
    authorImage: string;
    authorName: string;
    publishDate: string;
}

const ProjectFolio = ({ searchParams }: { searchParams: searchParamsTypes }) => {

  const project = searchParams

  return (
    <div className="flex min-h-[90vh] flex-col p-24 4xs:mx-[-50px] md:mx-auto">
      <div className="w-[95%] flex justify-center mb-5">
        <Image 
          src={project.image_path}
          width={1000}
          height={600}
          alt="image name from public folder"
          objectFit="cover"
        />
      </div>
        {project.tags.split(',').map((tag, i) => (
          <span key={i} className="bg-pink-700 px-2 py-1 rounded-full text-white text-center uppercase">{tag}</span>
        ))}
      <h2 className="text-4xl font-bold uppercase text-center mt-10 text-gray-500 my-3">{project.title}</h2>
      <div className="flex md:gap-20 4xs:gap-5 relative mt-10 md:flex-row 4xs:flex-col">
        <article>
          <p className="text-xl">
            {project.paragraph}
          </p>
          <div className="mt-5 flex gap-5 items-center">
            <Image 
              src={project.authorImage}
              width={500}
              height={500}
              alt="author image"
              className="rounded-full w-20 h-20 object-cover"
            />
            <div className="flex gap-2">
              <span className="text-gray-400 text-sm">{project.authorName}</span>
              <span className="text-gray-400 text-sm italic">{project.publishDate}</span>
            </div>
          </div>
        </article>
      </div>
        <div className="mt-10 w-full flex items-center justify-center">
          <Button className="px-3 py-2">
            GitHub
          </Button>
        </div>
    </div>
  )
}

export default ProjectFolio
import Image from "next/image";
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineLinkedin } from "react-icons/ai";

interface searchParamsTypes {
  id: string;
  title: string;
  image_path: string;
  paragraph: string;
  featured: boolean;
  topPost: boolean;
  tags: string[];
  authorImage: string;
  authorName: string;
  publishDate: string;
}

const BlogFolio = ({ searchParams }: { searchParams: searchParamsTypes }) => {

  const post = searchParams

  return (
    <div className="flex min-h-screen flex-col p-24 4xs:mx-[-50px] md:mx-auto">
      <div className="w-[95%] flex justify-center mb-5">
        <Image 
          src={`${post.image_path}`}
          width={1000}
          height={600}
          alt="image name from public folder"
          objectFit="cover"
        />
      </div>
      <span className="bg-pink-700 px-2 py-1 rounded-full text-white text-center">{post.tags}</span>
      <h2 className="text-4xl font-bold uppercase text-gray-500 my-3">{post.title}</h2>

      <div className="flex md:gap-20 4xs:gap-5 relative mt-10 md:flex-row 4xs:flex-col">
        <aside
          className="md:sticky
          md:top-1/4 md:h-screen
          "
        >
          <span className="uppercase text-2xl font-bold text-gray-500">Share:</span>
          <div className="flex text-3xl gap-5 text-gray-400 mt-2 [&>*]:border">
            <AiOutlineFacebook />
            <AiOutlineInstagram />
            <AiOutlineLinkedin />
          </div>
        </aside>
        <article>
          <p className="text-xl">
            {post.paragraph}
            {post.paragraph}
            {post.paragraph}
            {post.paragraph}
          </p>
          <div className="mt-5 flex gap-5 items-center">
            <Image 
              src={`${post.authorImage}`}
              width={500}
              height={500}
              alt="author image"
              className="rounded-full w-20 h-20 object-cover"
            />
            <div className="flex gap-2">
              <span>{post.authorName}</span>
              <span>{post.publishDate}</span>
            </div>
          </div>
        </article>
      </div>
    </div>
  )
}

export default BlogFolio
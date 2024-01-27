import Image from "next/image"
import { AiOutlineArrowRight } from "react-icons/ai"
import Link from "next/link"

const BlogCard = ({ post }) => {
  return (
    <article className="relative rounded-lg overflow-hidden">
        <div className="w-[1000px] h-[450px] relative">
            <Image 
                src='/images/developer.webp'
                fill
                alt="blog image"
                className="object-cover"
            />
        </div>
        <div className="absolute w-full h-full top-0 p-5 flex flex-col justify-between">
            <div>
                <span className="bg-yellow-800 px-5 text-white rounded-lg py-1">{post.tags}</span>
                <h3 className="text-3xl font-bold uppercase text-black mt-3">{post.title}</h3>
            </div>
        </div>
    </article>
  )
}

export default BlogCard
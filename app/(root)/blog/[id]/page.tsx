
import Image from "next/image";
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineLinkedin } from "react-icons/ai";
import { PostTypes } from "@/types/postTypes";
import { formatDate } from "@/utils/formatDate";

// this function fetches the data from the api and does not store it in the cache
const getData = async (id: string) => {
  const res = await fetch(`https://razvanbobonea.vercel.app/blog/api/blog/${id}`, // change this to localhost:3000 if you want to run it locally
  {
    cache: 'no-store'
  })

  if(!res.ok) {
    throw new Error('Failed')
  }

  return res.json()
}


const BlogFolio = async({ params }: { params: PostTypes }) => {

  const { id } = params
  const post = await getData(id)


  return (
    <div className="flex min-h-[88vh] flex-col p-24 4xs:mx-[-50px] md:mx-auto">
      <div className="w-[95%] flex justify-center mb-5">
        <Image 
          src={post.imag}
          width={1000}
          height={600}
          alt="image name from public folder"
          objectFit="cover"
        />
      </div>
      <span className="bg-pink-700 px-2 py-1 rounded-full text-white text-center uppercase">{post.category}</span>
      <h2 className="text-4xl font-bold uppercase text-center mt-10 text-gray-500 my-3">{post.title}</h2>

      <div className="flex md:gap-20 4xs:gap-5 relative mt-10 md:flex-row 4xs:flex-col">
        <aside
          className="md:sticky
          md:top-1/4 
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
            {post.desc}
          </p>
          <div className="mt-5 flex gap-5 items-center">
            <Image 
              src={post.user.image}
              width={500}
              height={500}
              alt="author image"
              className="rounded-full w-20 h-20 object-cover"
            />
            <div className="flex gap-2">
              <span className="text-gray-400 text-sm">{post.user.name}</span>
              <span className="text-gray-400 text-sm italic">{formatDate(post.createdAt)}</span>
            </div>
          </div>
        </article>
      </div>
    </div>
  )
}

export default BlogFolio
import Posts from "@/components/shared/postz/Posts"
import TopPosts from "@/components/shared/topposts/TopPosts"
import prisma from "@/lib/prismadb"


const Blog = async() => {

  const posts = await prisma.blog.findMany({
    include: {
      user: true,
    }
  })

  return (
    <div className="grid lg:grid-cols-3 lg:gap-10 grid-cols-1 w-[95%] max-w-[1450px] overflow-y-hidden h-fit mt-10 max-lg:space-y-7 mx-auto mb-10">
        <Posts posts={posts as any}/>
        <TopPosts posts={posts as any}/>
    </div>
  )
}

export default Blog
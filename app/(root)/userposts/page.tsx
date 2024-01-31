import prisma from "@/lib/prismadb";
import getCurrentUser from "@/app/actions/getCurrentUser";
import BlogCard from "@/components/shared/blogcard/BlogCard";
import DeletePost from "@/components/shared/deletepost/DeletePost";
// delete post suun




const UserPosts = async() => {
    const user = await getCurrentUser()
    const posts = await prisma.blog.findMany({
        where: {
            userEmail: user?.email ?? undefined
        },
        orderBy: {
            createdAt: "desc"
        },
        include: {
            user: true
        }
    })

  return (
    <div className="min-h-screen w-full mt-10">
        <div className="max-w-[90%] mx-auto">
            <div className="w-full text-center mb-10">
                <h1 className="text-3xl font-bold text-gray-600 mb-10">Hello {user?.name}</h1>
                <span className="text-lg">You have published {posts.length} posts</span>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 justify-center items-center gap-10">
                {posts.map((p) => (
                    <div className="relative" key={p.id}>
                        <BlogCard post={p as any} />
                        <DeletePost post={p as any} />
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default UserPosts
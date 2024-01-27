import Posts from "@/components/shared/postz/Posts"
import TopPosts from "@/components/shared/topposts/TopPosts"


const Blog = () => {
  return (
    <div className="grid lg:grid-cols-3 lg:gap-10 grid-cols-1 w-[95%] max-w-[1450px] overflow-y-hidden h-fit mt-10 max-lg:space-y-7 mx-auto mb-10">
        <Posts />
        <TopPosts />
    </div>
  )
}

export default Blog
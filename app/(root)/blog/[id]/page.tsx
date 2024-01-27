
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

const BlogFolio = ({ searchParams }: { searchParams: searchParamsTypes }) => {

  const post = searchParams

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">{post.title}</div>
  )
}

export default BlogFolio
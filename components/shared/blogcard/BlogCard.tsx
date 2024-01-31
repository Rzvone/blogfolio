import Image from "next/image";
import Link from "next/link";
import { PostTypes } from "@/types/postTypes";

const BlogCard: React.FC<{ post: PostTypes }> = ({ post }) => {
  return (
    <article className="relative rounded-lg overflow-hidden">
      <Link href={`/blog/${post.id}`}>
        <div className="w-[800px] h-[450px] relative">
          <Image
            src={post?.imag}
            layout="fill"
            alt="blog image"
            objectFit="fill"
            className="bg-gray-400"
          />
        </div>
        <div className="absolute w-full h-full top-0 p-5 flex flex-col justify-between">
          <div>
            <span className="bg-yellow-800 px-5 text-white rounded-lg py-1">
              {post?.category}
            </span>
            <h3 className="text-3xl font-bold uppercase text-white mt-3">
              {post?.title}
            </h3>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default BlogCard;

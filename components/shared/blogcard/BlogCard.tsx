
import Image from "next/image";
import Link from "next/link";
import { Button } from "flowbite-react";

const BlogCard = ({ post }: any) => {
  return (
    <article className="relative rounded-lg overflow-hidden">
      <div className="w-[800px] h-[450px] relative">
        <Image
          src="/images/developer.webp"
          fill
          alt="blog image"
          objectFit="cover"
        />
      </div>
      <div className="absolute w-full h-full top-0 p-5 flex flex-col justify-between">
        <div>
          <span className="bg-yellow-800 px-5 text-white rounded-lg py-1">
            {post.tags}
          </span>
          <h3 className="text-3xl font-bold uppercase text-black mt-3">
            {post.title}
          </h3>
        </div>
      </div>
      <Link
        href={{
            pathname: `/blog/${post.id}`,
            query: {...post}
        }}
      >
        <Button className="w-full" size='xs' color="dark">
            To Article
        </Button>
      </Link>
    </article>
  );
};

export default BlogCard;

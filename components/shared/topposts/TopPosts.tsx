"use client";
import { Button } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { PostTypes } from "@/types/postTypes";
import { formatDate } from "@/utils/formatDate";



const TopPosts: React.FC<{ posts: PostTypes[] }> = ({ posts }) => {
  const topPosts = posts.filter((p) => p.topPost === true);
  const [visibleBlogs, setVisibleBlogs] = useState(3);
  const showMoreBlogs = () => {
    setVisibleBlogs((prev) => prev + 2);
  };

  return (
    <section aria-labelledby="top-post">
      <div className="w-full text-center">
        <h2
          id="top-post"
          className="text-center text-2xl font-bold uppercase text-gray-500 px-2 mb-10 4xs:mt-10 md:mt-0"
        >
          Top Post
        </h2>
      </div>
      <div className="flex h-full flex-col gap-12 items-center">
        {topPosts.slice(0, visibleBlogs).map((post, index) => (
          <article key={index}>
            <Link
              href={`/blog/${post.id}`}
            >
              <div className="relative cursor-pointer">
                <Image
                  src={post.imag}
                  width={800}
                  height={800}
                  alt={`${post.title}`}
                />
              </div>
              <div className="w-full flex justify-center">
                <span className="bg-yellow-600 px-2 py-1 rounded-full mt-3 text-white uppercase my-5">
                  {post.category}
                </span>
              </div>
              <h3 className="font-bold uppercase text-gray-500 text-center">
                {post.title}
              </h3>
              <div className="flex gap-3 justify-center mt-2 lg:flex-row 4xs:flex-col">
              </div>
            </Link>
          </article>
        ))}
        {visibleBlogs < topPosts.length && (
          <div className="flex justify-center">
            <Button
              onClick={showMoreBlogs}
              gradientDuoTone="purpleToPink"
              className="hover:text-black font-semibold italic px-4"
            >
              Show More
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default TopPosts;

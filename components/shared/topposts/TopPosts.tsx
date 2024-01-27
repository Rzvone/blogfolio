"use client";
import { blogData } from "@/constants/blogData";
import { Button } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const TopPosts = () => {
  const topPosts = blogData.filter((blog) => blog.topPost === true);
  const [visibleBlogs, setVisibleBlogs] = useState(4);
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
              href={{
                pathname: `/blog/${post.id}`,
                query: { ...post },
              }}
            >
              <div className="relative cursor-pointer">
                <Image
                  src="/images/coderjpg.webp"
                  width={800}
                  height={800}
                  alt="image top post"
                />
              </div>
              <div className="w-full flex justify-center">
                <span className="bg-yellow-600 px-2 py-1 rounded-full mt-3 text-white">
                  {post.tags}
                </span>
              </div>
              <h3 className="font-bold uppercase text-gray-500 text-center">
                {post.title}
              </h3>
              <div className="flex gap-3 justify-center mt-2 lg:flex-row 4xs:flex-col">
                <span className="text-gray-400">{post.authorName}</span>
                <span className="italic text-gray-400">{post.publishDate}</span>
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

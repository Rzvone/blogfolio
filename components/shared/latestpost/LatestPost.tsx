'use client'
import { useState } from 'react'
import BlogCard from '../blogcard/BlogCard';
import { Button } from 'flowbite-react';
import { PostTypes } from '@/types/postTypes';

const LatestPost:React.FC<{posts: PostTypes[]}> = ({posts}) => {

    const latestPost = posts.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())

    const [visibleBlogs, setVisibleBlogs] = useState(3)
    const showMoreBlogs = () => {
        setVisibleBlogs((prev) => prev + 3)
    }

  return (
    <section className='col-span-2' aria-labelledby='latest-post'>
        <div className='w-full text-center'>
            <h2 id='latest-post' className='text-center text-2xl font-bold uppercase text-gray-500 inline-block px-2 mb-10'>
                Latest Post
            </h2>
        </div>
        <div className='flex flex-col gap-10 h-full'>
            {latestPost
                .slice(0, visibleBlogs)
                .map((post, index) => (
                <BlogCard post={post} key={index} />
            ))}
            {visibleBlogs < latestPost.length && (
            <div className='flex justify-center'>
                <Button
                    onClick={showMoreBlogs}
                    gradientDuoTone='pinkToOrange'
                    className='hover:text-black font-semibold italic px-4'
                >
                    Show More
                </Button>
            </div>
        )}
        </div>
    </section>
  )
}

export default LatestPost
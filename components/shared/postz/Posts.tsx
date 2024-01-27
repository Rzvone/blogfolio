'use client'
import { useState } from 'react'
import { blogData } from '@/constants/blogData';
import BlogCard from '../blogcard/BlogCard';
import { Button } from 'flowbite-react';

const Posts = () => {


    const [visibleBlogs, setVisibleBlogs] = useState(5)
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
            {blogData
                .slice(0, visibleBlogs)
                .map((post, index) => (
                <BlogCard post={post} key={index} />
            ))}
            {visibleBlogs < blogData.length && (
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

export default Posts
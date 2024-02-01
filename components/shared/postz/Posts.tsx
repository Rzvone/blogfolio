'use client'
import { useState } from 'react'
import { Button } from 'flowbite-react';
import { PostTypes } from '@/types/postTypes';
import BlogCard from '../blogcard/BlogCard';
import clsx from 'clsx';

const Posts: React.FC<{ posts: PostTypes[] }> = ({ posts }) => {


    const [visibleBlogs, setVisibleBlogs] = useState(3)
    const showMoreBlogs = () => {
        setVisibleBlogs((prev) => prev + 3)
    }

    const [selectedCategory, setSelectedCategory] = useState('all')

    const filterPostsByCategory = () => {
        if (selectedCategory === "all") {
          return posts.slice(0, visibleBlogs);
        } else {
          return posts
            .filter(
              (post) => post.category === selectedCategory
            )
            .slice(0, visibleBlogs);
        }
    };

    const categories = [
        "frontend",
        "backend",
        "fullstack",
        "devops",
        "everything",
        "all",
    ];

    const handleCategoryChange = (category: string) => {
        setSelectedCategory(category);
        setVisibleBlogs(5);
    };

  return (
    <section className='col-span-2' aria-labelledby='latest-post'>
       <div className='w-full text-center'>
            <h2 id='posts' className='text-center text-2xl font-bold uppercase text-gray-500 inline-block px-2 mb-10'>
                All Post
            </h2>
       </div>
       <div className='flex justify-start space-x-4 flex-wrap'>
            {categories.map((cat) => (
                <Button
                    key={cat}
                    onClick={() => handleCategoryChange(cat)}
                    className={clsx(
                        selectedCategory === cat ? "bg-gray-800/60 text-white" : "bg-gray-400 text-white",
                        'uppercase font-semibold rounded mb-10' 
                    )}
                >
                    {cat === 'all' ? "All" : cat}
                </Button>
            ))}
       </div>

       <div className='flex flex-col gap-10 h-full'>
        {filterPostsByCategory()
            .slice(0, visibleBlogs)
            .map((p, id) => (
                <BlogCard post={p} key={id} />
            ))}
            {visibleBlogs < posts.length && (
                <div className='flex'>
                    <Button onClick={showMoreBlogs} gradientDuoTone='pinkToOrange' className='hover:text-black font-semibold italic px-4'>
                        Show More
                    </Button>
                </div>
            )}
       </div>
    </section>
  )
}

export default Posts
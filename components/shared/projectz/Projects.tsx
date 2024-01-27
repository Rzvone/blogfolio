'use client'
import { projectsData } from '@/constants/projectsData';
import { Button } from 'flowbite-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Projectz = () => {

    const [visibleProjects, setVisibleProjects] = useState(4)
    const showMoreProjects = () => {
        setVisibleProjects((prev) => prev + 2)
    }


  return (
    <section aria-labelledby='projects'>
        <div className='w-full text-center'>
            <h2
                id='projects'
                className='text-center text-2xl font-bold uppercase text-gray-500 inline-block px-2 mb-10'
            >
                Projects
            </h2>
        </div>
        <div className='flex h-full flex-col gap-12 items-center'>
            {projectsData.slice(0, visibleProjects).map((project, i) => (
                <div key={i}>
                    <Link
                        href={{
                            pathname: `/projects/${project.id}`,
                            query: {...project}
                        }}
                    >
                        <div className='relative cursor-pointer'>
                            <Image 
                                src='/images/developer.webp'
                                width={800}
                                height={800}
                                alt='image project'
                            />
                        </div>
                        <div className='w-full flex justify-center'>
                            <span className='bg-yellow-600 px-2 py-1 rounded-full mt-3 text-white'>
                                {project.tags}
                            </span>
                        </div>
                        <h3 className='font-bold uppercase text-gray-500 text-center'>
                            {project.title}
                        </h3>
                        <div className='flex gap-3 justify-center mt-2 lg:flex-row 4xs:flex-col'>
                            <span>{project.authorName}</span>
                            <span>{project.publishDate}</span>
                        </div>
                    </Link>
                </div>
            ))}
            {visibleProjects < projectsData.length && (
                <div className='flex justify-center'>
                    <Button
                        onClick={showMoreProjects}
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

export default Projectz
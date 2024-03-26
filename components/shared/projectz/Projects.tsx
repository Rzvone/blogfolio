'use client'
import { projectsData } from '@/constants/projectsData';
import { Button } from 'flowbite-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Projectz = () => {

    const [visibleProjects, setVisibleProjects] = useState(6)
    const showMoreProjects = () => {
        setVisibleProjects((prev) => prev + 3)
    }


  return (
    <section aria-labelledby='projects' className='min-h-[60vh]'>
        <div className='w-full text-center'>
            <h2
                id='projects'
                className='text-center text-2xl font-bold uppercase text-gray-500 inline-block px-2 mb-10'
            >
                Projects
            </h2>
        </div>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 4xs:grid-cols-1 h-full gap-12 items-center'>
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
                                src={project.image_path}
                                width={800}
                                height={800}
                                alt='image project'
                            />

                        </div>
                        <div className='w-full flex justify-center my-5'>
                            <span className='bg-yellow-600 px-2 py-1 rounded-full mt-3 text-white uppercase'>
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
            
        </div>
        {visibleProjects < projectsData.length && (
                <div className='flex w-full justify-center mt-10'>
                    <Button
                        onClick={showMoreProjects}
                        gradientDuoTone='pinkToOrange'
                        className='hover:text-black font-semibold italic px-4 w-full'
                    >
                        Show More
                    </Button>
                </div>
            
            )}
    </section>
  )
}

export default Projectz
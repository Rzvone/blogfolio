import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div className="flex min-h-screen flex-col items-center text-center p-24">
      <div className='text-center 4xs:mx-[-50px] md:mx-auto mb-10 '>
        <h1 className='text-6xl font-bold mb-5'>raz<span className='text-green-600'>van</span></h1>
        <p>
          I'm Raz, a full stack developer with a passion for building things, 
          whether they're software systems or physical contraptions. My love for technology 
          extends beyond the digital realm, and I find immense satisfaction in tinkering with 
          electronics, motorcycles, and exploring the possibilities of Raspberry 
          Pi-powered IoT projects.
        </p>
      </div>
      <div className='text-center 4xs:mx-[-50px] md:mx-auto mb-10'>
        <h3 className='text-3xl mb-5'>Software</h3>
        <p>
          As a developer, I'm proficient in both front-end and back-end technologies, 
          allowing me to create end-to-end web applications. I'm well-versed in JavaScript, 
          HTML, CSS, React, NextJs, Java and many more and I'm always eager to expand my 
          skill set by learning new languages and frameworks.
        </p>
        <div className='flex flex-wrap gap-3 items-center justify-center mt-10'>
          <Image src='/icons/html-5.webp' width={50} height={50} alt='HTML5' />
          <Image src='/icons/css.webp' width={50} height={50} alt='css' />
          <Image src='/icons/javascript.webp' width={50} height={50} alt='javascript' />
          <Image src='/icons/typescript.webp' width={50} height={50} alt='typescript' />
          <Image src='/icons/ReactJs.webp' width={50} height={50} alt='react' />
          <Image src='/icons/nextjs.webp' width={50} height={50} alt='nextjs' />
          <Image src='/icons/nodejs.webp' width={50} height={50} alt='node' />
          <Image src='/icons/tailwind.webp' width={50} height={50} alt='tailwind' />
          <Image src='/icons/java.webp' width={50} height={50} alt='java' />
          <Image src='/icons/docker.webp' width={50} height={50} alt='docker' />
        </div>
      </div>
      <div className='text-center 4xs:mx-[-50px] md:mx-auto'>
        <h3 className='text-3xl mb-5'>Passions</h3>
        <p>
          My passion for tinkering and building extends to the physical world as well. 
          I've spent countless hours modifying my motorcycle, adding custom features 
          and enhancing its performance. I'm always eager to embrace new challenges 
          and expand my skills and knowledge. As a developer and a DevOps enthusiast, 
          I'm excited to see what the future holds, where creativity meets innovation 
          and technology seamlessly integrates with the physical world, shaping a brighter 
          and more interconnected future.
        </p>
      </div>
    </div>
  )
}

export default About
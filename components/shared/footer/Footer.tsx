import Image from 'next/image'
import Link from 'next/link'


const Footer = () => {


  return (
    <div className='flex w-full bg-[#130019] text-white h-[80px] items-center justify-between select-none'>
        <div className='ml-10 4xs:hidden md:flex'>
          <h6>&copy; Copyright 2024</h6>
        </div>
        <div className='flex flex-row gap-3 4xs:items-center 4xs:justify-center 4xs:mx-auto'>
          <Link href='https://www.facebook.com/BBRoggo' draggable={false}>
            <Image 
              src='/icons/facebook.png'
              width={30}
              height={30}
              alt='facebook'
              draggable={false}
              className='hover:scale-90 transition-all duration-500 ease-in-out'
            />
          </Link>
          <Link href='https://github.com/Rzvone' draggable={false}>
            <Image 
              src='/icons/github.png'
              width={30}
              height={30}
              alt='github'
              draggable={false}
              className='hover:scale-90 transition-all duration-500 ease-in-out'
            />
          </Link>
          <Link href='#' draggable={false}>
            <Image 
              src='/icons/instagram.png'
              width={30}
              height={30}
              alt='instagram'
              draggable={false}
              className='hover:scale-90 transition-all duration-500 ease-in-out'
            />
          </Link>
          <Link href='https://www.linkedin.com/in/razvan-bobonea-446200139/' draggable={false}>
            <Image 
              src='/icons/linkedin.png'
              width={30}
              height={30}
              alt='linkedin'
              draggable={false}
              className='hover:scale-90 transition-all duration-500 ease-in-out'
            />
          </Link>
        </div>
        <div className='flex gap-5 mr-10 3xs:hidden md:flex '>
          <Link className='hover:text-green-400' href='/' draggable={false}>
            Home
          </Link>
          <Link className='hover:text-green-400' href='/about' draggable={false}>
            About
          </Link>
          <Link className='hover:text-green-400' href='/projects' draggable={false}>
            Projects
          </Link>
          <Link className='hover:text-green-400' href='/blog' draggable={false}>
            Blog
          </Link>
        </div>
    </div>
  )
}

export default Footer
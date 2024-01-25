'use client'
import { Button, Navbar, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react"
import Link from "next/link"


const Header = () => {
  return (
    <Navbar className="flex flex-row bg-[#130019] text-white fixed w-full">
        <Link href='/' className="font-semibold 2xs:text-xl md:text-4xl p-2">
            raz<span className="text-green-700">van</span>
        </Link>
        <div className="flex flex-row gap-5 md:order-2 items-center justify-center">
            <Link href="/sign-in">
                <Button className="hover:text-black" gradientDuoTone='greenToBlue' >
                    Sign in
                </Button>
            </Link>
            <NavbarToggle />
        </div>
        <NavbarCollapse className="">
            <NavbarLink className="text-white font-semibold hover:text-black rounded-md text-center border-none md:text-xl 3xs:text-xl p-2 mb-2 mt-2" href="/">
                Home
            </NavbarLink>
            <NavbarLink className="text-white font-semibold hover:text-black rounded-md text-center border-none md:text-xl 3xs:text-xl p-2 mb-2 mt-2" href="/about">
                About
            </NavbarLink>
            <NavbarLink className="text-white font-semibold hover:text-black rounded-md text-center border-none md:text-xl 3xs:text-xl p-2 mb-2 mt-2" href='/projects'>
                Projects
            </NavbarLink>
            <NavbarLink className="text-white font-semibold hover:text-black rounded-md text-center border-none md:text-xl 3xs:text-xl p-2 mb-2 mt-2" href="/blog">
                Blog
            </NavbarLink>
        </NavbarCollapse>
    </Navbar>
  )
}

// flex flex-row gap-5 md:order-2 items-center justify-center

export default Header
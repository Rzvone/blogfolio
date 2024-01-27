"use client";
import {
  Button,
  Navbar,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import Link from "next/link";
import useMenuActive from "@/hooks/useMenuActive/useMenuActive";

const Header = () => {
  {
    /* 
        Used flowbite-react for the navbar, because it's a lot easier to make a responsive navbar with it.
        And a hamburger menu is a lot easier to make with it.

    */
  }
  return (
    <Navbar className="flex flex-row bg-[#130019] text-white fixed w-full z-[1000] shadow-xl select-none">
      <Link
        href="/"
        className="font-semibold 2xs:text-xl md:text-4xl p-2"
        draggable={false}
      >
        raz<span className="text-green-700">van</span>
      </Link>
      <div className="flex flex-row gap-5 md:order-2 items-center justify-center">
        <Link href="/sign-in" draggable={false}>
          <Button className="hover:text-black" gradientDuoTone="greenToBlue">
            Sign in
          </Button>
        </Link>
        <NavbarToggle />
      </div>
      <NavbarCollapse className="">
        <NavbarLink
          className="
            text-white 
            font-semibold
            hover:text-yellow-600
            rounded-md 
            text-center 
            border-none 
            md:text-xl 
            3xs:text-xl 
            p-2 mb-2 mt-2
            "
          href="/"
          draggable={false}
          active={useMenuActive("/")}
        >
          Home
        </NavbarLink>
        <NavbarLink
          className="text-white font-semibold hover:text-yellow-600 rounded-md text-center border-none md:text-xl 3xs:text-xl p-2 mb-2 mt-2"
          href="/about"
          draggable={false}
          active={useMenuActive("/about")}
        >
          About
        </NavbarLink>
        <NavbarLink
          className="text-white font-semibold hover:text-yellow-600 rounded-md text-center border-none md:text-xl 3xs:text-xl p-2 mb-2 mt-2"
          href="/projects"
          draggable={false}
          active={useMenuActive("/projects")}
        >
          Projects
        </NavbarLink>
        <NavbarLink
          className="text-white font-semibold hover:text-yellow-600 rounded-md text-center border-none md:text-xl 3xs:text-xl p-2 mb-2 mt-2"
          href="/blog"
          draggable={false}
          active={useMenuActive("/blog")}
        >
          Blog
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
};

export default Header;

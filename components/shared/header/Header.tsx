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
import { User } from "@prisma/client";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";

interface HeaderProps {
  user: User;
}

const Header: React.FC<HeaderProps> = ({ user }) => {
  {
    /* 
        Used flowbite-react for the navbar, because it's a lot easier to make a responsive navbar with it.
        And a hamburger menu is a lot easier to make with it.

    */
  }

  const [openUserMenu, setOpenUserMenu] = useState(false);
  const router = useRouter();

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
        {!user && (
          <Link href="/access" draggable={false}>
            <Button className="hover:text-black" gradientDuoTone="greenToBlue">
              Sign in
            </Button>
          </Link>
        )}
        {user && (
          <div className="flex gap-5 items-center flex-1 justify-end max-md:hidden">
            <h1>{user.name}</h1>
            <Image
              src={user.image as string}
              width={50}
              height={50}
              alt="user image"
              className="rounded-full border-2 cursor-pointer hover:border-green-700"
              onClick={() => setOpenUserMenu(!openUserMenu)}
            />
          </div>
        )}

        {openUserMenu && (
          <ul className="z-10 fixed top-[70px] w-48 bg-white shadow-md rounded-md p-4">
            {user.email === "bobonea.razvan.ctin@gmail.com" && (
              <>
                <Link href={"/create"} onClick={() => setOpenUserMenu(false)}>
                  <li className="text-black p-2 hover:bg-green-300 rounded-lg">
                    Create a post
                  </li>
                </Link>
                <Link
                  href={"/userposts"}
                  onClick={() => setOpenUserMenu(false)}
                >
                  <li className="text-black p-2 hover:bg-green-300 rounded-lg">
                    My posts
                  </li>
                </Link>
              </>
            )}
            <li
              className="text-black p-2 hover:bg-green-300 rounded-lg cursor-pointer"
              onClick={() => signOut()}
            >
              Sign out
            </li>
          </ul>
        )}

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

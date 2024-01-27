"use client";
import { Button } from "flowbite-react";
import TextEffect from "../textEffect/TextEffect";
import Image from "next/image";
import { blogData } from "@/constants/blogData";
import Link from "next/link";

const Hero = () => {
  const handleDownloadResume = () => {
    const resumePath = "/files/RazvanBobonea.pdf";
    const link = document.createElement("a");
    link.href = resumePath;
    link.download = "RazvanBobonea.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const featuredPost = blogData.filter((blog) => blog.featured === true);

  const topFeature = featuredPost.slice(0, 1);

  const bottomFeature = featuredPost.slice(1, 4);

  return (
    <div className="flex flex-col select-none">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 3xs:mx-[-50px] md:mx-auto">
        <div>
          <h1 className="4xs:text-[36px] sm:text-4xl font-semibold">
            Hello, I&apos;m Raz
          </h1>
          <TextEffect />
          <p className="mt-[1.5rem] text-[18px] text-gray-400">
            Hello, I&apos;m Razvan, a passionate Full Stack Developer with a
            keen eye for creating innovative and efficient solutions. With a
            solid foundation in both front-end and back-end technologies, I
            specialize in crafting dynamic and responsive web applications. My
            commitment to clean, maintainable code and a user-centric approach
            sets the stage for delivering seamless digital experiences. Explore
            my portfolio to witness the fusion of creativity and technical
            expertise, as I continue to push the boundaries of what&apos;s
            possible in the world of web development.
          </p>
          <div className="flex gap-5 mt-5 md:flex-row 3xs:flex-col">
            <Button
              gradientDuoTone="purpleToPink"
              className="hover:text-black px-2"
              onClick={handleDownloadResume}
            >
              Download Resume
            </Button>
            <Button
              gradientDuoTone="purpleToBlue"
              className="hover:text-black px-7"
              onClick={() => window.open("https://wa.me/40756168137")}
            >
              Let&apos;s Talk
            </Button>
          </div>
        </div>
        <div className="lg:w-[500px] lg:h-[500px] lg:flex md:h-[400px] md:w-[400px] 3xs:hidden mx-auto relative">
          <Image
            src="/images/developer.webp"
            alt="developer"
            objectFit="cover"
            className="rounded-full"
            layout="fill"
            draggable={false}
          />
        </div>
      </div>
      <section className="relative mt-20">
        <div className="w-[95%] mx-auto">
          {topFeature.map((post, index) => (
            <article
              key={index}
              className="flex flex-col gap-5 mb-5 text-center relative items-center"
            >
              <span
                className={
                  post.tags.includes("Frontend")
                    ? "bg-pink-800 text-white py-2 w-[50%] flex items-center justify-center rounded-lg"
                    : ""
                }
              >
                {post.tags}
              </span>
              <h2 className="text-6xl font-bold uppercase">{post.title}</h2>
              <div className="flex items-center gap-3 justify-center">
                <div className="w-10 h-10 rounded-full bg-black"></div>
                <span>{post.authorName}</span>
                <span>{post.publishDate}</span>
              </div>

              <Link
                href={{
                  pathname: `/blog/${post.id}`,
                  query: { ...post },
                }}
              >
                <div className="relative max-h-[600px] overflow-hidden shadow-xl">
                  <Image
                    src="/images/coderjpg.webp"
                    alt={`${post.title}`}
                    width={500}
                    height={500}
                    objectFit="cover"
                    draggable={false}
                    className="hover:scale-105 transition-all duration-500 ease-in-out"
                    // change maby for different type of images or not
                  />
                </div>
              </Link>
            </article>
          ))}
          <div className="grid lg:grid-cols-3 gap-8 md:grid-cols-2 4xs:grid-cols-1">
            {bottomFeature.map((post, index) => (
              <article className="flex flex-col gap-3 items-center text-center relative">
                  <div className="relative overflow-hidden h-72 shadow-xl w-full">
                    <Link href={{
                        pathname: `/blog/${post.id}`,
                        query: {...post}
                        }}
                        className="w-full"
                    >
                        <div className="w-full h-full">
                          <Image
                            src="/images/coderjpg.webp"
                            alt={`${post.title}`}
                            objectFit="contain"
                            layout="fill"
                            className="hover:scale-105 transition-all duration-500 ease-in-out"
                          />
                        </div>
                    </Link>
                  </div>
                <span className="bg-pink-800 text-white px-2 rounded-lg">
                  {post.tags}
                </span>
                <h3 className="text-sm font-bold uppercase text-gray-500">
                  {post.title}
                </h3>
                <span className="text-gray-400 italic">{post.publishDate}</span>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;

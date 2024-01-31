"use client";
import { Button } from "flowbite-react";
import TextEffect from "../textEffect/TextEffect";
import Image from "next/image";
import Link from "next/link";
import { PostTypes } from "@/types/postTypes";
import { formatDate } from "@/utils/formatDate";

const Hero: React.FC<{posts: PostTypes[]}> = ({ posts }) => {


  const handleDownloadResume = () => {
    const resumePath = "/files/RazvanBobonea.pdf";
    const link = document.createElement("a");
    link.href = resumePath;
    link.download = "RazvanBobonea.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const featuredPost = posts.filter((p) => p.featured === true);

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
                className="bg-green-600 text-white py-2 w-[50%] flex items-center justify-center rounded-lg uppercase"
                
              >
                {post.category}
              </span>
              <h2 className="text-6xl font-bold uppercase">{post.title}</h2>
              <div className="flex items-center gap-3 justify-center">
                {post.user.image && (
                  <Image 
                    src={post.user.image}
                    width={50}
                    height={50}
                    alt={`${post.user.name} avatar`}
                    className="rounded-full"
                  />
                )}
                <span>{post.user.name}</span>
                <span>{formatDate(post.createdAt)}</span>
              </div>

              <Link
                href={`/blog/${post.id}`}
              >
                <div className="relative max-h-[600px] overflow-hidden shadow-xl">
                  <Image
                    src={post.imag}
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
                    <Link href={`/blog/${post.id}`}
                        className="w-full"
                    >
                        <div className="w-full h-full">
                          <Image
                            src={post.imag}
                            alt={`${post.title}`}
                            objectFit="cover"
                            layout="fill"
                            className="hover:scale-105 transition-all duration-500 ease-in-out bg-gray-600"
                          />
                        </div>
                    </Link>
                  </div>
                <span className="bg-green-600 text-white px-2 py-1 rounded-full uppercase">
                  {post.category}
                </span>
                <h3 className="text-sm font-bold uppercase text-gray-500">
                  {post.title}
                </h3>
                <span className="text-gray-400 italic">{post.user.name}</span>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;

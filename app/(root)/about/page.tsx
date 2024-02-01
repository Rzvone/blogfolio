import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="flex min-h-[89vh] flex-col items-center p-24 w-full">
      <h1 className="4xs:text-[36px] sm:text-6xl font-semibold mb-10">About</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="4xs:mx-[-50px] md:mx-auto mb-10 w-full">
          <h4 className="text-2xl font-semibold mb-5">
            I&apos;m Raz<span className="text-green-600">van</span>. Passionate
            Full-Stack Developer with a Drive for Innovation
          </h4>
            <p className="mb-5">
              <span className="ml-10">As</span> a full-stack developer with a
              background in hardware and software, I&apos;m driven by a passion
              for creating innovative and user-friendly solutions. My journey into
              development began with a fascination for understanding the inner
              workings of slot machines during my time as a Slot Manager at
              Celebrity Cruise Lines. This led me to explore Power BI, which
              opened up a world of possibilities for data visualization and
              reporting. After discovering the world of full-stack development, I
              embarked on a rigorous Boot Camp program, honing my skills in
              front-end technologies like HTML, CSS, and JavaScript and its
              frameworks, along with back-end languages like Java and Node.js.
            </p>
            <p className="mb-5">
              <span className="ml-10">My</span> enthusiasm for technology extends
              beyond development, encompassing the realm of Raspberry Pi.
              I&apos;ve built a small testing lab for DevOps projects,
              demonstrating my desire to explore the intricacies of software
              delivery and infrastructure management. Beyond the digital sphere,
              I&apos;m equally passionate about tinkering with my car and
              motorcycle, relishing the challenge of optimizing performance and
              efficiency.
            </p>
            <p className="mb-5">
              <span className="ml-10">Throughout</span> my endeavors, I&apos;ve
              consistently demonstrated my ability to quickly grasp new concepts
              and adapt to emerging technologies. I thrive in collaborative
              environments, valuing the exchange of ideas and expertise that
              drives innovation. My ultimate goal is to contribute to the
              development of cutting-edge solutions that empower businesses and
              enhance user experiences. Additionally, I&apos;m passionate about
              mentoring junior developers, sharing my knowledge and experience to
              help them grow and succeed in their careers. I believe that by
              nurturing the next generation of developers, we can foster a more
              vibrant and innovative tech industry.
            </p>
        </div>
        <div className="text-center 4xs:mx-[-50px] md:mx-auto mb-10 mt-96">
          <h3 className="text-3xl mb-5">Software</h3>
          <p>
            As a developer, I'm proficient in both front-end and back-end
            technologies, allowing me to create end-to-end web applications. I'm
            well-versed in JavaScript, HTML, CSS, React, NextJs, Java and many
            more and I'm always eager to expand my skill set by learning new
            languages and frameworks.
          </p>
          <div className="flex flex-wrap gap-3 items-center justify-center mt-10">
            <Image
              src="/icons/html-5.webp"
              width={50}
              height={50}
              alt="HTML5"
            />
            <Image src="/icons/css.webp" width={50} height={50} alt="css" />
            <Image
              src="/icons/javascript.webp"
              width={50}
              height={50}
              alt="javascript"
            />
            <Image
              src="/icons/typescript.webp"
              width={50}
              height={50}
              alt="typescript"
            />
            <Image
              src="/icons/ReactJs.webp"
              width={50}
              height={50}
              alt="react"
            />
            <Image
              src="/icons/nextjs.webp"
              width={50}
              height={50}
              alt="nextjs"
            />
            <Image src="/icons/nodejs.webp" width={50} height={50} alt="node" />
            <Image
              src="/icons/tailwind.webp"
              width={50}
              height={50}
              alt="tailwind"
            />
            <Image src="/icons/java.webp" width={50} height={50} alt="java" />
            <Image
              src="/icons/docker.webp"
              width={50}
              height={50}
              alt="docker"
            />
          </div>
        </div>
        <div className="text-center 4xs:mx-[-50px] md:mx-auto">
          <h3 className="text-3xl mb-5">Passions</h3>
          <p>
            My passion for tinkering and building extends to the physical world as
            well. I've spent countless hours modifying my motorcycle, adding
            custom features and enhancing its performance. I'm always eager to
            embrace new challenges and expand my skills and knowledge. As a
            developer and a DevOps enthusiast, I'm excited to see what the future
            holds, where creativity meets innovation and technology seamlessly
            integrates with the physical world, shaping a brighter and more
            interconnected future.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;


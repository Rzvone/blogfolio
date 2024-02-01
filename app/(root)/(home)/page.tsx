import Hero from "@/components/hero/Hero";
import LatestPost from "@/components/shared/latestpost/LatestPost";
import TopPosts from "@/components/shared/topposts/TopPosts";
import prisma from "@/lib/prismadb";


const Home = async() => {

  const posts = await prisma.blog.findMany({
    include: {
      user: true,
    }
  })

  return (
    <main className="flex min-h-screen flex-col justify-between p-24 select-none">
      <Hero posts={posts as any}/>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 4xs:grid-cols-1 lg:gap-10  mx-auto max-w-[1450px] overflow-y-hidden h-fit mt-10">
        <LatestPost posts={posts as any} />
        <TopPosts posts={posts as any} />
      </div>
    </main>
  );
}

export default Home;

import Hero from "@/components/hero/Hero";
import LatestPost from "@/components/shared/latestpost/LatestPost";
import TopPosts from "@/components/shared/topposts/TopPosts";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between p-24 select-none">
      <Hero />
      <div className="grid lg:grid-cols-3 md:grid-cols-2 4xs:grid-cols-1 lg:gap-10 w-[95%] mx-auto max-w-[1450px] overflow-y-hidden h-fit mt-10">
        <LatestPost />
        <TopPosts />
      </div>
    </main>
  );
}

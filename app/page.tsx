import Image from "next/image";
import Hero from '@/components/Home/Hero';
import Navbar from '@/components/Home/Navbar';
import GetInvolved from '@/components/Home/GetInvolved';
import Statistic from "@/components/Home/Statistic";
import OurStory from "@/components/Home/OurStory";


export default function Home() {
  return (

  <main className="bg-neutral-100">
    <Hero />
    <Navbar />
    <Statistic />
    <OurStory />
    <GetInvolved />
    
  </main>
    
  );
}


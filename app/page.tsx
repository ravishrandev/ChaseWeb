import Image from "next/image";
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import GetInvolved from '@/components/GetInvolved';
import Statistic from "@/components/Statistic";



export default function Home() {
  return (

  <main className="bg-neutral-100">
    <Hero />
    <Navbar />
    <Statistic />
    <GetInvolved />
    
  </main>
    
  );
}


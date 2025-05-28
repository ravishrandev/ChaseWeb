import Image from "next/image";
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import GetInvolved from '@/components/GetInvolved';



export default function Home() {
  return (

  <main>
    <Hero />
    <Navbar />
    <GetInvolved />
  </main>
    
  );
}



import AboutUsStory from '@/components/About/AboutUsStory';
import Values from "@/components/About/Values";
import Navbar from '@/components/Home/Navbar';
import Founders from '@/components/About/Founders';
//import CompanyStatement from ;

//import DemoLoc from;
//import StrategicPlan from;   
//import Reports from;


export default function AboutPage() {
  return (
    <main className="bg-neutral-100 min-h-screen">
      <Navbar />
      <AboutUsStory />
      <Founders/>
      <Values />
    </main>
  );
}
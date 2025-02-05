import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructor from "@/components/Instructor";
import { Parallax } from "@/components/Parallax";
import TestimonialCard from "@/components/TestimonialCard";
import Webinar from "@/components/Webinar";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      {" "}
      <HeroSection />
      <FeaturedCourses/>
      <Parallax/>
      <TestimonialCard/>
      <Webinar/>
      <Instructor/>
      <Footer/>
    </main>
  );
}

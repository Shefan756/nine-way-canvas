import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Vision from "@/components/Vision";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Founders from "@/components/Founders";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Vision />
      <Services />
      <WhyChooseUs />
      <Founders />
      <Contact />
    </div>
  );
};

export default Index;

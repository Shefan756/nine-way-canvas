import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden"
      style={{ background: "var(--gradient-hero)" }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-fade-in leading-tight">
          Transform Your
          <br />
          <span className="text-5xl md:text-7xl">Digital Presence</span>
        </h1>
        <p className="text-base md:text-lg text-foreground/80 mb-10 max-w-3xl mx-auto animate-fade-in-up font-light leading-relaxed">
          We are a passionate digital marketing agency helping businesses grow their online presence through creativity, strategy, and innovation.
        </p>
        <Button
          onClick={scrollToServices}
          size="lg"
          className="relative bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 transition-all duration-500 text-background font-semibold px-10 py-6 text-base group shadow-lg hover:shadow-xl animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          Explore Our Services
          <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
        </Button>
      </div>
    </section>
  );
};

export default Hero;

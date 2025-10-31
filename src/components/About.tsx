import { Sparkles } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0" style={{ background: "var(--gradient-subtle)" }} />
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-6">
            <Sparkles className="w-6 h-6 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              About Us
            </h2>
          </div>
          
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            At <span className="text-primary font-semibold">9 Way Media Solutions</span>, we believe every brand has a story — and our mission is to tell that story in the most impactful way.
            <br /><br />
            From social media management to full-scale digital campaigns, we provide end-to-end marketing solutions designed to make your business stand out.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

import { FileImage, Globe, Instagram, Youtube, MessageSquare, Megaphone } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies to boost your online presence",
      icon: Megaphone,
      gradient: "from-primary to-secondary",
    },
    {
      title: "Poster Creation",
      description: "Eye-catching posters designed to capture attention and drive engagement",
      icon: FileImage,
      gradient: "from-secondary to-primary",
    },
    {
      title: "Website Creation",
      description: "Professional, responsive websites tailored to your business needs",
      icon: Globe,
      gradient: "from-primary to-accent",
    },
    {
      title: "Instagram Content",
      description: "Engaging Instagram posts and stories that resonate with your audience",
      icon: Instagram,
      gradient: "from-secondary to-primary",
    },
    {
      title: "YouTube Content",
      description: "Compelling video content creation and optimization for YouTube",
      icon: Youtube,
      gradient: "from-primary to-secondary",
    },
    {
      title: "WhatsApp Marketing",
      description: "Creative WhatsApp posters and status updates for direct engagement",
      icon: MessageSquare,
      gradient: "from-accent to-primary",
    },
  ];

  return (
    <section id="services" className="py-32 px-6 relative" style={{ background: "var(--gradient-subtle)" }}>
      <div className="container mx-auto">
        <h2 className="text-5xl md:text-6xl font-black text-center mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Our Services
        </h2>
        <p className="text-center text-foreground/70 mb-20 max-w-3xl mx-auto text-xl font-light">
          We offer a comprehensive suite of digital marketing services designed to elevate your brand and drive growth
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-[0_0_50px_rgba(0,200,255,0.3)] transition-all duration-500 hover:-translate-y-3 border border-border/50 hover:border-primary/70 relative overflow-hidden"
              style={{ 
                background: "var(--gradient-card)",
                animationDelay: `${index * 0.1}s` 
              }}
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <CardHeader className="relative z-10">
                <div
                  className={`w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-[0_0_30px_rgba(0,200,255,0.4)]`}
                >
                  <service.icon className="w-10 h-10 text-background" />
                </div>
                <CardTitle className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <CardDescription className="text-base text-foreground/70 leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

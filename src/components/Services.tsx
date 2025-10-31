import { Share2, Palette, Globe, Megaphone, Camera, Pencil } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      title: "Social Media Marketing",
      description: "Create, post & promote your brand on platforms like Instagram, Facebook & more",
      icon: Share2,
      gradient: "from-primary to-secondary",
    },
    {
      title: "Graphic Design & Branding",
      description: "Eye-catching posts, logos, and complete brand identity",
      icon: Palette,
      gradient: "from-secondary to-primary",
    },
    {
      title: "Website Design & Development",
      description: "Modern, mobile-friendly, and SEO-ready websites",
      icon: Globe,
      gradient: "from-primary to-accent",
    },
    {
      title: "Google & Meta Ads Management",
      description: "Run paid ads that actually deliver results",
      icon: Megaphone,
      gradient: "from-secondary to-primary",
    },
    {
      title: "Photography & Video Editing",
      description: "Showcase your products and services with professional visuals",
      icon: Camera,
      gradient: "from-primary to-secondary",
    },
    {
      title: "Content Creation",
      description: "Creative ideas that connect with your audience",
      icon: Pencil,
      gradient: "from-accent to-primary",
    },
  ];

  return (
    <section id="services" className="py-20 px-6 relative" style={{ background: "var(--gradient-subtle)" }}>
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 text-foreground">
          Our <span className="text-primary">Services</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-sm">
          💼 Comprehensive digital solutions for your business
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border border-border/50 hover:border-primary/50 relative overflow-hidden"
              style={{ background: "var(--gradient-card)" }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <CardHeader className="relative z-10">
                <div
                  className={`w-14 h-14 bg-gradient-to-br ${service.gradient} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300`}
                >
                  <service.icon className="w-7 h-7 text-background" />
                </div>
                <CardTitle className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <CardDescription className="text-sm text-muted-foreground leading-relaxed">
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

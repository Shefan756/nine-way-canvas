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
    <section id="services" className="py-24 px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Our Services
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          We offer a comprehensive suite of digital marketing services designed to elevate your brand
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50"
            >
              <CardHeader>
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

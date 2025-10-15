import { Instagram, Linkedin, Facebook, Twitter, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      url: "#",
      color: "hover:text-pink-500",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "#",
      color: "hover:text-blue-600",
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: "#",
      color: "hover:text-blue-500",
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: "#",
      color: "hover:text-sky-400",
    },
  ];

  return (
    <section id="contact" className="py-32 px-6 relative overflow-hidden" style={{ background: "var(--gradient-subtle)" }}>
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-5xl relative z-10">
        <h2 className="text-5xl md:text-6xl font-black text-center mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Get In Touch
        </h2>
        <p className="text-center text-foreground/70 mb-20 text-xl font-light">
          Ready to transform your digital presence? Connect with us today
        </p>

        <div className="grid md:grid-cols-2 gap-16 mb-20">
          <div>
            <h3 className="text-3xl font-bold mb-8 text-foreground">Contact Information</h3>
            <div className="space-y-6">
              <a
                href="mailto:info@9waymedia.com"
                className="flex items-center gap-4 text-foreground/70 hover:text-primary transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(0,200,255,0.3)] group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-8 h-8 text-background" />
                </div>
                <span className="text-lg">info@9waymedia.com</span>
              </a>
              <a
                href="tel:+1234567890"
                className="flex items-center gap-4 text-foreground/70 hover:text-primary transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-primary rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(167,243,108,0.3)] group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-8 h-8 text-background" />
                </div>
                <span className="text-lg">+123 456 7890</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-bold mb-8 text-foreground">Follow Us</h3>
            <div className="flex flex-wrap gap-5">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                  aria-label={social.name}
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className={`w-16 h-16 p-0 border-2 border-border/50 hover:border-primary/70 transition-all duration-500 ${social.color} hover:shadow-[0_0_30px_rgba(0,200,255,0.3)] hover:scale-110`}
                    style={{ background: "var(--gradient-card)" }}
                  >
                    <social.icon className="w-7 h-7" />
                  </Button>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center pt-12 border-t border-border/30">
          <p className="text-foreground/60 text-lg">
            © {new Date().getFullYear()} 9waymedia Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;

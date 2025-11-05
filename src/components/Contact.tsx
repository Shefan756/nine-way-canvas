import { Instagram, Linkedin, Facebook, Twitter, Mail, Phone } from "lucide-react";

const Contact = () => {
  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/9waymedia?utm_source=ig_web_button_share_sheet&igsh=MWZrd3YxamlzdjJlaQ==",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/company/9-way-media-solutions/",
    },
  ];

  return (
    <section id="contact" className="py-20 px-6 relative overflow-hidden" style={{ background: "var(--gradient-card)" }}>
      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-foreground">
            Let's Connect | <span className="text-primary">हमसे जुड़ें</span>
          </h2>
          <p className="text-sm text-muted-foreground">
            Ready to grow your business with 9 Way Media Solutions?<br />
            📩 Let's discuss your project today!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 md:gap-8 mb-12">
          <div className="p-4 md:p-6 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
            <div className="flex items-center gap-3 md:gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 md:w-6 md:h-6 text-background" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-sm md:text-base font-bold text-foreground mb-1">Email Us</h3>
                <a
                  href="mailto:9waymediasolutions@gmail.com"
                  className="text-xs md:text-sm text-muted-foreground hover:text-primary transition-colors break-all"
                >
                  info@9waymediasolutions.com
                </a>
              </div>
            </div>
          </div>

          <div className="p-4 md:p-6 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
            <div className="flex items-center gap-3 md:gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-secondary to-primary rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 md:w-6 md:h-6 text-background" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-sm md:text-base font-bold text-foreground mb-1">Call / WhatsApp</h3>
                <div className="flex flex-col gap-1">
                  <a
                    href="tel:+919281468846"
                    className="text-xs md:text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    +91 92814 68846
                  </a>
                  <a
                    href="tel:+918200224864"
                    className="text-xs md:text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    +91 82002 24864
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-8 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm mb-12">
          <h3 className="text-lg font-bold text-center mb-6 text-foreground">Connect With Us</h3>
          <div className="flex justify-center gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-primary/10 hover:bg-primary/20 transition-all duration-300 hover:scale-110 group"
                aria-label={social.name}
              >
                <social.icon className="w-6 h-6 text-primary group-hover:text-primary/80" />
              </a>
            ))}
          </div>
        </div>

        <div className="text-center pt-8 border-t border-border/30">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} 9 Way Media Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;

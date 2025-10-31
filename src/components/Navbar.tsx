import { useState, useEffect } from "react";
import logo from "@/assets/9waymedia-logo.jpg";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ["home", "about", "vision", "services", "why-choose-us", "founders", "contact"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-xl shadow-2xl border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          <div 
            className="flex items-center gap-3 cursor-pointer transition-transform duration-300 hover:scale-105" 
            onClick={() => scrollToSection("home")}
          >
            <img 
              src={logo} 
              alt="9waymedia Solutions" 
              className="h-12 w-auto" 
            />
          </div>

          <div className="flex gap-8">
            {[
              { id: "home", label: "Home" },
              { id: "about", label: "About" },
              { id: "services", label: "Services" },
              { id: "founders", label: "Founders" },
              { id: "contact", label: "Contact" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-semibold tracking-wide transition-all duration-300 relative group ${
                  activeSection === item.id
                    ? "text-primary"
                    : "text-foreground/80 hover:text-primary"
                }`}
              >
                {item.label}
                <span 
                  className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-300 ${
                    activeSection === item.id ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

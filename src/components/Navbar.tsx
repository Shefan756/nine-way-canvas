import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import logo from "@/assets/9waymedia-logo.png";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

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
      setIsOpen(false);
    }
  };

  const menuItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "vision", label: "Vision" },
    { id: "services", label: "Services" },
    { id: "founders", label: "Founders" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-600 bg-black text-white shadow-2xl border-b border-black dark:bg-background/80 dark:backdrop-blur-xl dark:shadow-2xl dark:border-b dark:border-border/50 ${
        isScrolled ? "" : ""
      }`}
    >
      <div className="container mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          <div
            className="flex items-center gap-2 sm:gap-3 cursor-pointer transition-transform duration-300 hover:scale-105"
            onClick={() => scrollToSection("home")}
          >
            <img
              src={logo}
              alt="9waymedia Solutions"
              className="h-10 sm:h-12 w-auto"
            />
            <div className="flex flex-col">
              <h1 className="text-[13px] sm:text-lg md:text-2xl lg:text-3xl font-bold leading-tight tracking-wide whitespace-nowrap">
                9 Way Media Solutions
              </h1>
              <p className="text-[10px] sm:text-xs md:text-base lg:text-lg font-medium text-center tracking-wide whitespace-nowrap">
                AI Based Digital Marketing Agency
              </p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-8">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-semibold tracking-wide transition-all duration-300 relative group ${
                    activeSection === item.id
                      ? "dark:text-primary text-white"
                      : "dark:text-foreground/80 dark:hover:text-primary text-white hover:text-gray-300"
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
            <ThemeToggle />
          </div>

          {/* Mobile Menu */}
          <div className="flex md:hidden items-center gap-3">
            <ThemeToggle />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Menu className="h-6 w-6 text-foreground" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-64">
                <div className="flex flex-col gap-6 mt-8">
                  {menuItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`text-lg font-semibold tracking-wide transition-all duration-300 text-left ${
                        activeSection === item.id
                          ? "dark:text-primary text-white"
                          : "dark:text-foreground/80 dark:hover:text-primary text-white hover:text-gray-300"
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

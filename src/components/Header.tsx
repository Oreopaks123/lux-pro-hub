import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const navigation = [
  { name: "Главная", href: "#hero", isRoute: false },
  { name: "Обо мне", href: "#about", isRoute: false },
  { name: "Объявления", href: "/listings", isRoute: true },
  { name: "Отзывы", href: "#testimonials", isRoute: false },
  { name: "Контакты", href: "#contact", isRoute: false },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (href: string, isRoute: boolean) => {
    if (isRoute) {
      navigate(href);
      setIsMobileMenuOpen(false);
    } else {
      // If we're not on the home page, navigate there first
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      } else {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-background/95 backdrop-blur-md border-b border-border" : "bg-transparent"
        }`}
      >
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-light tracking-wider">
              <span className="text-gradient">LUX</span>
              <span className="text-foreground">ESTATE</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item.href, item.isRoute)}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm tracking-wide"
                >
                  {item.name}
                </button>
              ))}
              <Button
                onClick={() => handleNavigation("#contact", false)}
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Связаться
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-foreground z-50"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-background/98 backdrop-blur-lg">
          <div className="flex flex-col items-center justify-center h-full space-y-8 px-6">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.href, item.isRoute)}
                className="text-2xl text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                {item.name}
              </button>
            ))}
            <Button
              onClick={() => handleNavigation("#contact", false)}
              className="w-full max-w-xs bg-primary text-primary-foreground hover:bg-primary/90"
              size="lg"
            >
              Связаться
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

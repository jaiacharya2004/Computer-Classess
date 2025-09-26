import { Button } from "@/components/ui/button";
import { GraduationCap, Menu, X } from "lucide-react";
import { useState } from "react";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center shadow-glow">
              <GraduationCap className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold">Computer Classes</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('courses')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Courses
            </button>
            <button 
              onClick={() => scrollToSection('faculty')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Faculty
            </button>
            <Button 
              onClick={() => scrollToSection('booking')}
              className="bg-gradient-primary hover:bg-primary-dark text-primary-foreground px-6 rounded-xl shadow-glow"
            >
              Enroll Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-border/50">
            <div className="flex flex-col gap-4">
              <button 
                onClick={() => scrollToSection('courses')}
                className="text-left text-foreground hover:text-primary transition-colors font-medium"
              >
                Courses
              </button>
              <button 
                onClick={() => scrollToSection('faculty')}
                className="text-left text-foreground hover:text-primary transition-colors font-medium"
              >
                Faculty
              </button>
              <Button 
                onClick={() => scrollToSection('booking')}
                className="bg-gradient-primary hover:bg-primary-dark text-primary-foreground px-6 rounded-xl shadow-glow w-fit"
              >
                Enroll Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
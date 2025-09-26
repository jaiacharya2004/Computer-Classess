import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

export const HeroSection = () => {
  const scrollToCourses = () => {
    const coursesSection = document.getElementById('courses');
    coursesSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen hero-gradient flex items-center justify-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 hero-glow rounded-full animate-float opacity-20"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 hero-glow rounded-full animate-float opacity-10" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 hero-glow rounded-full animate-float opacity-30" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center md:text-left space-y-8 animate-slide-up">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
              Learn from <span className="text-gradient glow-text">Computer Classes</span>
            </h1>
            
            <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
              <span className="text-gradient">Web & App Development Course</span>
            </h2>
            
            <p className="text-2xl md:text-3xl text-accent font-bold mb-6 glow-text">
              Your Victory is our Passion
            </p>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl">
              Kickstart your tech career with our curated online courses designed by professionals with real-world experience.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button 
                onClick={scrollToCourses}
                size="lg" 
                className="bg-gradient-primary hover:bg-primary-dark text-primary-foreground px-8 py-4 text-lg font-semibold rounded-xl shadow-glow hover:shadow-elevated transition-all duration-300 hover:scale-105"
              >
                View Courses
                <ArrowDown className="ml-2 h-5 w-5 animate-bounce" />
              </Button>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="relative z-10">
              <img 
                src={heroImage} 
                alt="Modern web development workspace with coding screens" 
                className="w-full h-auto rounded-2xl shadow-elevated animate-float"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-glow rounded-2xl blur-xl opacity-50 animate-glow"></div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-8 w-8 text-muted-foreground" />
      </div>
    </section>
  );
};
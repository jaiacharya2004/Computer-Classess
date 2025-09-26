import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Smartphone, Globe, Star, Users, Clock } from "lucide-react";

const courses = [
  {
    id: 1,
    title: "Full Stack Web Development",
    subtitle: "Beginner to Advanced",
    description: "Master modern web development with React, Node.js, and databases. Build real-world projects and deploy them to production.",
    price: "₹9000",
    originalPrice: "25000₹",
    icon: Code,
    features: ["React & TypeScript", "Node.js & Express", "Database Design", "Cloud Deployment"],
    duration: "12 weeks",
    students: "2,500+",
    rating: 4.9
  },
  {
    id: 2,
    title: "App Development",
    subtitle: "Kotlin + KMP",
    description: "Create powerful mobile applications for both Android and iOS platforms using modern frameworks and best practices.",
    price: "₹9000",
    originalPrice: "₹30000",
    icon: Smartphone,
    features: ["Android with Kotlin", "Cross-platform Flutter", "UI/UX Design", "App Store Publishing"],
    duration: "15 weeks",
    students: "1,500+",
    rating: 4.9
    
  },
  {
    id: 3,
    title: "WordPress Development",
    subtitle: "Freelancing Focus",
    description: "Build professional websites and start your freelancing career. Learn custom themes, plugins, and client management.",
    price: "₹7000",
    originalPrice: "₹21000",
    icon: Globe,
    features: ["Custom Themes", "Plugin Development", "Client Management", "Business Setup"],
    duration: "8 weeks",
    students: "2,100+",
    rating: 4.9
    
  },

  {
    id: 4,
    title: "BCA / MCA",
    subtitle: "Professional Degree Program",
    description: "Get industry-ready with a full curriculum covering computer fundamentals, programming, and software engineering.",
    price: "₹5000 / Semester",
    originalPrice: "₹15000",
    icon: Users, // Reusing an icon (can change if you want)
    features: ["C, C++, Java, Python", "Data Structures", "DBMS & Networking", "Final Year Project"],
    duration: "3 Years (BCA) / 2 Years (MCA)",
    students: "3,000+",
    rating: 4.8
  },
  {
    id: 5,
    title: "MSc CS / PGDCA",
    subtitle: "Advanced Computer Science",
    description: "Perfect for graduates who want to specialize in computer science concepts, AI, and research-oriented development.",
    price: "₹5000 / Semester",
    originalPrice: "₹15000",
    icon: Code,
    features: ["Advanced Programming", "Machine Learning Basics", "Research Projects", "System Analysis"],
    duration: "2 Years",
    students: "1,200+",
    rating: 4.8
  },
  {
    id: 6,
    title: "BTech / MTech",
    subtitle: "Engineering Track",
    description: "Pursue technical excellence with a curriculum that blends theory and hands-on engineering experience.",
    price: "₹5000 / Semester",
    originalPrice: "₹15000",
    icon: Star,
    features: ["Engineering Mathematics", "OS & Networking", "Capstone Project", "Industry Internship"],
    duration: "4 Years (BTech) / 2 Years (MTech)",
    students: "2,800+",
    rating: 4.9
  }
  
];

export const CoursesSection = () => {
  const scrollToBooking = () => {
    const bookingSection = document.getElementById('booking');
    bookingSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="courses" className="py-24 bg-background-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Our <span className="text-gradient">Web & App Dev Courses</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose from our carefully crafted courses designed to take you from beginner to professional level
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => {
            const Icon = course.icon;
            return (
              <Card 
                key={course.id} 
                className="course-card border-border/50 animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-4 shadow-glow">
                    <Icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-2xl font-bold">{course.title}</CardTitle>
                  <CardDescription className="text-accent font-semibold">{course.subtitle}</CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{course.description}</p>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {course.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      {course.students}
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      {course.rating}
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">What you'll learn:</h4>
                    <div className="flex flex-wrap gap-2">
                      {course.features.map((feature, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
                
                <CardFooter className="flex flex-col gap-4">
                  <div className="flex items-center justify-center gap-3">
                    <span className="text-3xl font-bold text-gradient">{course.price}</span>
                    <span className="text-lg text-muted-foreground line-through">{course.originalPrice}</span>
                  </div>
                  
                  <Button 
                    onClick={scrollToBooking}
                    className="w-full bg-gradient-primary hover:bg-primary-dark text-primary-foreground font-semibold py-3 rounded-xl shadow-glow hover:shadow-elevated transition-all duration-300 hover:scale-105"
                  >
                    Buy Now
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
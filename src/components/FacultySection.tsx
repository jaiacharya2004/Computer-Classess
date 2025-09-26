import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Award, Code } from "lucide-react";
import jaiAcharyaImage from "@/assets/jai-acharya.png";
import rashmiVyasImage from "@/assets/rashmi-vyas.png";

const faculty = [
  {
    id: 1,
    name: "Rashmi Vyas",
    experience: "15+ Years in Web Development",
    expertise: ["React", "Node.js", "TypeScript", "AWS"],
    bio: "Senior Full Stack Developer with extensive experience in modern web technologies. Has worked with Fortune 500 companies and led multiple development teams.",
    image: rashmiVyasImage,
    projects: [
      { title: "E-commerce Platform", tech: "React, Node.js", image: "/api/placeholder/300/200" },
      { title: "SaaS Dashboard", tech: "TypeScript, PostgreSQL", image: "/api/placeholder/300/200" },
      { title: "Instagram", tech: "React Native, AWS", image: "/api/placeholder/300/200" }
    ]
  },
  {
    id: 2,
    name: "Jai Acharya",
    experience: "Expert in App Development",
    expertise: ["Kotlin", "Flutter", "Firebase", "Play Store"],
    bio: "Mobile development specialist with Kotlin Jetpack Compose + KMP & CMP. Developing School Management Apps & Client Projects.",
    image: jaiAcharyaImage,
    projects: [
      { title: "School Management App", tech: "Kotlin + KMP, Firebase", image: "/api/placeholder/300/200" },
      { title: "Health Tracker", tech: "Flutter, Room DB", image: "/api/placeholder/300/200" },
      { title: "To-Do Pomodoro", tech: "Kotlin, Firbase", image: "/api/placeholder/300/200" }
    ]
  }
];

export const FacultySection = () => {
  return (
    <section id="faculty" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Meet Our <span className="text-gradient">Expert Faculty</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Learn from industry professionals who have built real products and scaled successful businesses
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {faculty.map((instructor, index) => (
            <Card 
              key={instructor.id} 
              className="faculty-card border-border/50 animate-slide-up"
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <CardHeader className="text-center pb-6">
                <div className="mx-auto w-32 h-32 rounded-full overflow-hidden mb-6 ring-4 ring-primary/20 shadow-glow">
                  <img 
                    src={instructor.image} 
                    alt={`${instructor.name} - Professional instructor`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle className="text-3xl font-bold">{instructor.name}</CardTitle>
                <div className="flex items-center justify-center gap-2 text-accent font-semibold">
                  <Award className="h-5 w-5" />
                  {instructor.experience}
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-muted-foreground text-center">{instructor.bio}</p>
                
                <div className="text-center">
                  <h4 className="font-semibold mb-3 flex items-center justify-center gap-2">
                    <Code className="h-5 w-5" />
                    Expertise
                  </h4>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {instructor.expertise.map((skill, idx) => (
                      <Badge key={idx} className="bg-gradient-primary text-primary-foreground">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-4 text-center">Featured Projects</h4>
                  <div className="grid gap-4">
                    {instructor.projects.map((project, idx) => (
                      <div key={idx} className="flex items-center gap-4 p-3 rounded-lg bg-card-hover hover:bg-secondary transition-colors">
                        <div className="w-16 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                          <ExternalLink className="h-5 w-5 text-primary-foreground" />
                        </div>
                        <div className="flex-1">
                          <h5 className="font-semibold">{project.title}</h5>
                          <p className="text-sm text-muted-foreground">{project.tech}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
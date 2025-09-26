import { GraduationCap, Mail, Phone, MapPin, Facebook, Github, Linkedin, Instagram } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border/50">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center shadow-glow">
                <GraduationCap className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">Computer Classes</span>
            </div>
            <p className="text-muted-foreground">
              Your Victory is our Passion. Empowering the next generation of developers with industry-leading courses.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Facebook className="h-5 w-5" />
              </a>
              <a href="https://github.com/jaiacharya2004" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/in/jai-acharya-522548264/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/rashmi_kshitij__vyas/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Courses */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Courses</h3>
            <div className="space-y-2">
              <a href="#courses" className="block text-muted-foreground hover:text-primary transition-colors">
                Full Stack Web Development
              </a>
              <a href="#courses" className="block text-muted-foreground hover:text-primary transition-colors">
                App Development
              </a>
              <a href="#courses" className="block text-muted-foreground hover:text-primary transition-colors">
                WordPress Development
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <div className="space-y-2">
              <a href="#faculty" className="block text-muted-foreground hover:text-primary transition-colors">
                Faculty
              </a>
              <a href="#booking" className="block text-muted-foreground hover:text-primary transition-colors">
                Enroll Now
              </a>
              <a href="#faculty" className="block text-muted-foreground hover:text-primary transition-colors">
                About Us
              </a>
              <a href="#contact us" className="block text-muted-foreground hover:text-primary transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>jaiacharya04@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>9602574678, 8239985066</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Baba ramdev park near kiraado baghechi</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 mt-12 pt-8 text-center text-muted-foreground">
          <p>&copy; {currentYear} Computer Classes. All rights reserved. Your Victory is our Passion ❤️</p>
        </div>
      </div>
    </footer>
  );
};
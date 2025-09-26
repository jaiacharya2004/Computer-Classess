import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { CoursesSection } from "@/components/CoursesSection";
import { FacultySection } from "@/components/FacultySection";
import { BookingSection } from "@/components/BookingSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <CoursesSection />
        <FacultySection />
        <BookingSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

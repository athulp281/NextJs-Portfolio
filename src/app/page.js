import AboutSection from "./components/AboutSection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ProjectSection from "./components/ProjectSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchivementsSection from "./components/AchivementsSection";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col bg-[#121212] container  ">
            <Navbar />
            <div className="container mt-24 mx-auto px-12 py-12">
                <HeroSection />
                <AchivementsSection />
                <AboutSection />
                <ProjectSection />
                <EmailSection />
            </div>
            <Footer />
        </main>
    );
}

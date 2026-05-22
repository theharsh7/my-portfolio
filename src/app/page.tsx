import { About } from "@/components/About";
import { AnimatedGradientBackground } from "@/components/AnimatedGradientBackground";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import { ScrollMotionProvider } from "@/components/ScrollMotionProvider";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Skills } from "@/components/Skills";

export default function Home() {
  return (
    <ScrollMotionProvider>
      <AnimatedGradientBackground />
      <ScrollProgress />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </ScrollMotionProvider>
  );
}

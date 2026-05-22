import { About } from "@/components/About";
import { AnimatedGradientBackground } from "@/components/AnimatedGradientBackground";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { GsapScrollAnimations } from "@/components/GsapScrollAnimations";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Skills } from "@/components/Skills";

export default function Home() {
  return (
    <SmoothScrollProvider>
      <GsapScrollAnimations />
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
    </SmoothScrollProvider>
  );
}

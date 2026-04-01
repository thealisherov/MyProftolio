import { Navbar } from "@/components/layout/Navbar";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Experience } from "@/sections/Experience";
import { Projects } from "@/sections/Projects";
import { Skills } from "@/sections/Skills";
import { Education } from "@/sections/Education";
import { Contact } from "@/sections/Contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col relative w-full overflow-x-hidden selection:bg-primary/30 selection:text-foreground">
      <CustomCursor />
      <Navbar />

      <div className="flex flex-col w-full gap-8 md:gap-16">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </div>

      <footer className="w-full py-8 text-center text-sm text-muted-foreground border-t border-border/50 glass">
        <p>© {new Date().getFullYear()} Azizbek Alisherov. All rights reserved.</p>
        <p className="mt-2 text-xs opacity-70">Built with Next.js, Tailwind CSS & Three.js</p>
      </footer>
    </main>
  );
}

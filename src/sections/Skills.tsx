import { SectionReveal } from "@/components/ui/SectionReveal";
import {
  FaJsSquare,
  FaReact,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaBootstrap,
  FaCode,
  FaDatabase,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";
import { Code2, Package, Zap, Palette, Brain } from "lucide-react";

export function Skills() {
  const technologies = [
    // Frontend Core
    { name: "HTML", icon: FaHtml5, color: "text-orange-500" },
    { name: "CSS", icon: FaCss3Alt, color: "text-blue-500" },
    { name: "JavaScript", icon: FaJsSquare, color: "text-yellow-400" },
    { name: "SASS", icon: FaSass, color: "text-pink-500" },
    { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
    
    // CSS Frameworks
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400" },
    { name: "Bootstrap", icon: FaBootstrap, color: "text-purple-600" },
    
    // Frontend Frameworks
    { name: "React", icon: FaReact, color: "text-cyan-400" },
    { name: "Next.js", icon: Code2, color: "text-white" },
    
    // State Management & Query
    { name: "Redux", icon: Zap, color: "text-purple-600" },
    { name: "Zustand", icon: Package, color: "text-amber-500" },
    { name: "TanStack Query", icon: Code2, color: "text-red-500" },
    
    // UI Libraries
    { name: "Ant Design", icon: Palette, color: "text-cyan-600" },
    { name: "Material UI", icon: Palette, color: "text-blue-500" },
    { name: "shadcn/ui", icon: Code2, color: "text-slate-300" },
    
    // Backend & Database
    { name: "Supabase", icon: FaDatabase, color: "text-emerald-500" },
    
    // Version Control
    { name: "Git", icon: FaGitAlt, color: "text-red-600" },
    
    // AI Tools
    { name: "Claude", icon: Brain, color: "text-slate-400" },
    { name: "Gemini", icon: Brain, color: "text-blue-400" },
    { name: "Codex", icon: Brain, color: "text-green-500" },
  ];

  return (
    <SectionReveal>
      <section id="skills" className="container mx-auto px-6 max-w-6xl py-24">
        <div className="flex flex-col gap-2 mb-16 text-center">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="text-orange-500">&lt;</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-green-400 to-cyan-400">Technologies</span>
            <span className="text-cyan-400">/&gt;</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-6 rounded-2xl glass border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 group"
              >
                <Icon className={`w-12 h-12 mb-4 ${tech.color} group-hover:scale-110 transition-transform duration-300`} />
                <span className="text-sm font-semibold text-center text-foreground">{tech.name}</span>
              </div>
            );
          })}
        </div>
      </section>
    </SectionReveal>
  );
}

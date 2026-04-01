import { SectionReveal } from "@/components/ui/SectionReveal";
import {
  Terminal,
  Layout,
  Paintbrush,
  GitBranch
} from "lucide-react";

export function Skills() {
  const skillCategories = [
    {
      title: "Core Technologies",
      icon: <Terminal className="w-6 h-6 text-primary" />,
      skills: ["HTML", "CSS", "JavaScript (ES6+)", "TypeScript"],
    },
    {
      title: "Frameworks & Libraries",
      icon: <Layout className="w-6 h-6 text-primary" />,
      skills: ["React", "Next.js App Router", "Redux Toolkit", "Zustand"],
    },
    {
      title: "Styling & UI",
      icon: <Paintbrush className="w-6 h-6 text-primary" />,
      skills: ["Tailwind CSS", "Bootstrap", "Ant Design", "Material UI", "ShadCN"],
    },
    {
      title: "Tools & Others",
      icon: <GitBranch className="w-6 h-6 text-primary" />,
      skills: ["Git", "GitHub", "Figma", "Context API", "Axios", "React Query"],
    },
  ];

  return (
    <SectionReveal>
      <section id="skills" className="container mx-auto px-6 max-w-6xl py-24">
        <div className="flex flex-col gap-2 mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Technical <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full mx-auto mt-2" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group flex flex-col p-8 glass rounded-3xl border border-border hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity duration-500 text-primary group-hover:scale-150 transform">
                {category.icon}
              </div>

              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 border border-primary/20">
                {category.icon}
              </div>

              <h3 className="text-xl font-bold mb-4 relative z-10">{category.title}</h3>

              <ul className="flex flex-col gap-3 relative z-10">
                {category.skills.map((skill, i) => (
                  <li key={i} className="flex items-center gap-2 text-muted-foreground group-hover:text-foreground transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </SectionReveal>
  );
}

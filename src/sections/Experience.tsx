import { SectionReveal } from "@/components/ui/SectionReveal";
import { Briefcase, Calendar } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      title: "Frontend Developer (Self-employed)",
      date: "Oct 2025 – Present",
      description: "Working on enterprise-level web applications with focus on performance and robust architecture.",
      tasks: [
        "ERP & CRM systems using React + Tailwind",
        "Responsive dashboards with Ant Design",
        "API integration using Axios",
        "Collaboration with backend teams",
      ],
    },
    {
      title: "CD IELTS Platform (Personal Project)",
      date: "Jan 2026 – Feb 2026",
      description: "Developed a comprehensive IELTS testing platform designed to simulate the real exam environment.",
      tasks: [
        "Built IELTS platform using React",
        "React Query for server state",
        "Context API for global state",
        "Dynamic test system",
      ],
    },
    {
      title: "Mega IELTS Platform",
      date: "Feb 2026 – Present",
      description: "Contributing to a large-scale educational platform built with modern Next.js features.",
      tasks: [
        "Built using Next.js App Router",
        "SEO-friendly architecture",
        "Reusable components",
        "Interactive exam UI",
      ],
    },
  ];

  return (
    <SectionReveal>
      <section id="experience" className="container mx-auto px-6 max-w-4xl py-24">
        <div className="flex flex-col gap-2 mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Work <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full mx-auto mt-2" />
        </div>

        <div className="relative border-l border-primary/20 ml-3 md:ml-6 flex flex-col gap-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 md:pl-12 group">
              <span className="absolute -left-3 top-1 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center border-2 border-background group-hover:scale-110 transition-transform">
                <span className="w-2 h-2 rounded-full bg-primary" />
              </span>

              <div className="flex flex-col gap-2 glass p-6 rounded-2xl border border-border group-hover:border-primary/30 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                  <h3 className="text-xl md:text-2xl font-bold flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-primary" />
                    {exp.title}
                  </h3>
                  <span className="text-sm font-medium text-muted-foreground flex items-center gap-2 bg-muted/50 px-3 py-1 rounded-full w-fit">
                    <Calendar className="w-4 h-4" />
                    {exp.date}
                  </span>
                </div>

                <p className="text-muted-foreground mb-4">{exp.description}</p>

                <ul className="flex flex-col gap-2">
                  {exp.tasks.map((task, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm md:text-base text-muted-foreground">
                      <span className="text-primary font-bold mt-1">•</span>
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </SectionReveal>
  );
}

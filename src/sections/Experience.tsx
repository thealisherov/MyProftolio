import { SectionReveal } from "@/components/ui/SectionReveal";
import { Briefcase, Calendar, ArrowRight } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      title: "Frontend Developer — Kremslivki (E-commerce Platform)",
      date: "Aprel 2026 – Present",
      description: "Developed a comprehensive e-commerce platform for a confectionery store from scratch using Next.js and TypeScript",
      tasks: [
        "Built responsive and modern user interface with Tailwind CSS, incorporating dynamic micro-animations for enhanced shopping experience",
        "Implemented internationalization (i18n) to support multiple languages: Uzbek, Russian, and English",
        "Developed secure admin panel for managing orders, configuring delivery fees, uploading banners, and managing user details",
        "Optimized application for SEO using Next.js metadata and implemented performance enhancements for faster load times",
        "Integrated complex frontend logic including real-time price calculations, advanced cart management, and client-side image compression",
        "Download (IOS)",
      ],
    },
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
      <section id="experience" className="container mx-auto px-6 max-w-6xl py-24">
        <div className="flex flex-col gap-2 mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Work <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full mx-auto mt-2" />
        </div>

        <div className="relative">
          {/* Timeline line (desktop only) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent -translate-x-1/2" />

          {/* Timeline items */}
          <div className="flex flex-col gap-8 md:gap-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline dot (desktop only) */}
                <div className="hidden md:block absolute left-1/2 top-0 w-10 h-10 -translate-x-1/2 mt-1">
                  <div className="w-full h-full rounded-full bg-background border-4 border-primary flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                </div>

                {/* Content */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'}`}>
                  <div className="glass p-5 sm:p-6 md:p-8 rounded-2xl border border-border md:hover:border-primary/50 md:transition-all md:duration-300 md:hover:shadow-2xl md:hover:shadow-primary/10">
                    {/* Header with icon and title */}
                    <div className="flex items-start gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20 flex-shrink-0">
                        <Briefcase className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl md:text-2xl font-bold leading-snug break-words">{exp.title}</h3>
                        <div className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground mt-2 bg-muted/50 px-3 py-1.5 rounded-lg">
                          <Calendar className="w-4 h-4 text-primary" />
                          <span>{exp.date}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-5">{exp.description}</p>

                    {/* Tasks */}
                    <ul className="flex flex-col gap-2.5">
                      {exp.tasks.map((task, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm md:text-base text-muted-foreground">
                          <ArrowRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SectionReveal>
  );
}

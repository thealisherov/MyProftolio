import { SectionReveal } from "@/components/ui/SectionReveal";
import { ExternalLink } from "lucide-react";
import { FaGithub as GithubIcon } from "react-icons/fa";
import Image from "next/image";

export function Projects() {
  const projects = [
    {
      title: "ERP & CRM System",
      description: "A comprehensive enterprise resource planning and customer relationship management system with real-time analytics and role-based access.",
      image: "/ERPISTUDY.webp",
      tags: ["React", "Tailwind CSS", "Ant Design", "Axios"],
      demo: "https://istudyerp.netlify.app/dashboard",
      github: "https://github.com/thealisherov",
    },
    {
      title: "CD IELTS Platform",
      description: "A realistic IELTS computer-delivered testing platform simulating the official exam environment with timer and auto-grading.",
      image: "/CDIELTS.webp",
      tags: ["React", "React Query", "Context API", "Dynamic UI"],
      demo: "https://istudycdielts.netlify.app/",
      github: "https://github.com/thealisherov",
    },
    {
      title: "Mega IELTS",
      description: "Large-scale educational platform built for IELTS preparation with scalable architecture and SEO optimization.",
      image: "/mega.webp",
      tags: ["Next.js App Router", "TypeScript", "Tailwind", "Responsive Design"],
      demo: "https://megaielts.uz/",
      github: "https://github.com/thealisherov",
    },
  ];

  return (
    <SectionReveal>
      <section id="projects" className="container mx-auto px-6 max-w-6xl py-24">
        <div className="flex flex-col gap-2 mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Featured <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full mx-auto mt-2" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group flex flex-col glass rounded-2xl border border-border overflow-hidden hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative w-full aspect-video overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="flex gap-4 w-full">
                    <a href={project.demo} target="_blank" rel="noreferrer" className="flex-1 glass py-2 rounded-full flex items-center justify-center gap-2 font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer" aria-label={`View live demo of ${project.title}`}>
                      <ExternalLink size={16} /> Demo
                    </a>
                    <a href={project.github} target="_blank" rel="noreferrer" className="flex-1 glass py-2 rounded-full flex items-center justify-center gap-2 font-medium hover:bg-muted transition-colors cursor-pointer" aria-label={`View source code of ${project.title}`}>
                      <GithubIcon size={16} /> Code
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex flex-col flex-1 p-6 gap-4">
                <h3 className="text-xl md:text-2xl font-bold group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-muted-foreground line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border/50">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs font-medium px-3 py-1 bg-primary/10 text-primary rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </SectionReveal>
  );
}

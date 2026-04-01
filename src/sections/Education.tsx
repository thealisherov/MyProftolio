import { SectionReveal } from "@/components/ui/SectionReveal";
import { GraduationCap, Award } from "lucide-react";

export function Education() {
  return (
    <SectionReveal>
      <section id="education" className="container mx-auto px-6 max-w-4xl py-24">
        <div className="flex flex-col gap-2 mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            My <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">Education</span>
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full mx-auto mt-2" />
        </div>

        <div className="relative border-l border-primary/20 ml-3 md:ml-6 flex flex-col gap-12">
          <div className="relative pl-8 md:pl-12 group">
            <span className="absolute -left-3 top-1 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center border-2 border-background group-hover:scale-110 transition-transform">
              <span className="w-2 h-2 rounded-full bg-primary" />
            </span>

            <div className="flex flex-col gap-4 glass p-8 rounded-3xl border border-border group-hover:border-primary/30 transition-colors shadow-lg shadow-background hover:shadow-primary/5">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-2">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold">Najot Ta&apos;lim</h3>
                </div>
                <span className="text-sm font-medium text-muted-foreground flex items-center gap-2 bg-muted/50 px-4 py-2 rounded-full w-fit whitespace-nowrap">
                  2024 – 2025
                </span>
              </div>

              <h4 className="text-lg font-medium text-primary flex items-center gap-2 mt-2 border-b border-border/50 pb-4">
                <Award className="w-5 h-5" />
                Frontend Development Course
              </h4>

              <div className="flex flex-col gap-4 mt-2">
                <p className="text-muted-foreground leading-relaxed">
                  Comprehensive frontend development program focusing on modern web technologies and best practices.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2 bg-background/50 p-6 rounded-2xl border border-border/50">
                  <div className="flex flex-col gap-2">
                    <span className="text-sm font-bold uppercase tracking-wider text-foreground">Core Technologies</span>
                    <p className="text-muted-foreground text-sm">HTML, CSS, SASS, SCSS, JavaScript, TypeScript</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="text-sm font-bold uppercase tracking-wider text-foreground">Frameworks & Libraries</span>
                    <p className="text-muted-foreground text-sm">React, Next.js, Bootstrap, Tailwind CSS</p>
                  </div>
                  <div className="flex flex-col gap-2 mt-2">
                    <span className="text-sm font-bold uppercase tracking-wider text-foreground">State Management</span>
                    <p className="text-muted-foreground text-sm">Redux, Zustand, Context API</p>
                  </div>
                  <div className="flex flex-col gap-2 mt-2">
                    <span className="text-sm font-bold uppercase tracking-wider text-foreground">UI Libraries</span>
                    <p className="text-muted-foreground text-sm">Experience integrating various UI component libraries</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SectionReveal>
  );
}

import { SectionReveal } from "@/components/ui/SectionReveal";
import { GraduationCap, Award, CheckCircle, Calendar } from "lucide-react";

export function Education() {
  return (
    <SectionReveal>
      <section id="education" className="container mx-auto px-6 max-w-6xl py-24">
        <div className="flex flex-col gap-2 mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            My <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">Education</span>
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full mx-auto mt-2" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Main Education Card */}
          <div className="group">
            <div className="flex flex-col gap-6 h-full glass p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 transform hover:-translate-y-1">
              <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 border border-primary/20 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                  <GraduationCap className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl sm:text-3xl font-bold">Najot Ta&apos;lim</h3>
                  <p className="text-sm text-muted-foreground mt-1">Uzbekistan&apos;s Leading IT Academy</p>
                </div>
              </div>

              <div className="h-px bg-gradient-to-r from-primary/20 to-transparent" />

              <div className="flex items-center gap-3 text-base sm:text-lg font-semibold bg-muted/50 px-3 sm:px-4 py-2 sm:py-3 rounded-lg w-fit">
                <Calendar className="w-5 h-5 text-primary flex-shrink-0" />
                <span>2024 – 2025</span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-start gap-3">
                <Award className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h4 className="text-lg sm:text-xl font-bold mb-2">Frontend Development Course</h4>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Comprehensive frontend development program focusing on modern web technologies, best practices, and real-world application development with professional mentorship.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 md:grid-cols-2 gap-3 sm:gap-4 lg:gap-4 auto-rows-max">
            <div className="group glass p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-border hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10">
              <h5 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-primary mb-3">Core</h5>
              <ul className="flex flex-col gap-2">
                {["HTML", "CSS", "SASS", "JavaScript", "TypeScript"].map((skill, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs sm:text-sm">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="group glass p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-border hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10">
              <h5 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-primary mb-3">Frameworks</h5>
              <ul className="flex flex-col gap-2">
                {["React", "Next.js", "Bootstrap", "Tailwind CSS"].map((skill, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs sm:text-sm">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="group glass p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-border hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10">
              <h5 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-primary mb-3">State</h5>
              <ul className="flex flex-col gap-2">
                {["Redux", "Zustand", "Context API", "React Query"].map((skill, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs sm:text-sm">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="group glass p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-border hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10">
              <h5 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-primary mb-3">Libraries</h5>
              <ul className="flex flex-col gap-2">
                {["Ant Design", "Material UI", "shadcn/ui", "Framer Motion"].map((skill, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs sm:text-sm">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </SectionReveal>
  );
}

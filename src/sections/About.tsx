import { SectionReveal } from "@/components/ui/SectionReveal";
import Image from "next/image";

export function About() {
  return (
    <SectionReveal>
      <section id="about" className="container mx-auto px-6 max-w-6xl py-24">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
          <div className="flex-1 w-full max-w-md mx-auto aspect-square relative rounded-2xl overflow-hidden glass border-border shadow-2xl group">
            <Image
              src="/Abdulaziz.webp"
              alt="About Azizbek"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent pointer-events-none" />
          </div>

          <div className="flex-1 flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                About <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">Me</span>
              </h2>
              <div className="w-20 h-1 bg-primary rounded-full" />
            </div>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              I am a motivated Frontend Developer with hands-on experience building responsive and user-friendly web applications.
            </p>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              I have strong skills in modern frontend technologies and UI libraries, focusing on performance, scalability, and delivering clean, maintainable code. My goal is to create web experiences that are not only visually appealing but also highly functional and accessible.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-6">
              <div className="flex flex-col gap-1 p-6 glass rounded-2xl border border-border">
                <span className="text-3xl md:text-4xl font-bold text-foreground">1+</span>
                <span className="text-sm font-medium text-muted-foreground">Years Experience</span>
              </div>
              <div className="flex flex-col gap-1 p-6 glass rounded-2xl border border-border">
                <span className="text-3xl md:text-4xl font-bold text-foreground">10+</span>
                <span className="text-sm font-medium text-muted-foreground">Satisfied Clients</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SectionReveal>
  );
}

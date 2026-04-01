"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { ArrowRight, Mail } from "lucide-react";

const BackgroundParticles = dynamic(() => import("@/components/ui/BackgroundParticles").then(mod => mod.BackgroundParticles), { ssr: false });
import Image from "next/image";
import { Typewriter } from 'react-simple-typewriter';

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <BackgroundParticles />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="flex flex-col items-center text-center gap-8">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.1 }}
            className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-primary/20 p-1"
          >
            <div className="w-full h-full rounded-full overflow-hidden bg-muted relative">
              <Image
                src="/Abdulaziz.webp"
                alt="Azizbek Alisherov"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 192px, 256px"
                priority
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col gap-2"
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
              Hi, I&apos;m <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">Azizbek Alisherov</span>
            </h1>
            <h2 className="text-xl md:text-3xl font-medium text-muted-foreground mt-2 min-h-[40px]">
              <span className="font-semibold text-foreground">Junior Frontend Developer</span>{" "}
              <span className="opacity-80 block md:inline mt-2 md:mt-0">
                specializing in{" "}
                <Typewriter
                  words={['React', 'Next.js', 'Tailwind CSS', 'Performance']}
                  loop={0}
                  cursor
                  cursorStyle='_'
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="max-w-xl text-lg text-muted-foreground"
          >
            I build responsive, user-friendly, and high-performance web applications with modern frontend technologies.
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-4 mt-4"
          >
            <a
              href="#projects"
              className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors"
            >
              View Projects <ArrowRight size={18} />
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 glass px-6 py-3 rounded-full font-medium hover:bg-muted transition-colors"
            >
              Contact Me <Mail size={18} />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-sm font-medium text-muted-foreground uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-1 h-8 rounded-full bg-gradient-to-b from-primary/50 to-transparent"
        />
      </motion.div>
    </section>
  );
}

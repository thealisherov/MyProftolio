"use client";

import { SectionReveal } from "@/components/ui/SectionReveal";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { FaGithub as GithubIcon, FaLinkedin as LinkedinIcon, FaTelegram as TelegramIcon } from "react-icons/fa";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({ name: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Clear form and show success message
    setSubmitStatus("success");
    setFormData({ name: "", message: "" });
    setTimeout(() => setSubmitStatus("idle"), 3000);
    setIsSubmitting(false);
  };

  return (
    <SectionReveal>
      <section id="contact" className="container mx-auto px-6 max-w-6xl py-24 mb-24">
        <div className="flex flex-col gap-2 mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Get In <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full mx-auto mt-2" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Contact
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          <div className="flex flex-col gap-8">
            <h3 className="text-2xl font-bold mb-4">Contact Information</h3>

            <div className="flex flex-col gap-6">
              <a href="mailto:azialisherov0826@gmail.com" className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-full glass border border-border flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Email</span>
                  <span className="text-lg font-medium group-hover:text-primary transition-colors">azialisherov0826@gmail.com</span>
                </div>
              </a>

              <a href="tel:+998990315139" className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-full glass border border-border flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Phone</span>
                  <span className="text-lg font-medium group-hover:text-primary transition-colors">+998 99 031 51 39</span>
                </div>
              </a>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full glass border border-border flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Location</span>
                  <span className="text-lg font-medium group-hover:text-primary transition-colors">Uzbekistan</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 mt-8 pt-8 border-t border-border/50">
              <h4 className="text-lg font-bold">Social Profiles</h4>
              <div className="flex gap-4">
                <a href="https://www.linkedin.com/in/azizbek-alisherov/" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full glass border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all duration-300 cursor-pointer" aria-label="LinkedIn">
                  <LinkedinIcon className="w-5 h-5" />
                </a>
                <a href="https://github.com/thealisherov" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full glass border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all duration-300 cursor-pointer" aria-label="GitHub">
                  <GithubIcon className="w-5 h-5" />
                </a>
                <a href="https://t.me/thealisherov" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full glass border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all duration-300 cursor-pointer" aria-label="Telegram">
                  <TelegramIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6 glass p-8 md:p-10 rounded-3xl border border-border shadow-2xl shadow-primary/5">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-medium ml-1">Your Name</label>
              <input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                placeholder="John Doe"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-medium ml-1">Your Message</label>
              <textarea
                id="message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                placeholder="Hello Azizbek, I'd like to discuss..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary text-primary-foreground font-bold py-4 rounded-xl hover:bg-primary/90 transition-all flex items-center justify-center gap-2 disabled:opacity-70 mt-2 cursor-pointer"
            >
              {isSubmitting ? (
                "Sending..."
              ) : submitStatus === "success" ? (
                "Message Sent!"
              ) : (
                <>Send Message <Send size={18} /></>
              )}
            </button>
            {submitStatus === "success" && (
              <p className="text-green-500 text-sm text-center mt-2">Your message has been sent successfully!</p>
            )}
            {submitStatus === "error" && (
              <p className="text-red-500 text-sm text-center mt-2">Something went wrong. Please try again.</p>
            )}
          </form>
        </div>
      </section>
    </SectionReveal>
  );
}

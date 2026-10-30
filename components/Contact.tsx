"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, MessageSquare, Send, CheckCircle2 } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.message.trim()) return;

    // Construct WhatsApp message template as specified in COPYWRITING.md:
    // Halo Zidni, saya {name}. {message}
    const whatsappMessage = `Halo Zidni, saya ${formData.name}. ${formData.message}${
      formData.contact ? ` (Kontak/Email: ${formData.contact})` : ""
    }`;

    // Target phone number template
    const waUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    setSubmitted(true);
    window.open(waUrl, "_blank", "noopener,noreferrer");

    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", contact: "", message: "" });
    }, 4000);
  };

  return (
    <section id="contact" className="max-w-7xl mx-auto px-6 py-24 sm:py-32">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        className="glass-panel p-8 sm:p-12 md:p-16 rounded-[3rem] border border-foreground/15 relative overflow-hidden shadow-2xl"
      >
        {/* Ambient Glow Orbs */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/20 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-sky-500/15 blur-[100px] rounded-full pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row gap-12 md:gap-20">
          {/* Left Column: Direct Contact Details */}
          <div className="flex-1 space-y-8">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-primary mb-3 bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20 inline-block shadow-sm">
                Get In Touch
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 text-foreground">
                Let&apos;s <span className="text-gradient-primary">Connect</span>
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                I am open to opportunities in Software Engineering, Web
                Development, Computer Vision, and other technology roles where I
                can continue learning while contributing to real-world projects.
                Feel free to reach out for collaboration, technical
                discussions, or professional opportunities.
              </p>
            </div>

            <div className="space-y-5">
              <a
                href="mailto:zidnikhaerur@gmail.com"
                className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-all group"
              >
                <div className="w-12 h-12 rounded-2xl glass-panel border border-foreground/10 flex items-center justify-center group-hover:scale-110 group-hover:border-primary/40 transition-all shadow-sm">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <span className="text-xs text-muted-foreground block">Email</span>
                  <span className="font-semibold text-foreground text-sm sm:text-base">
                    zidnikhaerur@gmail.com
                  </span>
                </div>
              </a>

              <div className="flex items-center gap-4 text-muted-foreground">
                <div className="w-12 h-12 rounded-2xl glass-panel border border-foreground/10 flex items-center justify-center shadow-sm">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <span className="text-xs text-muted-foreground block">Location</span>
                  <span className="font-semibold text-foreground text-sm sm:text-base">
                    Jakarta Timur, Indonesia
                  </span>
                </div>
              </div>

              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-all group"
              >
                <div className="w-12 h-12 rounded-2xl glass-panel border border-foreground/10 flex items-center justify-center group-hover:scale-110 group-hover:border-primary/40 transition-all shadow-sm">
                  <MessageSquare className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <span className="text-xs text-muted-foreground block">Direct Chat</span>
                  <span className="font-semibold text-foreground text-sm sm:text-base">
                    WhatsApp Message
                  </span>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="flex-1">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Jane Doe"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-5 py-3.5 rounded-2xl bg-muted/40 border border-border/80 focus:border-primary focus:ring-2 focus:ring-primary/20 text-foreground placeholder:text-muted-foreground outline-none transition-all text-sm font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                  Your Email / WhatsApp
                </label>
                <input
                  type="text"
                  placeholder="name@example.com / 08..."
                  value={formData.contact}
                  onChange={(e) =>
                    setFormData({ ...formData, contact: e.target.value })
                  }
                  className="w-full px-5 py-3.5 rounded-2xl bg-muted/40 border border-border/80 focus:border-primary focus:ring-2 focus:ring-primary/20 text-foreground placeholder:text-muted-foreground outline-none transition-all text-sm font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell me about your project or opportunity..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-5 py-3.5 rounded-2xl bg-muted/40 border border-border/80 focus:border-primary focus:ring-2 focus:ring-primary/20 text-foreground placeholder:text-muted-foreground outline-none transition-all text-sm font-medium resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full h-12 sm:h-14 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center gap-2 hover:bg-primary/90 transition-all shadow-[0_0_25px_rgba(139,92,246,0.35)] hover:shadow-[0_0_35px_rgba(139,92,246,0.55)] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                {submitted ? (
                  <>
                    <CheckCircle2 className="w-5 h-5 text-emerald-300" />
                    <span>Opening WhatsApp...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

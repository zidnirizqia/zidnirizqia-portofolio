"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, FileText } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 120);

      // Detect active section
      const sections = [
        "home",
        "about",
        "experience",
        "projects",
        "education",
        "skills",
        "contact",
      ];
      const scrollPos = window.scrollY + 200;

      for (const sec of sections) {
        const el = document.getElementById(sec);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sec);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 pt-4 transition-all duration-500 transform",
        scrolled
          ? "-translate-y-32 opacity-0 pointer-events-none"
          : "translate-y-0 opacity-100 pointer-events-auto"
      )}
    >
      <div
        className={cn(
          "glass-panel w-full max-w-7xl rounded-[2rem] flex items-center justify-between px-6 py-4 transition-all duration-300",
          scrolled ? "shadow-2xl border-foreground/15 backdrop-blur-2xl" : "shadow-lg border-foreground/10"
        )}
      >
        {/* Brand Logo */}
        <a
          onClick={() => scrollToSection("#home")}
          className="cursor-pointer font-extrabold text-lg flex items-center gap-3 group select-none"
        >
          <div className="relative w-9 h-9 rounded-xl bg-gradient-to-tr from-purple-600 via-primary to-sky-400 p-[1px] shadow-lg group-hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full bg-background rounded-[11px] flex items-center justify-center">
              <span className="font-extrabold text-xs tracking-tighter bg-gradient-to-r from-purple-500 to-sky-400 bg-clip-text text-transparent">
                ZKR
              </span>
            </div>
          </div>
          <div className="flex flex-col text-left">
            <span className="font-extrabold tracking-tight text-foreground text-sm leading-none group-hover:text-primary transition-colors">
              Zidni Khaerur Rizqia
            </span>
            <span className="text-[9px] font-bold text-muted-foreground tracking-widest uppercase mt-0.5">
              Portfolio
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-1 justify-center">
          <ul className="flex space-x-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <li
                  key={link.name}
                  className={cn(
                    "relative group text-sm font-medium transition-colors",
                    isActive ? "text-foreground font-semibold" : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="cursor-pointer py-1"
                  >
                    {link.name}
                  </button>
                  <span
                    className={cn(
                      "absolute -bottom-1.5 left-1/2 -translate-x-1/2 h-0.5 bg-primary rounded-full transition-all duration-300 shadow-[0_0_8px_rgba(139,92,246,0.8)]",
                      isActive ? "w-4/5" : "w-0 group-hover:w-1/2"
                    )}
                  />
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          <a
            href="https://drive.google.com/file/d/1RiZeBxz74RxjJTB8nwvzO1dMFxcDwp06/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-primary/10 hover:bg-primary/20 text-primary border border-primary/25 text-xs font-bold transition-all hover:scale-105 shadow-sm"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>CV</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-foreground hover:text-primary transition-colors p-2"
            aria-label="Toggle Mobile Menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-4 right-4 glass-panel p-6 rounded-3xl border border-foreground/15 shadow-2xl flex flex-col gap-3 animate-in fade-in slide-in-from-top-4 duration-200">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className={cn(
                "text-left py-2.5 px-4 rounded-xl text-base font-medium transition-colors",
                activeSection === link.href.replace("#", "")
                  ? "bg-primary/10 text-primary font-bold"
                  : "text-muted-foreground hover:text-foreground hover:bg-foreground/5"
              )}
            >
              {link.name}
            </button>
          ))}
          <a
            href="https://drive.google.com/file/d/1RiZeBxz74RxjJTB8nwvzO1dMFxcDwp06/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold text-white bg-primary hover:bg-primary/90 transition-all shadow-md mt-2"
          >
            <FileText className="w-4 h-4" />
            <span>Download CV (PDF)</span>
          </a>
        </div>
      )}
    </header>
  );
}

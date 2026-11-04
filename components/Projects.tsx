"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Code2,
  Award,
  ArrowRight,
  ArrowUpRight,
  X,
  BookOpen,
  CheckCircle2,
  Calendar,
  MapPin,
  Sparkles,
  Layers,
  Image as ImageIcon,
  ShieldCheck,
} from "lucide-react";

interface GalleryItem {
  src: string;
  caption: string;
}

interface ProjectItem {
  id: number;
  title: string;
  fullTitle?: string;
  category: string;
  description: string;
  tags: string[];
  image: string;
  link?: string;
  repoLink?: string;
  docsLink?: string;
  academicMeta?: {
    type: string;
    institution: string;
    year?: string;
    advisor?: string;
    scoreOrAccuracy?: string;
  };
  overview?: string;
  methodology?: string;
  features?: string[];
  gallery?: GalleryItem[];
}

interface CertificateItem {
  id: number;
  title: string;
  category: "Network & Cloud" | "Programming & Web" | "AI & Data";
  issuer: string;
  date?: string;
  verification?: string;
  verifyUrl?: string;
  image: string;
}

const projects: ProjectItem[] = [
  {
    id: 1,
    title: "Automated Vehicle Detection, Tracking & Counting System",
    fullTitle:
      "Development of an Automated Vehicle Detection, Tracking, and Counting System Based on YOLOv8 and Deep SORT Using Directional Line Crossing",
    category: "Computer Vision & AI",
    description:
      "Computer vision pipeline detecting, tracking, and counting 4 vehicle classes (bus, car, motorcycle, truck) segregated by direction of travel. Achieved ~98% counting accuracy across two video datasets and 93.26% mAP@0.5.",
    tags: [
      "YOLOv8",
      "Deep SORT",
      "Directional Line Crossing",
      "Python",
      "Flask",
      "OpenCV",
    ],
    image: "/projects/skripsi-annotated-video.png",
    academicMeta: {
      type: "Undergraduate Thesis (S1 Informatics)",
      institution: "Universitas Gunadarma",
      year: "2026",
      advisor: "Dr. Yulia Chalri, S.Kom., M.M.",
      scoreOrAccuracy: "mAP@0.5: 93.26% | Counting Accuracy: ~98% (2 Test Feeds)",
    },
    overview:
      "Rapid vehicular traffic growth demands fast, direction-segregated traffic volume data, while manual tallying is labor-intensive and prone to recording inaccuracies. This project engineered an automated computer vision system for four vehicle classes using YOLOv8 for detection, Deep SORT for tracking, and directional line crossing for directional counts, structured under the CRISP-DM framework.",
    methodology:
      "CRISP-DM (Business Understanding, Data Preparation, Modeling, Evaluation, Deployment). The YOLOv8n model was fine-tuned with transfer learning on a specialized Roboflow Universe dataset. The tracking pipeline integrates movement vector direction validation, hysteresis margins, segment boundary bounding, and a counted-ID registry to ensure each object is tallied exactly once per crossing.",
    features: [
      "Detection of 4 vehicle classes with YOLOv8n (mAP@0.5: 0.9326).",
      "Multi-object tracking with Deep SORT. In ablation experiments, Deep SORT consistently outperformed SORT on MAE and F1-score across both video feeds, showing the largest margin on motorcycles.",
      "Directional line crossing with movement vectors for precise bi-directional traffic counts.",
      "Hysteresis zone and counted-ID registry preventing false oscillations and duplicate tallies.",
      "Ablation study evaluating 3 configurations (no tracker, SORT, Deep SORT) alongside sensitivity analysis of object reference points and hysteresis margins.",
      "Local Flask web application with an interactive canvas to calibrate count line coordinates and reference points directly on video frames.",
    ],
    gallery: [
      {
        src: "/projects/skripsi-annotated-video.png",
        caption:
          "Annotated video preview: bounding boxes, tracking IDs, and directional count status",
      },
      {
        src: "/projects/skripsi-tracking-system.png",
        caption: "Flask web application interface during active vehicle counting",
      },
      {
        src: "/projects/skripsi-line-setup.png",
        caption:
          "Interactive canvas for calibrating count lines and vehicle reference points",
      },
      {
        src: "/projects/skripsi-eval-metric.png",
        caption: "Model evaluation confusion matrix on test dataset",
      },
    ],
  },
  {
    id: 2,
    title: "Online Food Ordering & Customer Loyalty System",
    fullTitle:
      "Development of a Web-Based Food Ordering Application with Customer Loyalty Point System for Mie Ayam Mas Jo",
    category: "Full-Stack Web Engineering",
    description:
      "Full-stack web ordering portal for a local culinary SME featuring customer loyalty reward points, digital QRIS payments via Midtrans Snap, and an administrative sales analytics dashboard. User Acceptance Testing (UAT) with 15 respondents yielded a 92.6% satisfaction rating (Excellent).",
    tags: [
      "PHP",
      "MySQL",
      "JavaScript",
      "Bootstrap",
      "Midtrans Snap (QRIS)",
      "cPanel",
      "SDLC Waterfall",
    ],
    image: "/projects/pi-masjo-thumb.png",
    link: "https://mieayammasjo.web.id",
    academicMeta: {
      type: "Scientific Writing (Penulisan Ilmiah)",
      institution: "Universitas Gunadarma",
      year: "2025",
      advisor: "Sindy Nova, S.Kom., MMSI",
      scoreOrAccuracy: "UAT: 92.6% Across 15 Respondents (Excellent Category)",
    },
    overview:
      "Manual paper-based ordering in food service leads to order errors, service bottlenecks, and low customer retention. This project built an end-to-end web ordering portal featuring loyalty reward vouchers to incentivize repeat orders, seamless QRIS digital payments, order status notifications via WhatsApp, and automated daily sales recaps for Mie Ayam Mas Jo.",
    methodology:
      "Waterfall SDLC: requirements analysis, system modeling, coding implementation, and testing. Testing encompassed Black Box Testing for all functional endpoints and User Acceptance Testing (UAT) to evaluate user satisfaction and operational feasibility.",
    features: [
      "Customer loyalty points program and voucher redemption system to drive repeat visits.",
      "Digital QRIS payments powered by Midtrans Snap payment gateway.",
      "Interactive food & beverage menu catalog with dynamic topping selection and automated bill calculation.",
      "Complete ordering workflow: cart management, checkout, and real-time order status tracking.",
      "Comprehensive admin dashboard: categories, dishes, toppings, discount vouchers, and sales accounting.",
      "Secure password hashing for user account authentication.",
      "Live production deployment on cPanel hosting with custom domain (mieayammasjo.web.id).",
    ],
    gallery: [
      {
        src: "/projects/pi-masjo-home.png",
        caption: "Homepage and main navigation for Mie Ayam Mas Jo",
      },
      {
        src: "/projects/pi-masjo-menu.png",
        caption: "Menu catalog with customizable toppings and dynamic pricing",
      },
      {
        src: "/projects/pi-masjo-admin-dashboard.png",
        caption: "Admin dashboard: real-time sales metrics and incoming orders",
      },
      {
        src: "/projects/pi-masjo-points.png",
        caption: "Customer loyalty points and voucher redemption page",
      },
      {
        src: "/projects/pi-masjo-midtrans.png",
        caption: "Digital QRIS payment via Midtrans Snap",
      },
    ],
  },
  {
    id: 3,
    title: "Jumantik Larvae Monitoring System & AI Assistant",
    fullTitle:
      "Web-Based & AI-Assisted Dengue Larvae Monitoring Information System for Kelurahan Malaka Sari",
    category: "Team Software Project (Technical Writer)",
    description:
      "Web-based dengue larvae surveillance system with GPS geotagging and an integrated public health AI Assistant for Kelurahan Malaka Sari. Served as Technical Writer: authored IEEE-standard SRS, SDD, comprehensive test plans, and bilingual user manuals.",
    tags: [
      "Software Documentation",
      "SRS & SDD",
      "UML Modeling",
      "React + Vite",
      "AI Chatbot",
    ],
    image: "/projects/jumantik-preview.png",
    repoLink: "https://github.com/Lutfi1412/JumantikMalakaSari.git",
    docsLink:
      "https://drive.google.com/drive/folders/1uZr9e4iEFnoDT7fEenRDtDR6sMessnu-?usp=drive_link",
    academicMeta: {
      type: "Team Software Project (PPPL)",
      institution: "Universitas Gunadarma & Kelurahan Malaka Sari",
      year: "2025",
      advisor: "PPPL Academic Faculty",
      scoreOrAccuracy: "Role: Technical Writer & Documentation Lead",
    },
    overview:
      "Semester-long collaborative software engineering project delivered for the municipal client Kelurahan Malaka Sari (East Jakarta). The system digitizes mosquito nest surveillance conducted by Jumantik health officers with GPS location verification, multi-tier administrative reporting (Cadre, RT, RW, Kelurahan), and an AI Assistant for dengue prevention advisories.",
    methodology:
      "Structured SDLC with cross-functional roles (Project Manager, Software Analyst, UI Designer, Programmer, QA Tester, Technical Writer). As Technical Writer, led documentation standardization referencing IEEE/PMBOK specifications.",
    features: [
      "Software Requirements Specification (SRS): use case specifications, sequence diagrams, class models, and data dictionary.",
      "Software Design Document (SDD): normalized database schemas, physical network architecture, and wireframes.",
      "Testing documentation: master test plan, unit and integration test matrices, and verification logs.",
      "User Manual and Installation Guide for field cadres and administrative personnel.",
      "Minutes of Meeting (MoM) governance with government stakeholders.",
      "Technical documentation of the AI Assistant chatbot integrated by the development team.",
    ],
    gallery: [
      {
        src: "/projects/jumantik-preview.png",
        caption:
          "Web dashboard interface and GPS geotagging reporting mockup",
      },
      {
        src: "/projects/jumantik-docs-architecture.svg",
        caption:
          "Software architecture map and technical documentation hierarchy (SRS, SDD, manuals)",
      },
    ],
  },
];

const certificates: CertificateItem[] = [
  // 1. Network & Cloud
  {
    id: 1,
    title: "Cloud Computing & Generative AI on AWS",
    category: "Network & Cloud",
    issuer: "Dicoding Indonesia",
    date: "October 29, 2026",
    verification: "98XW858K0PM3",
    verifyUrl: "https://www.dicoding.com/certificates/98XW858K0PM3",
    image: "/certificates/real/belajar-dasar-cloud-dan-gen-ai-di-aws.jpg",
  },
  {
    id: 2,
    title: "Wide Area Network (WAN) with Cisco Router (Intermediate)",
    category: "Network & Cloud",
    issuer: "Universitas Gunadarma LePKom",
    date: "August 2025",
    verification: "No. 291748",
    image:
      "/certificates/real/wide-area-network-using-cisco-router-for-intermediate.jpg",
  },
  {
    id: 3,
    title: "Wireless LAN Installation & Configuration",
    category: "Network & Cloud",
    issuer: "Universitas Gunadarma LePKom",
    date: "January 16, 2025",
    verification: "No. 352649",
    image:
      "/certificates/real/introduction-to-wireless-lan-installation.jpg",
  },
  {
    id: 4,
    title: "Local Area Network (LAN) using Cisco Router",
    category: "Network & Cloud",
    issuer: "Universitas Gunadarma LePKom",
    date: "August 2024",
    verification: "No. 349086",
    image: "/certificates/real/local-area-network-using-cisco-router.jpg",
  },
  {
    id: 5,
    title: "Fundamental Network Programming",
    category: "Network & Cloud",
    issuer: "Universitas Gunadarma LePKom",
    date: "August 2023",
    verification: "No. 533619",
    image: "/certificates/real/fundamental-networking.jpg",
  },

  // 2. Programming & Web
  {
    id: 6,
    title: "Starting Programming with Python",
    category: "Programming & Web",
    issuer: "Dicoding Indonesia",
    date: "October 29, 2026",
    verification: "KEXLMYMLRZG2",
    verifyUrl: "https://www.dicoding.com/certificates/KEXLMYMLRZG2",
    image: "/certificates/real/memulai-pemrograman-dengan-python.jpg",
  },
  {
    id: 7,
    title: "Spec-Driven Development with Kiro",
    category: "Programming & Web",
    issuer: "Dicoding Indonesia",
    date: "October 29, 2026",
    verification: "81P2K4K2QXOY",
    verifyUrl: "https://www.dicoding.com/certificates/81P2K4K2QXOY",
    image: "/certificates/real/spec-driven-development-dengan-kiro.jpg",
  },
  {
    id: 8,
    title: "Basic Web Application Development",
    category: "Programming & Web",
    issuer: "Universitas Gunadarma LePKom",
    date: "May 25 – June 6, 2026",
    verification: "No. 519980",
    image: "/certificates/real/basic-web-application-development.jpg",
  },
  {
    id: 9,
    title: "Go Programming (Intermediate)",
    category: "Programming & Web",
    issuer: "Universitas Gunadarma LePKom",
    date: "February 2025",
    verification: "No. 106701",
    image: "/certificates/real/go-lang-for-intermediate.jpg",
  },
  {
    id: 10,
    title: "Go Programming (Beginner)",
    category: "Programming & Web",
    issuer: "Universitas Gunadarma LePKom",
    date: "February 2024",
    verification: "No. 069031",
    image: "/certificates/real/go-lang-for-beginner.jpg",
  },
  {
    id: 11,
    title: "Fundamental Web-Based Programming",
    category: "Programming & Web",
    issuer: "Universitas Gunadarma LePKom",
    date: "February 2023",
    verification: "No. 076750",
    image: "/certificates/real/fundamental-web-programming.jpg",
  },

  // 3. AI & Data
  {
    id: 12,
    title: "Machine Learning for Beginners",
    category: "AI & Data",
    issuer: "Dicoding Indonesia",
    date: "October 30, 2026",
    verification: "MRZMVYV73ZYQ",
    verifyUrl: "https://www.dicoding.com/certificates/MRZMVYV73ZYQ",
    image: "/certificates/real/belajar-machine-learning-untuk-pemula.jpg",
  },
  {
    id: 13,
    title: "Data Science Fundamentals",
    category: "AI & Data",
    issuer: "Dicoding Indonesia",
    image: "/certificates/real/belajar-dasar-data-science.jpg",
  },
  {
    id: 14,
    title: "Unleashing the Power of AI Agents",
    category: "AI & Data",
    issuer: "IBM Skills Network",
    image: "/certificates/real/unleashing-the-power-of-ai-agents.jpg",
  },
  {
    id: 15,
    title: "Classifying Data Using IBM Granite",
    category: "AI & Data",
    issuer: "IBM Skills Network",
    image: "/certificates/real/classifying-data-using-ibm-granite.jpg",
  },
  {
    id: 16,
    title: "Getting Started with Data",
    category: "AI & Data",
    issuer: "IBM Skills Network",
    image: "/certificates/real/getting-started-with-data.jpg",
  },
];

export function Projects() {
  const [activeTab, setActiveTab] = useState<"projects" | "certificates">("projects");
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [showAllCertificates, setShowAllCertificates] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Listen to external tab switch events (e.g. from Section Experience)
  useEffect(() => {
    const handleSwitchTab = (e: Event) => {
      const customEvent = e as CustomEvent<{ tab?: "projects" | "certificates" }>;
      if (customEvent.detail?.tab) {
        setActiveTab(customEvent.detail.tab);
      }
    };
    window.addEventListener("portfolio:switch-tab", handleSwitchTab);
    return () => window.removeEventListener("portfolio:switch-tab", handleSwitchTab);
  }, []);

  // Close modal with ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (previewImage) {
          setPreviewImage(null);
        } else {
          setSelectedProject(null);
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [previewImage]);

  // Lock body scroll and notify other components (such as DockBar) when modal or lightbox is open
  useEffect(() => {
    const isModalOpen = Boolean(selectedProject || previewImage);
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
      document.body.setAttribute("data-modal-open", "true");
      window.dispatchEvent(
        new CustomEvent("portfolio:modal-change", { detail: { open: true } })
      );
    } else {
      document.body.style.overflow = "unset";
      document.body.removeAttribute("data-modal-open");
      window.dispatchEvent(
        new CustomEvent("portfolio:modal-change", { detail: { open: false } })
      );
    }
    return () => {
      document.body.style.overflow = "unset";
      document.body.removeAttribute("data-modal-open");
      window.dispatchEvent(
        new CustomEvent("portfolio:modal-change", { detail: { open: false } })
      );
    };
  }, [selectedProject, previewImage]);

  const displayedProjects = showAllProjects ? projects : projects.slice(0, 3);
  const displayedCertificates = showAllCertificates
    ? certificates
    : certificates.slice(0, 6);

  return (
    <section id="projects" className="w-full max-w-7xl mx-auto px-6 py-14 sm:py-20">
      {/* Header with Smooth Scroll Reveal */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-8">
          Selected Works
        </h2>

        {/* Tab Bar */}
        <div className="inline-flex p-1.5 rounded-2xl bg-[#0a0f1d] border border-white/5 backdrop-blur-md">
          <button
            onClick={() => setActiveTab("projects")}
            className={`flex items-center gap-2 px-8 py-3 rounded-xl text-sm font-semibold transition-all duration-300 cursor-pointer ${
              activeTab === "projects"
                ? "bg-[#111c38] text-white border border-blue-500/20 shadow-[0_0_20px_rgba(29,78,216,0.15)]"
                : "text-neutral-400 hover:text-neutral-200"
            }`}
          >
            <Code2 className="w-4 h-4" />
            Projects
          </button>
          <button
            onClick={() => setActiveTab("certificates")}
            className={`flex items-center gap-2 px-8 py-3 rounded-xl text-sm font-semibold transition-all duration-300 cursor-pointer ${
              activeTab === "certificates"
                ? "bg-[#111c38] text-white border border-blue-500/20 shadow-[0_0_20px_rgba(29,78,216,0.15)]"
                : "text-neutral-400 hover:text-neutral-200"
            }`}
          >
            <Award className="w-4 h-4" />
            Certificates
          </button>
        </div>

        {activeTab === "certificates" && (
          <p className="text-xs sm:text-sm text-neutral-400 mt-4 font-light max-w-xl mx-auto">
            Professional certifications and accredited courses. Click to enlarge preview, or open official verification.
          </p>
        )}
      </motion.div>

      {/* Content depending on Active Tab */}
      {activeTab === "projects" ? (
        /* PROJECTS VIEW */
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {displayedProjects.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="bg-[#0a0f1d] border border-white/10 rounded-2xl overflow-hidden flex flex-col group hover:border-blue-500/40 hover:shadow-[0_0_30px_rgba(37,99,235,0.15)] transition-all duration-300"
                >
                  {/* Image */}
                  <div
                    className="h-52 overflow-hidden bg-neutral-900 relative cursor-pointer"
                    onClick={() => setSelectedProject(item)}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      loading="lazy"
                      className="object-cover object-top opacity-90 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1d] via-transparent to-transparent opacity-80 pointer-events-none" />
                    <span className="absolute bottom-3 right-3 px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md text-xs text-white/90 border border-white/10 flex items-center gap-1 font-medium z-10">
                      <ImageIcon className="w-3 h-3 text-blue-400" /> View Details
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.tags.slice(0, 3).map((tag, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-full bg-[#111c38] text-blue-300 text-xs font-semibold border border-blue-500/20"
                        >
                          {tag}
                        </span>
                      ))}
                      {item.tags.length > 3 && (
                        <span className="px-2 py-1 rounded-full bg-white/5 text-neutral-400 text-xs">
                          +{item.tags.length - 3}
                        </span>
                      )}
                    </div>

                    <div className="mb-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-blue-400/90 mb-1.5 block">
                        {item.category}
                      </span>
                      <h3
                        className="text-xl font-bold text-white leading-snug line-clamp-2 group-hover:text-blue-300 transition-colors cursor-pointer"
                        onClick={() => setSelectedProject(item)}
                      >
                        {item.title}
                      </h3>
                    </div>

                    <p className="text-sm text-neutral-400 line-clamp-3 mb-6 flex-1 leading-relaxed font-light">
                      {item.description}
                    </p>

                    {/* Footer Buttons */}
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                      <button
                        onClick={() => setSelectedProject(item)}
                        className="text-blue-400 hover:text-blue-300 text-sm font-semibold flex items-center gap-1.5 transition-colors group/btn cursor-pointer"
                      >
                        View Details{" "}
                        <ExternalLink className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                      </button>
                      <a
                        href="#contact"
                        className="px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                      >
                        Discuss <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Show More Button for Projects */}
          {projects.length > 3 && (
            <div className="mt-12 flex justify-center">
              <button
                onClick={() => setShowAllProjects(!showAllProjects)}
                className="px-6 py-2.5 rounded-full bg-[#111c38] hover:bg-blue-900/50 text-blue-300 border border-blue-500/20 text-sm font-bold transition-all hover:shadow-[0_0_15px_rgba(29,78,216,0.3)] cursor-pointer"
              >
                {showAllProjects ? "Show Less" : "More"}
              </button>
            </div>
          )}
        </>
      ) : (
        /* CERTIFICATES VIEW */
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {displayedCertificates.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  layout
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.5, delay: (index % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="group relative rounded-2xl overflow-hidden bg-[#0c1326] border border-white/15 hover:border-blue-400/50 hover:shadow-[0_0_30px_rgba(37,99,235,0.2)] transition-all duration-300 flex flex-col shadow-lg"
                >
                  {/* Category Pill Top */}
                  <div className="p-3 pb-2 flex items-center justify-between border-b border-white/5 bg-black/20 text-xs">
                    <span className="px-2.5 py-0.5 rounded-md bg-blue-500/10 text-blue-300 font-semibold border border-blue-500/20 text-[11px]">
                      {cert.category}
                    </span>
                    {cert.verification && (
                      <span className="text-[11px] text-neutral-400 font-mono">
                        {cert.verification}
                      </span>
                    )}
                  </div>

                  {/* Certificate Image preview */}
                  <div
                    onClick={() => setPreviewImage(cert.image)}
                    className="relative aspect-[1.414/1] bg-white cursor-pointer overflow-hidden group/img"
                  >
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      loading="lazy"
                      className="object-contain p-2 transition-transform duration-500 group-hover/img:scale-105"
                    />

                    {/* Hover Overlay with Arrow and 'Enlarge' */}
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center select-none z-10">
                      <ArrowUpRight className="w-8 h-8 text-white mb-1 transition-transform duration-300 group-hover/img:translate-x-1 group-hover/img:-translate-y-1" />
                      <span className="text-white font-bold text-sm tracking-wide drop-shadow-md">
                        Click to Enlarge
                      </span>
                    </div>
                  </div>

                  {/* Card Info Footer */}
                  <div className="p-4 flex flex-col justify-between flex-1 bg-[#0a0f1d] border-t border-white/10 gap-2">
                    <div>
                      <h4 className="text-sm font-bold text-white line-clamp-2 leading-snug">
                        {cert.title}
                      </h4>
                      <p className="text-xs text-neutral-400 mt-1">
                        {cert.issuer} {cert.date ? `• ${cert.date}` : ""}
                      </p>
                    </div>

                    {cert.verifyUrl && (
                      <a
                        href={cert.verifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-blue-400 hover:text-blue-300 font-medium transition-colors pt-2 border-t border-white/5 w-fit"
                      >
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                        Verify Certificate
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Show More Button for Certificates */}
          {certificates.length > 6 && (
            <div className="mt-12 flex justify-center">
              <button
                onClick={() => setShowAllCertificates(!showAllCertificates)}
                className="px-6 py-2.5 rounded-full bg-[#111c38] hover:bg-blue-900/50 text-blue-300 border border-blue-500/20 text-sm font-bold transition-all hover:shadow-[0_0_15px_rgba(29,78,216,0.3)] cursor-pointer"
              >
                {showAllCertificates
                  ? "Show Less"
                  : `More (${certificates.length})`}
              </button>
            </div>
          )}
        </>
      )}

      {/* Detailed Project Overview Modal & Lightbox via Portal */}
      {mounted && typeof document !== "undefined" && createPortal(
        <>
          {/* Detailed Project Overview Modal */}
          <AnimatePresence>
            {selectedProject && (
              <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-8">
                {/* Backdrop */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setSelectedProject(null)}
                  className="fixed inset-0 bg-black/85 backdrop-blur-md"
                />

                {/* Modal Dialog */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 20 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="relative w-full max-w-4xl max-h-[90vh] bg-[#0c1326] border border-white/15 rounded-3xl overflow-hidden flex flex-col shadow-[0_0_60px_rgba(0,0,0,0.8)] z-10"
                >
                  {/* Modal Header Bar with Close Button */}
                  <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#0c1326]/95 backdrop-blur-md border-b border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-wider">
                        {selectedProject.category}
                      </div>
                      {selectedProject.academicMeta?.year && (
                        <span className="text-xs text-neutral-400 font-medium">
                          Year: {selectedProject.academicMeta.year}
                        </span>
                      )}
                    </div>
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white flex items-center justify-center transition-colors border border-white/10 cursor-pointer"
                      aria-label="Close"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Modal Body (Scrollable) */}
                  <div className="overflow-y-auto px-6 sm:px-8 py-6 space-y-8 flex-1">
                    {/* Hero Banner / Preview */}
                    <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-neutral-950 aspect-video max-h-[380px]">
                      <img
                        src={selectedProject.image}
                        alt={selectedProject.title}
                        className="w-full h-full object-cover object-top"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0c1326] via-transparent to-transparent opacity-90" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight drop-shadow-md">
                          {selectedProject.fullTitle || selectedProject.title}
                        </h3>
                      </div>
                    </div>

                    {/* Academic Metadata Chips */}
                    {selectedProject.academicMeta && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                        <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                          <span className="text-xs text-neutral-400 block mb-1">
                            Program &amp; Nature of Project
                          </span>
                          <span className="text-sm font-semibold text-white flex items-center gap-2">
                            <BookOpen className="w-4 h-4 text-blue-400" />
                            {selectedProject.academicMeta.type}
                          </span>
                        </div>

                        <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                          <span className="text-xs text-neutral-400 block mb-1">
                            Institution / Client
                          </span>
                          <span className="text-sm font-semibold text-white flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-emerald-400" />
                            {selectedProject.academicMeta.institution}
                          </span>
                        </div>

                        <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                          <span className="text-xs text-neutral-400 block mb-1">
                            Key Metrics &amp; Outcome
                          </span>
                          <span className="text-sm font-semibold text-white flex items-center gap-2">
                            <Award className="w-4 h-4 text-yellow-400" />
                            {selectedProject.academicMeta.scoreOrAccuracy}
                          </span>
                        </div>
                      </div>
                    )}

                    {/* Resource Links (GitHub Repo & Google Drive Documentation & Live Website) */}
                    {(selectedProject.repoLink ||
                      selectedProject.docsLink ||
                      selectedProject.link) && (
                      <div className="flex flex-wrap gap-3 p-4 rounded-2xl bg-blue-500/5 border border-blue-500/20">
                        {selectedProject.link && (
                          <a
                            href={selectedProject.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600/30 hover:bg-blue-600/40 text-blue-300 text-xs sm:text-sm font-semibold border border-blue-500/30 transition-all hover:scale-102"
                          >
                            <ExternalLink className="w-4 h-4 text-blue-400" />
                            Live Website (mieayammasjo.web.id)
                          </a>
                        )}
                        {selectedProject.repoLink && (
                          <a
                            href={selectedProject.repoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs sm:text-sm font-semibold border border-white/15 transition-all hover:scale-102"
                          >
                            <Code2 className="w-4 h-4 text-blue-400" />
                            GitHub Team Repository
                            <ExternalLink className="w-3.5 h-3.5 text-neutral-400" />
                          </a>
                        )}
                        {selectedProject.docsLink && (
                          <a
                            href={selectedProject.docsLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-purple-600/20 hover:bg-purple-600/30 text-purple-300 text-xs sm:text-sm font-semibold border border-purple-500/30 transition-all hover:scale-102"
                          >
                            <BookOpen className="w-4 h-4 text-purple-400" />
                            Full Technical Documentation (Google Drive)
                            <ExternalLink className="w-3.5 h-3.5 text-purple-400" />
                          </a>
                        )}
                      </div>
                    )}

                    {/* Tags */}
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-3 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-blue-400" /> Technologies &amp; Keywords
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="px-3 py-1.5 rounded-lg bg-[#111c38] text-blue-300 text-xs font-semibold border border-blue-500/25"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Section: Overview & Background */}
                    <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3">
                      <h4 className="text-base font-bold text-white flex items-center gap-2">
                        <BookOpen className="w-4 h-4 text-blue-400" /> Background &amp; Problem Overview
                      </h4>
                      <p className="text-sm sm:text-base text-neutral-300 leading-relaxed text-justify font-light">
                        {selectedProject.overview || selectedProject.description}
                      </p>
                    </div>

                    {/* Section: Methodology */}
                    {selectedProject.methodology && (
                      <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3">
                        <h4 className="text-base font-bold text-white flex items-center gap-2">
                          <Layers className="w-4 h-4 text-purple-400" /> Engineering Methodology
                        </h4>
                        <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-light">
                          {selectedProject.methodology}
                        </p>
                      </div>
                    )}

                    {/* Section: Key Deliverables & Contributions */}
                    {selectedProject.features && (
                      <div>
                        <h4 className="text-base font-bold text-white mb-4 flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Key Deliverables &amp; Engineering Contributions
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {selectedProject.features.map((feat, i) => (
                            <div
                              key={i}
                              className="flex items-start gap-3 p-3.5 rounded-xl bg-white/5 border border-white/10"
                            >
                              <div className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                                {i + 1}
                              </div>
                              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light">
                                {feat}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Section: Gallery Screenshots & Diagrams */}
                    {selectedProject.gallery && selectedProject.gallery.length > 0 && (
                      <div>
                        <h4 className="text-base font-bold text-white mb-4 flex items-center gap-2">
                          <ImageIcon className="w-4 h-4 text-blue-400" /> System Screenshots &amp; Artifacts
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {selectedProject.gallery.map((img, i) => (
                            <div
                              key={i}
                              onClick={() => setPreviewImage(img.src)}
                              className="group relative rounded-xl overflow-hidden border border-white/10 bg-neutral-900 cursor-pointer hover:border-blue-400/50 transition-all"
                            >
                              <div className="aspect-video overflow-hidden relative">
                                <Image
                                  src={img.src}
                                  alt={img.caption}
                                  fill
                                  sizes="(max-width: 768px) 100vw, 50vw"
                                  loading="lazy"
                                  className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                                />
                              </div>
                              <div className="p-3 bg-black/60 backdrop-blur-sm border-t border-white/5">
                                <p className="text-xs text-neutral-300 line-clamp-2 leading-snug font-light">
                                  {img.caption}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Modal Footer */}
                  <div className="sticky bottom-0 z-20 flex items-center justify-end px-6 py-4 bg-[#0c1326]/95 backdrop-blur-md border-t border-white/10">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setSelectedProject(null)}
                        className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-sm font-semibold transition-colors cursor-pointer"
                      >
                        Close
                      </button>
                      <a
                        href="#contact"
                        onClick={() => setSelectedProject(null)}
                        className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold transition-colors shadow-[0_0_15px_rgba(37,99,235,0.4)] cursor-pointer"
                      >
                        Contact Me
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>

          {/* Lightbox / Fullscreen Image Zoom for Certificates & Gallery */}
          <AnimatePresence>
            {previewImage && (
              <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
                {/* Backdrop to close */}
                <div
                  className="absolute inset-0"
                  onClick={() => setPreviewImage(null)}
                />

                <button
                  onClick={() => setPreviewImage(null)}
                  className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-20 border border-white/20 cursor-pointer"
                  aria-label="Close Preview"
                >
                  <X className="w-6 h-6" />
                </button>
                <div className="relative z-10 max-w-5xl max-h-[90vh] overflow-hidden rounded-2xl border border-white/20 shadow-2xl bg-black/40">
                  <img
                    src={previewImage}
                    alt="Enlarged Preview"
                    className="w-full h-full object-contain max-h-[85vh] rounded-2xl"
                  />
                </div>
              </div>
            )}
          </AnimatePresence>
        </>,
        document.body
      )}
    </section>
  );
}

"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Code2, Award, ArrowRight } from "lucide-react";

interface Item {
  id: number;
  title: string;
  category: string;
  description: string;
  tags: string[];
  image: string;
  link?: string;
}

const projects: Item[] = [
  {
    id: 1,
    title: "Pembuatan Aplikasi Pemesanan Makanan...",
    category: "Academic Project",
    description: "Developed a web-based food ordering application for Mie Ayam Mas Jo as a scientific writing project. The system was designed to...",
    tags: ["Web Development", "Food Ordering", "Loyalty Points"],
    image: "/project-food.jpg",
  },
  {
    id: 2,
    title: "Automated Vehicle Detection, Tracking & Counting System",
    category: "Computer Vision",
    description: "Developed and tested a computer vision pipeline for detecting, tracking, and counting vehicles from video footage. YOLOv8 was used...",
    tags: ["Python", "YOLOv8", "Deep SORT", "OpenCV"],
    image: "/project-cv.jpg",
  },
  {
    id: 3,
    title: "Modern Frontend & Containerization Practice",
    category: "Frontend Engineering",
    description: "Explored modern frontend development using React and TypeScript while practicing structured source-control workflows and container-based development concepts...",
    tags: ["React", "TypeScript", "Git", "Docker", "Kubernetes"],
    image: "/project-frontend.jpg",
  },
  {
    id: 4,
    title: "Another Web Application System",
    category: "Web Development",
    description: "A comprehensive backend system for managing user data and real-time socket connections.",
    tags: ["Node.js", "Express", "Socket.io"],
    image: "/project-frontend.jpg",
  },
];

const certificates: Item[] = [
  {
    id: 1,
    title: "AWS Certified Solutions Architect – Associate",
    category: "Cloud Computing",
    description: "Validated expertise in designing distributed systems on AWS, demonstrating ability to build secure and robust cloud architectures.",
    tags: ["AWS", "Cloud Architecture", "Security"],
    image: "/cert-aws.jpg",
  },
  {
    id: 2,
    title: "Google Data Analytics Professional Certificate",
    category: "Data Analysis",
    description: "Completed comprehensive training on data cleaning, analysis, and visualization using tools like SQL, R, and Tableau.",
    tags: ["SQL", "Tableau", "Data Analysis"],
    image: "/cert-google.jpg",
  },
  {
    id: 3,
    title: "DeepLearning.AI TensorFlow Developer",
    category: "Machine Learning",
    description: "Learned best practices for using TensorFlow, a popular open-source machine learning framework, to build and train models.",
    tags: ["TensorFlow", "Deep Learning", "Python"],
    image: "/cert-tf.jpg",
  },
  {
    id: 4,
    title: "Meta Front-End Developer Professional Certificate",
    category: "Web Development",
    description: "Acquired skills in React, UI/UX design, and cross-platform mobile development with React Native.",
    tags: ["React", "JavaScript", "UI/UX"],
    image: "/cert-meta.jpg",
  },
];

export function Projects() {
  const [activeTab, setActiveTab] = useState<"projects" | "certificates">("projects");
  const [showAll, setShowAll] = useState(false);

  const data = activeTab === "projects" ? projects : certificates;
  const displayedData = showAll ? data : data.slice(0, 3);

  return (
    <section id="projects" className="w-full max-w-7xl mx-auto px-6 py-24 sm:py-32">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-8">
          Selected Works
        </h2>

        {/* Tab Bar */}
        <div className="inline-flex p-1.5 rounded-2xl bg-[#0a0f1d] border border-white/5 backdrop-blur-md">
          <button
            onClick={() => {
              setActiveTab("projects");
              setShowAll(false);
            }}
            className={`flex items-center gap-2 px-8 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
              activeTab === "projects"
                ? "bg-[#111c38] text-white border border-blue-500/20 shadow-[0_0_20px_rgba(29,78,216,0.15)]"
                : "text-neutral-400 hover:text-neutral-200"
            }`}
          >
            <Code2 className="w-4 h-4" />
            Projects
          </button>
          <button
            onClick={() => {
              setActiveTab("certificates");
              setShowAll(false);
            }}
            className={`flex items-center gap-2 px-8 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
              activeTab === "certificates"
                ? "bg-[#111c38] text-white border border-blue-500/20 shadow-[0_0_20px_rgba(29,78,216,0.15)]"
                : "text-neutral-400 hover:text-neutral-200"
            }`}
          >
            <Award className="w-4 h-4" />
            Certificates
          </button>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {displayedData.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="bg-[#0a0f1d] border border-white/10 rounded-2xl overflow-hidden flex flex-col group hover:border-white/20 transition-colors"
            >
              {/* Image */}
              <div className="h-52 overflow-hidden bg-neutral-900 relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLElement).style.opacity = "0.2";
                  }}
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.slice(0, 4).map((tag, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-full bg-[#111c38] text-blue-300 text-xs font-semibold border border-blue-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-400/80 mb-2 block">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-bold text-white leading-snug line-clamp-2">
                    {item.title}
                  </h3>
                </div>

                <p className="text-sm text-neutral-400 line-clamp-3 mb-8 flex-1 leading-relaxed">
                  {item.description}
                </p>

                {/* Footer Buttons */}
                <div className="flex items-center justify-between mt-auto">
                  <a
                    href={item.link || "#"}
                    className="text-blue-400 hover:text-blue-300 text-sm font-semibold flex items-center gap-1.5 transition-colors"
                  >
                    Project Overview <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <button className="px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-semibold flex items-center gap-1.5 transition-colors">
                    Discuss <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Show More Button */}
      {data.length > 3 && (
        <div className="mt-12 flex justify-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-2.5 rounded-full bg-[#111c38] hover:bg-blue-900/50 text-blue-300 border border-blue-500/20 text-sm font-bold transition-all hover:shadow-[0_0_15px_rgba(29,78,216,0.3)]"
          >
            {showAll ? "Tampilkan Lebih Sedikit" : "Tampilkan Lainnya"}
          </button>
        </div>
      )}
    </section>
  );
}

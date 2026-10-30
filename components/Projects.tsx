"use client";

import React, { useState, useEffect } from "react";
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
  Image as ImageIcon
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
    year: string;
    advisor?: string;
    scoreOrAccuracy?: string;
  };
  overview?: string;
  features?: string[];
  methodology?: string;
  gallery?: GalleryItem[];
}

interface CertificateItem {
  id: number;
  title: string;
  image: string;
}

const projects: ProjectItem[] = [
  {
    id: 1,
    title: "Sistem Deteksi, Pelacakan & Penghitungan Kendaraan",
    fullTitle:
      "Pengembangan Sistem Deteksi, Pelacakan, dan Penghitungan Kendaraan Berbasis YOLOv8 dan Deep SORT Menggunakan Metode Directional Line Crossing",
    category: "Computer Vision & AI (Skripsi S1)",
    description:
      "Sistem visi komputer otomatis untuk mendeteksi, melacak, dan menghitung 4 kelas kendaraan (Bus, Mobil, Sepeda Motor, Truk) terurai menurut arah pergerakan dengan akurasi penghitungan ~98% dan mAP@0.5 sebesar 93.26%.",
    tags: [
      "YOLOv8",
      "Deep SORT",
      "Computer Vision",
      "Directional Line Crossing",
      "Python",
      "Flask",
      "OpenCV"
    ],
    image: "/projects/skripsi-annotated-video.png",
    academicMeta: {
      type: "Skripsi (Sarjana S1 Teknik Informatika)",
      institution: "Universitas Gunadarma",
      year: "2026",
      advisor: "Dr. Yulia Chalri, S.Kom., M.M.",
      scoreOrAccuracy: "mAP@0.5: 93.26% | Akurasi Hitung: ~98%"
    },
    overview:
      "Pertumbuhan jumlah kendaraan bermotor menuntut ketersediaan data volume lalu lintas yang cepat dan terurai menurut arah pergerakan, sementara pencacahan manual masih memakan waktu dan rawan kekeliruan. Penelitian ini mengembangkan sistem deteksi, pelacakan, dan penghitungan kendaraan otomatis untuk empat kelas (bus, mobil, sepeda motor, dan truk) dengan menggabungkan YOLOv8 sebagai pendeteksi, Deep SORT sebagai pelacak, dan metode directional line crossing sebagai mekanisme penghitungan berbasis arah yang disusun mengikuti kerangka CRISP-DM.",
    methodology:
      "CRISP-DM (Business Understanding, Data Preparation, Modelling, Evaluation, Deployment). Model YOLOv8n dilatih melalui transfer learning atas dataset Roboflow Universe. Sistem dilengkapi validasi konsistensi arah vektor, pita hysteresis, pembatasan rentang segmen garis, dan registri identitas kendaraan unik agar setiap objek hanya terhitung tepat satu kali per pelintasan.",
    features: [
      "Deteksi 4 kelas kendaraan secara simultan (Bus, Mobil, Sepeda Motor, Truk) dengan YOLOv8n (mAP@0.5: 0.9326).",
      "Pelacakan multi-objek berbasis Deep SORT dengan visual appearance embeddings, meminimalkan ID switch pada arus padat.",
      "Mekanisme Directional Line Crossing dengan vektor pergerakan untuk pencacahan terurai per arah lalu lintas.",
      "Pita hysteresis dan registry counted IDs untuk mengeliminasi false count & penghitungan ganda.",
      "Studi ablasi komparatif (Tanpa Pelacakan vs SORT vs Deep SORT) serta analisis sensitivitas titik acuan objek.",
      "Aplikasi web lokal berbasis Flask dengan kanvas interaktif penetapan koordinat garis hitung pada frame video."
    ],
    gallery: [
      {
        src: "/projects/skripsi-annotated-video.png",
        caption: "Cuplikan Video Teranotasi: Deteksi Bounding Box, Tracking ID, dan Indikator Penghitungan Directional"
      },
      {
        src: "/projects/skripsi-tracking-system.png",
        caption: "Antarmuka Aplikasi Web Flask dan Proses Penghitungan Berjalan Secara Real-Time"
      },
      {
        src: "/projects/skripsi-line-setup.png",
        caption: "Kanvas Interaktif Penentuan Garis Hitung dan Kalibrasi Titik Referensi Kendaraan"
      },
      {
        src: "/projects/skripsi-eval-metric.png",
        caption: "Confusion Matrix Hasil Evaluasi Model pada Himpunan Data Uji"
      }
    ]
  },
  {
    id: 2,
    title: "Aplikasi Pemesanan Makanan & Sistem Poin Loyalitas",
    fullTitle:
      "Pembuatan Aplikasi Pemesanan Makanan Berbasis Website dengan Sistem Poin Loyalitas pada Mie Ayam Mas Jo",
    category: "Full-Stack Web Engineering (Penulisan Ilmiah)",
    description:
      "Ekosistem pemesanan makanan daring berbasis website untuk UMKM kuliner yang mengintegrasikan reward poin loyalitas pelanggan, payment gateway digital Midtrans, dan rekapitulasi laporan penjualan dengan skor UAT 92.6%.",
    tags: [
      "Web Engineering",
      "PHP",
      "MySQL",
      "Midtrans Gateway",
      "Loyalty Points",
      "SDLC Waterfall",
      "UAT 92.6%"
    ],
    image: "/projects/pi-masjo-thumb.png",
    academicMeta: {
      type: "Penulisan Ilmiah (Setara Sarjana Muda / D3)",
      institution: "Universitas Gunadarma",
      year: "2025",
      advisor: "Sindy Nova, S.Kom., MMSI",
      scoreOrAccuracy: "UAT: 92.6% (Kategori Sangat Baik)"
    },
    overview:
      "Pengelolaan pesanan secara manual pada UMKM kuliner sering menimbulkan permasalahan berupa kesalahan pencatatan pesanan, keterlambatan pelayanan, dan rendahnya retensi pelanggan. Proyek ini bertujuan mengembangkan sistem pemesanan makanan berbasis website yang mengintegrasikan program poin loyalitas untuk menstimulasi repeat order, pembayaran digital instan, notifikasi status pesanan, serta laporan penjualan otomatis untuk meningkatkan efisiensi dan customer retention pada UMKM Mie Ayam Mas Jo.",
    methodology:
      "System Development Life Cycle (SDLC) model Waterfall (Analisis Kebutuhan, Desain Sistem, Implementasi Kode, Pengujian). Pengujian sistem mencakup Black Box Testing untuk validasi seluruh fungsionalitas dan User Acceptance Testing (UAT) untuk mengukur tingkat kepuasan pengguna langsung.",
    features: [
      "Sistem Poin Loyalitas & Tukar Voucher Diskon untuk mendongkrak retensi dan pembelian berulang pelanggan.",
      "Integrasi Payment Gateway Midtrans (QRIS, GoPay, Transfer Bank) yang memproses transaksi secara otomatis dan aman.",
      "Katalog menu makanan & minuman interaktif dengan pilihan topping dinamis dan perhitungan harga real-time.",
      "Sistem pemesanan komprehensif mulai dari keranjang belanja, checkout, hingga pelacakan status pesanan real-time.",
      "Dashboard Admin lengkap: kelola kategori, hidangan, varian topping, voucher diskon, monitoring pesanan masuk, dan rekapitulasi penjualan.",
      "Implementasi hashing enkripsi untuk perlindungan keamanan data akun pengguna."
    ],
    gallery: [
      {
        src: "/projects/pi-masjo-home.png",
        caption: "Halaman Beranda & Navigasi Utama Website Mie Ayam Mas Jo"
      },
      {
        src: "/projects/pi-masjo-menu.png",
        caption: "Katalog Menu dengan Pilihan Topping Dinamis & Detail Harga"
      },
      {
        src: "/projects/pi-masjo-admin-dashboard.png",
        caption: "Dashboard Admin: Pemantauan Statistik Penjualan & Pesanan Masuk"
      },
      {
        src: "/projects/pi-masjo-points.png",
        caption: "Halaman Program Poin Loyalitas & Penukaran Voucher Pelanggan"
      },
      {
        src: "/projects/pi-masjo-midtrans.png",
        caption: "Integrasi Pembayaran Digital Otomatis Menggunakan Midtrans Snap"
      }
    ]
  },
  {
    id: 3,
    title: "Sistem Informasi Jumantik & AI Assistant (Kelurahan Malaka Sari)",
    fullTitle:
      "Pengembangan Sistem Informasi Pemantauan Jentik (Jumantik) Berbasis Web & AI – Kelurahan Malaka Sari",
    category: "Team Project (Technical Writer)",
    description:
      "Sistem pemantauan jentik DBD berbasis web dengan geotagging GPS dan AI Chatbot interaktif untuk Kelurahan Malaka Sari. Bertanggung jawab penuh sebagai Technical Writer dalam perancangan spesifikasi perangkat lunak (SRS, SDD, Testing & User Manual).",
    tags: [
      "Technical Writer",
      "Software Documentation",
      "SRS & SDD",
      "React + Vite",
      "AI Chatbot",
      "UML Modeling",
      "Team Project"
    ],
    image: "/projects/jumantik-preview.png",
    repoLink: "https://github.com/Lutfi1412/JumantikMalakaSari.git",
    docsLink: "https://drive.google.com/drive/folders/1uZr9e4iEFnoDT7fEenRDtDR6sMessnu-?usp=drive_link",
    academicMeta: {
      type: "Team Computing Project (PPPL IT045341)",
      institution: "Universitas Gunadarma & Kelurahan Malaka Sari",
      year: "2025",
      advisor: "Dosen Pengampu PPPL",
      scoreOrAccuracy: "Peran: Technical Writer & Doc Lead"
    },
    overview:
      "Proyek perangkat lunak tim skala instansi pemerintahan yang dikembangkan selama satu semester untuk klien resmi Kelurahan Malaka Sari (Duren Sawit, Jakarta Timur) sesuai kurikulum mata kuliah Pengelolaan Proyek Perangkat Lunak (PPPL). Sistem ini dirancang untuk mendigitalkan proses pemantauan sarang nyamuk DBD oleh kader Jumantik secara real-time dengan verifikasi geotagging lokasi GPS, rekapitulasi surat laporan berjenjang (Kader -> RT -> RW -> Kelurahan), serta asisten AI interaktif untuk konsultasi pencegahan demam berdarah.",
    methodology:
      "System Development Life Cycle (SDLC) terstruktur dengan kolaborasi lintas divisi (Project Manager, Software Analyst, Software Designer, Programmer, Tester, Technical Writer). Sebagai Technical Writer, saya memimpin standarisasi seluruh dokumen luaran perangkat lunak (Software & User Documentation) sesuai standar IEEE/PMBOK.",
    features: [
      "Penyusunan Software Requirement Specification (SRS): use case specifications, sequence diagrams, class diagrams, dan kamus data sistem.",
      "Penyusunan Software Design Document (SDD): desain skema basis data, arsitektur fisik, dan rancangan antarmuka pengguna iteratif.",
      "Penyusunan dokumen pengujian (Test Plan, skenario Unit & Integration Testing, serta lembar kerja uji coba).",
      "Penyusunan User Manual & Installation Manual yang komunikatif bagi kader Jumantik dan petugas kelurahan.",
      "Penyusunan Minutes of Meeting (MoM) berkala dengan stakeholder dan klien Kelurahan Malaka Sari.",
      "Fitur AI Assistant / Chatbot interaktif untuk konsultasi masyarakat dan edukasi pencegahan DBD."
    ],
    gallery: [
      {
        src: "/projects/jumantik-preview.png",
        caption: "Mockup Antarmuka Web Dashboard & Aplikasi Mobile Pelaporan Geotagging Jumantik Malaka Sari"
      },
      {
        src: "/projects/jumantik-docs-architecture.svg",
        caption: "Peta Arsitektur Rekayasa Perangkat Lunak & Deliverables Technical Documentation (SRS, SDD, Test Plan, Manual)"
      }
    ]
  },
  {
    id: 4,
    title: "Modern Frontend & Containerization Practice",
    fullTitle: "Modern Frontend Engineering & Containerized Micro-services Practice",
    category: "Frontend & Cloud Engineering",
    description:
      "Eksplorasi arsitektur frontend modern menggunakan React dan TypeScript dengan alur kerja git-flow terstruktur, containerization Docker, serta prinsip antarmuka responsif performa tinggi.",
    tags: ["React", "TypeScript", "Git Flow", "Docker", "Tailwind CSS"],
    image: "/project-frontend.jpg",
    academicMeta: {
      type: "Practical Engineering Project",
      institution: "Self-Directed / Industry Practice",
      year: "2026",
      scoreOrAccuracy: "Production Ready Architecture"
    },
    overview:
      "Proyek rekayasa perangkat lunak mandiri yang berfokus pada implementasi standar frontend modern, modularisasi komponen, manajemen state terpusat, pengujian terisolasi, dan penerapan kontainer Docker untuk menjamin portabilitas lingkungan pengembangan ke produksi.",
    features: [
      "Arsitektur komponen React modular dan tipe data TypeScript yang ketat.",
      "Automasi container berbasis Dockerfile multi-stage build untuk image yang ringan.",
      "Penerapan utility-first styling menggunakan Tailwind CSS dengan dukungan dark/light theme.",
      "Manajemen source control dengan konvensi semantic commit dan branching yang rapi."
    ]
  }
];

const certificates: CertificateItem[] = [
  {
    id: 1,
    title: "Dicoding x AWS – Belajar Dasar Cloud dan Generative AI di AWS",
    image: "/certificates/real/belajar-dasar-cloud-dan-gen-ai-di-aws.jpg"
  },
  {
    id: 2,
    title: "Dicoding – Belajar Machine Learning untuk Pemula",
    image: "/certificates/real/belajar-machine-learning-untuk-pemula.jpg"
  },
  {
    id: 3,
    title: "Dicoding – Belajar Dasar Data Science",
    image: "/certificates/real/belajar-dasar-data-science.jpg"
  },
  {
    id: 4,
    title: "IBM Skills Network – Unleashing the Power of AI Agents",
    image: "/certificates/real/unleashing-the-power-of-ai-agents.jpg"
  },
  {
    id: 5,
    title: "IBM Skills Network – Classifying Data Using IBM Granite",
    image: "/certificates/real/classifying-data-using-ibm-granite.jpg"
  },
  {
    id: 6,
    title: "IBM Skills Network – Getting Started with Data",
    image: "/certificates/real/getting-started-with-data.jpg"
  },
  {
    id: 7,
    title: "Dicoding – Memulai Pemrograman Dengan Python",
    image: "/certificates/real/memulai-pemrograman-dengan-python.jpg"
  },
  {
    id: 8,
    title: "Dicoding – Spec-Driven Development dengan Kiro",
    image: "/certificates/real/spec-driven-development-dengan-kiro.jpg"
  },
  {
    id: 9,
    title: "Universitas Gunadarma LePKom – Go-Lang for Beginner",
    image: "/certificates/real/go-lang-for-beginner.jpg"
  },
  {
    id: 10,
    title: "Universitas Gunadarma LePKom – Go-Lang for Intermediate",
    image: "/certificates/real/go-lang-for-intermediate.jpg"
  },
  {
    id: 11,
    title: "Universitas Gunadarma LePKom – Fundamental Web Programming",
    image: "/certificates/real/fundamental-web-programming.jpg"
  },
  {
    id: 12,
    title: "Universitas Gunadarma LePKom – Basic Web Application Development",
    image: "/certificates/real/basic-web-application-development.jpg"
  },
  {
    id: 13,
    title: "Universitas Gunadarma LePKom – Fundamental Networking",
    image: "/certificates/real/fundamental-networking.jpg"
  },
  {
    id: 14,
    title: "Universitas Gunadarma LePKom – Local Area Network using Cisco Router",
    image: "/certificates/real/local-area-network-using-cisco-router.jpg"
  },
  {
    id: 15,
    title: "Universitas Gunadarma LePKom – Wide Area Network using Cisco Router for Intermediate",
    image: "/certificates/real/wide-area-network-using-cisco-router-for-intermediate.jpg"
  },
  {
    id: 16,
    title: "Universitas Gunadarma LePKom – Introduction to Wireless LAN Installation",
    image: "/certificates/real/introduction-to-wireless-lan-installation.jpg"
  }
];

export function Projects() {
  const [activeTab, setActiveTab] = useState<"projects" | "certificates">("projects");
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [showAllCertificates, setShowAllCertificates] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

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

  // Lock body scroll when modal or lightbox is open
  useEffect(() => {
    if (selectedProject || previewImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedProject, previewImage]);

  const displayedProjects = showAllProjects ? projects : projects.slice(0, 3);
  const displayedCertificates = showAllCertificates ? certificates : certificates.slice(0, 6);

  return (
    <section id="projects" className="w-full max-w-7xl mx-auto px-6 py-24 sm:py-32">
      {/* Header with Smooth Scroll Reveal */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="text-center mb-16"
      >
        <span className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-3 bg-blue-500/10 px-4 py-1.5 rounded-full border border-blue-500/20 inline-block">
          Portfolio Showcase
        </span>
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-8">
          Selected Works
        </h2>

        {/* Tab Bar */}
        <div className="inline-flex p-1.5 rounded-2xl bg-[#0a0f1d] border border-white/5 backdrop-blur-md">
          <button
            onClick={() => setActiveTab("projects")}
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
            onClick={() => setActiveTab("certificates")}
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
                      <ImageIcon className="w-3 h-3 text-blue-400" /> Lihat Detail
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

                    <p className="text-sm text-neutral-400 line-clamp-3 mb-6 flex-1 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Footer Buttons */}
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                      <button
                        onClick={() => setSelectedProject(item)}
                        className="text-blue-400 hover:text-blue-300 text-sm font-semibold flex items-center gap-1.5 transition-colors group/btn"
                      >
                        Project Overview{" "}
                        <ExternalLink className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                      </button>
                      <a
                        href="#contact"
                        className="px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-semibold flex items-center gap-1.5 transition-colors"
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
                className="px-6 py-2.5 rounded-full bg-[#111c38] hover:bg-blue-900/50 text-blue-300 border border-blue-500/20 text-sm font-bold transition-all hover:shadow-[0_0_15px_rgba(29,78,216,0.3)]"
              >
                {showAllProjects ? "Tampilkan Lebih Sedikit" : "Tampilkan Lainnya (Semua Karya)"}
              </button>
            </div>
          )}
        </>
      ) : (
        /* CERTIFICATES VIEW: Pure visual certificate cards with 'View Certificate' hover overlay */
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
                  onClick={() => setPreviewImage(cert.image)}
                  className="group relative aspect-[1.414/1] rounded-2xl overflow-hidden bg-white border border-white/20 hover:border-blue-400 hover:shadow-[0_0_30px_rgba(37,99,235,0.3)] transition-all duration-300 cursor-pointer flex items-center justify-center shadow-lg"
                >
                  {/* Certificate Image */}
                  <div className="relative w-full h-full flex items-center justify-center p-2 bg-white select-none">
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      loading="lazy"
                      className="object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Hover Overlay with Arrow and 'View Certificate' matching reference image */}
                  <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center select-none z-10">
                    <ArrowUpRight className="w-9 h-9 sm:w-10 sm:h-10 text-white mb-2 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    <span className="text-white font-bold text-base sm:text-lg tracking-wide drop-shadow-md">
                      View Certificate
                    </span>
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
                className="px-6 py-2.5 rounded-full bg-[#111c38] hover:bg-blue-900/50 text-blue-300 border border-blue-500/20 text-sm font-bold transition-all hover:shadow-[0_0_15px_rgba(29,78,216,0.3)]"
              >
                {showAllCertificates
                  ? "Tampilkan Lebih Sedikit"
                  : `Tampilkan Semua Sertifikat (${certificates.length})`}
              </button>
            </div>
          )}
        </>
      )}

      {/* Detailed Project Overview Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
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
                      Tahun: {selectedProject.academicMeta.year}
                    </span>
                  )}
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white flex items-center justify-center transition-colors border border-white/10"
                  aria-label="Tutup"
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
                      <span className="text-xs text-neutral-400 block mb-1">Program & Sifat Proyek</span>
                      <span className="text-sm font-semibold text-white flex items-center gap-2">
                        <BookOpen className="w-4 h-4 text-blue-400" />
                        {selectedProject.academicMeta.type}
                      </span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                      <span className="text-xs text-neutral-400 block mb-1">Institusi / Klien</span>
                      <span className="text-sm font-semibold text-white flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-emerald-400" />
                        {selectedProject.academicMeta.institution}
                      </span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                      <span className="text-xs text-neutral-400 block mb-1">Peran / Capaian</span>
                      <span className="text-sm font-semibold text-white flex items-center gap-2">
                        <Award className="w-4 h-4 text-yellow-400" />
                        {selectedProject.academicMeta.scoreOrAccuracy}
                      </span>
                    </div>
                  </div>
                )}

                {/* Resource Links (GitHub Repo & Google Drive Documentation) if available */}
                {(selectedProject.repoLink || selectedProject.docsLink) && (
                  <div className="flex flex-wrap gap-3 p-4 rounded-2xl bg-blue-500/5 border border-blue-500/20">
                    {selectedProject.repoLink && (
                      <a
                        href={selectedProject.repoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs sm:text-sm font-semibold border border-white/15 transition-all hover:scale-102"
                      >
                        <Code2 className="w-4 h-4 text-blue-400" />
                        Repositori GitHub Tim
                        <ExternalLink className="w-3.5 h-3.5 text-neutral-400" />
                      </a>
                    )}
                    {selectedProject.docsLink && (
                      <a
                        href={selectedProject.docsLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600/30 hover:bg-blue-600/40 text-blue-300 text-xs sm:text-sm font-semibold border border-blue-500/30 transition-all hover:scale-102"
                      >
                        <BookOpen className="w-4 h-4 text-blue-400" />
                        Dokumentasi Lengkap (Google Drive)
                        <ExternalLink className="w-3.5 h-3.5 text-blue-400" />
                      </a>
                    )}
                  </div>
                )}

                {/* Tags */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-3 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-blue-400" /> Teknologi & Kata Kunci
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

                {/* Section: Ringkasan Proyek */}
                <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3">
                  <h4 className="text-base font-bold text-white flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-blue-400" /> Ringkasan & Deskripsi Proyek
                  </h4>
                  <p className="text-sm sm:text-base text-neutral-300 leading-relaxed text-justify">
                    {selectedProject.overview || selectedProject.description}
                  </p>
                </div>

                {/* Section: Metodologi & Alur */}
                {selectedProject.methodology && (
                  <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3">
                    <h4 className="text-base font-bold text-white flex items-center gap-2">
                      <Layers className="w-4 h-4 text-purple-400" /> Metodologi & Tanggung Jawab Peran
                    </h4>
                    <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                      {selectedProject.methodology}
                    </p>
                  </div>
                )}

                {/* Section: Fitur & Kontribusi Utama */}
                {selectedProject.features && (
                  <div>
                    <h4 className="text-base font-bold text-white mb-4 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Deliverables & Kontribusi Teknis Utama
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
                          <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                            {feat}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Section: Galeri Tangkapan Layar & Diagram */}
                {selectedProject.gallery && selectedProject.gallery.length > 0 && (
                  <div>
                    <h4 className="text-base font-bold text-white mb-4 flex items-center gap-2">
                      <ImageIcon className="w-4 h-4 text-blue-400" /> Galeri Tangkapan Layar & Dokumentasi Sistem
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
                            <p className="text-xs text-neutral-300 line-clamp-2 leading-snug">
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
              <div className="sticky bottom-0 z-20 flex items-center justify-between px-6 py-4 bg-[#0c1326]/95 backdrop-blur-md border-t border-white/10">
                <span className="text-xs text-neutral-400">
                  Dikutip dari dokumen akademik resmi Penulis (Universitas Gunadarma)
                </span>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-sm font-semibold transition-colors"
                  >
                    Tutup
                  </button>
                  <a
                    href="#contact"
                    onClick={() => setSelectedProject(null)}
                    className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold transition-colors shadow-[0_0_15px_rgba(37,99,235,0.4)]"
                  >
                    Hubungi Saya
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
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
            {/* Backdrop to close */}
            <div
              className="absolute inset-0"
              onClick={() => setPreviewImage(null)}
            />

            <button
              onClick={() => setPreviewImage(null)}
              className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-20 border border-white/20"
              aria-label="Tutup Pratinjau"
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
    </section>
  );
}

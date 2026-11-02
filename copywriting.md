# Copywriting & Messaging Reference: Zidni Khaerur Rizqia Portfolio (v3, English)

> Master reference document for [Zidni Khaerur Rizqia's Portfolio](https://zidnirizqia-portofolio.vercel.app).
> **Version 3:** Full professional English copywriting across all sections, verified against official academic records (Gunadarma University, Labamen, Thesis, Scientific Writing, and accredited certifications).

---

## 1. Global Metadata & SEO

Configured in `app/layout.tsx` (`<html lang="en">`).

| Parameter | Value |
|---|---|
| **Base URL** | `https://zidnirizqia-portofolio.vercel.app` |
| **Page Title** | `Zidni Khaerur Rizqia \| Informatics Graduate, IT Support & Web Developer` |
| **Meta Description** | `Portfolio of Zidni Khaerur Rizqia, Informatics graduate from Universitas Gunadarma. Hands-on web engineering, computer vision (YOLOv8 & Deep SORT), and IT support & system troubleshooting.` |
| **Target Keywords** | `Zidni Khaerur Rizqia`, `Portfolio`, `Informatics`, `Universitas Gunadarma`, `IT Support`, `System Troubleshooting`, `Networking`, `Cisco`, `Web Developer`, `Computer Vision`, `YOLOv8`, `Deep SORT`, `React`, `Next.js`, `TypeScript`, `Python`, `Jakarta` |
| **Author** | `Zidni Khaerur Rizqia` |
| **OpenGraph Title** | `Zidni Khaerur Rizqia \| Informatics Graduate, IT Support & Web Developer` |
| **OpenGraph Description** | `Portfolio of web engineering, computer vision, and IT support & troubleshooting.` |
| **OpenGraph Image** | `/og-image.png` (1200 x 630 px) |
| **Favicon** | `/profile.png` |

---

## 2. Navigation & DockBar

### 2.1 Logo & Identity
- **Logo Badge:** `ZKR`
- **Brand Title:** `Zidni Khaerur Rizqia`
- **Subtitle:** `Portfolio`

### 2.2 Menu Items
1. `Home` (`#home`)
2. `About` (`#about`)
3. `Experience` (`#experience`)
4. `Projects` (`#projects`)
5. `Education` (`#education`)
6. `Skills` (`#skills`)
7. `Contact` (`#contact`)

### 2.3 Floating macOS DockBar
- Magnification dock located at the bottom of the viewport.
- Tooltips on hover: `Home`, `About`, `Experience`, `Projects`, `Education`, `Skills`, `Contact`.
- **Auto-Hide Behavior:** Automatically disappears when any Project Overview modal or Certificate lightbox is open to ensure unimpeded modal actions.

---

## 3. Hero Section (`#home`)

### 3.1 Greeting & Name
```text
Hi, I'm
Zidni Khaerur Rizqia
```
Name rendered with dynamic Aurora gradient text.

### 3.2 Dynamic Typewriter
Cycles smoothly through key professional roles:
- `Informatics Graduate`
- `Software & Web Developer`
- `Computer Vision Specialist`
- `IT Support & Network Engineer`

### 3.3 Main Bio
> Informatics graduate from Universitas Gunadarma (GPA 3.69 / 4.00). I build modern web applications and computer vision pipelines, grounded by nearly two years of hands-on experience in computer laboratory operations, IT maintenance, and system troubleshooting for ~30 PC workstations.

### 3.4 Call to Actions
- **Primary CTA:** `View Projects →` (smooth scroll to `#projects`)
- **Secondary CTA:** `Contact Me` (smooth scroll to `#contact`)
- **Find Me Badge:** `GitHub`, `LinkedIn`, `Email`, `WhatsApp`

### 3.5 Swinging 3D Lanyard Card
- Realistic rope pendulum swing physics with draggable mouse interactions.
- Badge details:
  - **Name:** `Zidni Khaerur Rizqia`
  - **Title:** `Informatics Graduate · IT Support & Web Development`
  - **Focus Areas:** `IT SUPPORT · WEB DEVELOPMENT · COMPUTER VISION`
  - **Location:** `Jakarta, ID`
  - **Experience:** `Fresh Grad`
  - **Status:** `● Available`

---

## 4. Tech Marquee

Infinite animated horizontal ticker:
> `Python` · `YOLOv8` · `Deep SORT` · `OpenCV` · `Flask` · `JavaScript` · `TypeScript` · `React` · `Next.js` · `Tailwind CSS` · `PHP` · `MySQL` · `cPanel` · `Cisco` · `Troubleshooting` · `Git` · `GitHub`

---

## 5. About Section (`#about`)

- **Section Title:** `About Me`
- **Subtitle:** `Web systems, computer vision, and IT support`
- **Interactive Profile:** Dual-layer portrait featuring an interactive flashlight reveal mask displaying Spider-Man on hover, tracking the cursor dot with mix-blend-difference.
- **Narrative Bio:**
  > I graduated with a Bachelor of Computer Science in Informatics from Universitas Gunadarma in 2026 (GPA 3.69 / 4.00). From September 2024 to July 2026, I worked as a Programmer and IT Support Specialist at the Intermediate Accounting Laboratory (Labamen), maintaining and troubleshooting ~30 lab PCs while leading practical lab sessions for cohorts of ~30 students.
  >
  > My core work includes a food ordering website with a customer loyalty points system for Mie Ayam Mas Jo (PHP, MySQL, Midtrans QRIS, achieving a 92.6% user acceptance rate in UAT across 15 respondents) and an automated vehicle detection, tracking, and counting pipeline using YOLOv8 and Deep SORT (~98% counting accuracy on test footage). I also completed Cisco networking (LAN & WAN) and AWS Cloud foundational training.
- **Actions:**
  - `Download CV (PDF)`
  - `View Projects`

---

## 6. Experience Section (`#experience`)

- **Section Title:** `Experience`
- **Subtitle:** `Hands-on experience in computer laboratory operations, focusing on IT maintenance, hardware/software troubleshooting, and session supervision.`
- **Role:** `Programmer & IT Support Specialist`
- **Organization:** `Intermediate Accounting Laboratory (Labamen), Universitas Gunadarma`
- **Period:** `September 2024 – July 2026`
- **Key Contributions:**
  1. Conducted IT maintenance and hardware/software troubleshooting for ~30 PC workstations in the laboratory, resolving operating system errors, network connectivity glitches, and academic software configurations.
  2. Served as Person-in-Charge (PIC) and Head of Session for practical accounting and programming lab cohorts of ~30 students, supervising active sessions and ensuring zero downtime.
- **Skills Tag:** `IT Maintenance`, `System Troubleshooting`, `Software Deployment`, `Local Networking`, `Lab Supervision`
- **Network & Cloud Certifications Block:**
  - `Local Area Network (LAN) using Cisco Router` (Aug 2024)
  - `Wireless LAN Installation & Configuration` (Jan 2025)
  - `Wide Area Network (WAN) with Cisco Router (Intermediate)` (Aug 2025)
  - `Cloud Computing & Generative AI on AWS` (Oct 2026)

---

## 7. Selected Works (`#projects`)

- **Tabs:** `Projects` & `Certificates`

### Project 1: Automated Vehicle Detection, Tracking & Counting System
- **Category:** `Computer Vision & AI`
- **Summary:** Computer vision pipeline detecting, tracking, and counting 4 vehicle classes (bus, car, motorcycle, truck) segregated by direction of travel. Achieved ~98% counting accuracy across two video datasets and 93.26% mAP@0.5.
- **Academic Context:** Undergraduate Thesis (Skripsi S1), Universitas Gunadarma, 2026. Advisor: Dr. Yulia Chalri, S.Kom., M.M.
- **Stack:** YOLOv8, Deep SORT, Directional Line Crossing, Python, Flask, OpenCV.

### Project 2: Online Food Ordering & Customer Loyalty System
- **Category:** `Full-Stack Web Engineering`
- **Summary:** Full-stack web ordering portal for a local culinary SME featuring customer loyalty reward points, digital QRIS payments via Midtrans Snap, and an administrative sales analytics dashboard. UAT with 15 respondents yielded a 92.6% satisfaction rating (Excellent).
- **Academic Context:** Scientific Writing (Penulisan Ilmiah), Universitas Gunadarma, 2025. Advisor: Sindy Nova, S.Kom., MMSI.
- **Stack:** PHP, MySQL, JavaScript, Bootstrap, Midtrans Snap (QRIS), cPanel, Waterfall SDLC.

### Project 3: Jumantik Larvae Monitoring System & AI Assistant
- **Category:** `Team Software Project (Technical Writer)`
- **Summary:** Web-based dengue larvae surveillance system with GPS geotagging and an integrated public health AI Assistant for Kelurahan Malaka Sari. Served as Technical Writer: authored IEEE-standard SRS, SDD, comprehensive test plans, and bilingual user manuals.
- **Academic Context:** Software Project Management (PPPL), Universitas Gunadarma & Kelurahan Malaka Sari, 2025.
- **Stack:** Software Documentation, SRS & SDD, UML Modeling, React + Vite, AI Chatbot.

### Button:
- `More` / `Show Less`

---

## 8. 3D Coverflow Gallery (`#gallery`)

- **Section Title:** `Gallery`
- True 3D coverflow carousel with physical touch drag, momentum inertia, left/right 25% click navigation, and keyboard arrow keys.
- **Slide Highlights:**
  1. `Automated Vehicle Tracking` — `YOLOv8 + Deep SORT Pipeline`
  2. `Mie Ayam Mas Jo Website` — `Online Ordering & Customer Loyalty System`
  3. `Jumantik Information System` — `GPS Geotagging & Public Health AI`
  4. `Admin & Analytics Dashboard` — `SMB Sales & Inventory Insights`
  5. `Directional Line Crossing` — `Flask Web UI & Real-Time Traffic Counter`
  6. `Software Architecture Map` — `IEEE Technical Documentation (SRS, SDD)`

---

## 9. Academic Background (`#education`)

- **Section Title:** `Academic Background`
- **Subtitle:** `Academic foundations in Informatics, software engineering, and applied computing.`
- **Degree:** `Bachelor of Computer Science (S.Kom.)`
- **Major:** `Informatics Engineering Major`
- **Institution:** `Universitas Gunadarma`
- **Period:** `September 2022 – August 2026`
- **GPA:** `GPA 3.69 / 4.00`
- **Core Competencies:**
  - Full-stack web application engineering
  - Algorithms, data structures & software design
  - Computer vision & digital image processing
  - Applied artificial intelligence & machine learning
  - Relational database design & information systems
  - Software engineering lifecycle, testing & technical writing
  - Computer networking & infrastructure (Cisco LAN/WAN, WLAN)

---

## 10. Expertise & Tech Stack (`#skills`)

- **Section Title:** `Expertise & Tech Stack`
- **Subtitle:** `Tools, technologies, and proven methodologies applied across real-world systems.`
- **Applied Stack & Proof:**
  - `IT Support & Networking`: Troubleshooting, Software Deployment, Windows, Cisco (Labamen & Cisco Certifications)
  - `Web Engineering`: PHP, MySQL, JavaScript, Bootstrap (Mie Ayam Mas Jo)
  - `Cloud & Hosting`: cPanel, AWS Cloud Foundations (Live Deployments & AWS Cert)
  - `Computer Vision & AI`: Python, OpenCV, YOLOv8, Deep SORT, Flask (Vehicle Counting Thesis)
  - `Frontend Architecture`: React, Next.js, TypeScript, Tailwind CSS (This Portfolio Web)
  - `Dev Workflow`: Git, GitHub, Version Control (Project Repositories & Collab)
- **Proven Work Principles:**
  1. `Technical Documentation`: Authored IEEE-standard SRS, SDD, testing protocols, and user manuals for the Jumantik municipal health project.
  2. `System Troubleshooting`: Diagnosed and resolved real-time network drops, software conflicts, and hardware faults across ~30 active lab PCs during live sessions.
  3. `Empirical Validation`: Conducted Black Box testing and 15-respondent UAT for web platforms, paired with 3-way ablation benchmarking for tracking pipelines.

---

## 11. Contact Section (`#contact`)

- **Section Title:** `Let's Connect`
- **Subtitle:** `I am actively seeking internships or full-time opportunities in IT Support, Web Development, or Software Engineering. The fastest way to reach me is via WhatsApp or email.`
- **Direct Contacts:**
  - **Email:** `zidnikhaerurrizqia9@gmail.com`
  - **Location:** `Jakarta, Indonesia`
  - **WhatsApp:** `+62 817-7913-3277`
- **Form Fields:** `Your Name`, `Contact / Email`, `Message`
- **Action:** `Send via WhatsApp`

---

## 12. Footer

- **Callout Headline:** `Looking for an internship or full-time position?`
- **Rotating Titles:** `Informatics Graduate` · `IT Support Specialist` · `Web Developer` · `Software Developer`
- **Button:** `Send a message via WhatsApp`
- **Navigation:** `Home` · `About` · `Experience` · `Projects` · `Education` · `Skills` · `Contact`
- **Copyright:** `© 2026 Zidni Khaerur Rizqia. All rights reserved.`
- **Back to Top:** `Back to top ↑`

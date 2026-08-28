import { HomeIcon, Mail } from "lucide-react";
import { Icons } from "@/components/icons";

export const siteConfig = {
  name: "Saurabh Meena",
  initials: "SM",
  url: "https://srbhxme.site",
  location: "India",
  locationLink: "",
  birthDate: new Date("2006-09-27"),
  description: "software developer",
  summary: `tldr; learnt by building and breaking things on the internet.

Right now I just build stuff!

open to freelance projects and full‑time opportunities.

In my free time, I make tech videos on YouTube.`,
  avatarUrl: "/profile2.jpg",
  skills: [
    "Python",
    "TypeScript",
    "React",
    "Next.js",
    "PostgreSQL",
    "GitHub"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  social: {
    GitHub: {
      name: "GitHub",
      url: "https://github.com/saurabhxmeena",
      icon: Icons.github,
      navbar: true,
    },
    LinkedIn: {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/saurabhxmeena/",
      icon: Icons.linkedin,
      navbar: true,
    },
    X: {
      name: "X",
      url: "https://x.com/saurabhxmeena",
      icon: Icons.x,
      navbar: true,
    },

    Email: {
      name: "Email",
      url: "mailto:saurabh27meena@gmail.com",
      icon: Mail,
      navbar: true,
    },
  },
  education: [
    {
      school: "Maharaja Agrasen Institute of Technology",
      href: "#",
      degree: "B.Tech in Information Technology",
      logoUrl: "/mait-logo.png",
      start: "2023",
      end: "2027",
    },
  ],
  projects: [
    {
      title: "Seekho Dance",
      subtitle: "step-by-step dance tutorials",
      dates: "jan 2026",
      logoUrl: "/seekho-dance.png",
      description: "A dance learning platform featuring mirror mode, speed controls, and practice loops.",
      summary: [
        "Interactive dance learning platform featuring video mirror mode, variable speed controls, and practice loops.",
        "Eliminates confusion and constant rewinding when learning fast-paced choreography from standard tutorials.",
        "Built using Next.js, React, TypeScript, Tailwind CSS, and Framer Motion.",
      ],
      links: [
        { type: "GitHub", href: "https://github.com/saurabhxmeena/Seekho-Dance" },
        { type: "Live site", href: "https://seekhodance.vercel.app/" },
      ],
    },
    {
      title: "DevFolio",
      subtitle: "portfolio builder for developers",
      dates: "jan 2026",
      logoUrl: "/project-2-v2.svg",
      description: "A drag-and-drop portfolio builder that generates clean, responsive developer portfolios.",
      summary: [
        "Drag-and-drop portfolio builder that helps developers create modern, mobile-responsive personal websites.",
        "Saves weeks of design and setup time so developers can focus on showcasing their actual work.",
        "Built using React, TypeScript, Next.js, Tailwind CSS, and DnD Kit.",
      ],
      links: [
        { type: "GitHub", href: "#" },
        { type: "Live site", href: "#" },
      ],
    },
    {
      title: "CodeSnap",
      subtitle: "beautiful code screenshots",
      dates: "aug 2025",
      logoUrl: "/project-3.svg",
      description: "Create beautiful, shareable code screenshots with syntax highlighting and custom themes.",
      summary: [
        "Code screenshot generator that exports high-resolution snippet images with custom themes and syntax highlighting.",
        "Replaces plain IDE screenshots with aesthetic, high-contrast images optimized for social media.",
        "Built using TypeScript, Next.js, PrismJS, Tailwind CSS, and HTML-to-Image.",
      ],
      links: [
        { type: "GitHub", href: "#" },
        { type: "Live site", href: "#" },
      ],
    },
    {
      title: "ChatBridge",
      subtitle: "real-time messaging app",
      dates: "may 2025",
      logoUrl: "/project-4.svg",
      description: "A real-time chat application built with WebSockets, supporting group chats and file sharing.",
      summary: [
        "Real-time chat application with 1-on-1 direct messaging, group channels, online presence, and file sharing.",
        "Eliminates message lag using persistent WebSocket connections for instant bi-directional updates.",
        "Built using React, Node.js, WebSockets, PostgreSQL, and Tailwind CSS.",
      ],
      links: [
        { type: "GitHub", href: "#" },
        { type: "Live site", href: "#" },
      ],
    },
    {
      title: "TrackIt",
      subtitle: "habit and productivity tracker",
      dates: "feb 2025",
      logoUrl: "/project-5.svg",
      description: "A personal habit tracker with streaks, analytics, and weekly reports to stay productive.",
      summary: [
        "Personal habit and productivity tracker with daily streaks, visual analytics charts, and weekly reviews.",
        "Builds daily consistency and accountability by turning personal routines into clear progress metrics.",
        "Built using React, Next.js, TypeScript, Recharts, and LocalStorage.",
      ],
      links: [
        { type: "GitHub", href: "#" },
        { type: "Live site", href: "#" },
      ],
    },
  ],
  status: {
    tagline: "building things, learning every day, and looking for my next opportunity.",
    items: [
      { text: "final year IT student at Maharaja Agrasen Institute of Technology." },
      { text: "learning system design, databases, and backend architecture." },
      { text: "open to freelance projects and interesting work opportunities." }
    ],
  },
};

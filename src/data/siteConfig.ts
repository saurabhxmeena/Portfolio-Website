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

open to freelance projects and interesting work opportunities.

Right now I just build stuff!

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
      title: "QuickNote",
      subtitle: "a fast, minimal note-taking app",
      dates: "jan 2026",
      logoUrl: "/project-1.svg",
      description: "A lightweight note-taking web app with markdown support, auto-save, and cloud sync.",
      links: [
        { type: "GitHub", href: "#" },
        { type: "Live site", href: "#" },
      ],
    },
    {
      title: "DevFolio",
      subtitle: "portfolio builder for developers",
      dates: "jan 2026",
      logoUrl: "/project-2-v2.svg",
      description: "A drag-and-drop portfolio builder that generates clean, responsive developer portfolios.",
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

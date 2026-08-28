"use client";

import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
import { ChevronRightIcon } from "lucide-react";
import { motion } from "framer-motion";
import React from "react";

interface ProjectCardProps {
  project: (typeof siteConfig.projects)[0];
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <div
      role="button"
      tabIndex={0}
      aria-expanded={isExpanded}
      onClick={() => setIsExpanded(!isExpanded)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setIsExpanded(!isExpanded);
        }
      }}
      className="flex items-start gap-3 py-4 border-b border-border/50 last:border-0 last:pb-0 cursor-pointer group select-none outline-none focus-visible:ring-1 focus-visible:ring-ring rounded-lg px-1 -mx-1 transition-colors hover:bg-muted/20"
    >
      {/* Logo */}
      {project.logoUrl && (
        <div className="relative size-10 shrink-0 rounded-full overflow-hidden border border-border/40 bg-muted/40 mt-0.5">
          <Image
            src={project.logoUrl}
            alt={project.title}
            fill
            className="object-contain"
          />
        </div>
      )}

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between gap-x-2">
          <h3 className="inline-flex items-center gap-1.5 text-sm font-semibold leading-none group-hover:text-foreground">
            <span>{project.title}</span>
            <ChevronRightIcon
              className={`size-3.5 text-muted-foreground/70 transition-transform duration-200 ease-out group-hover:text-foreground ${
                isExpanded ? "rotate-90 text-foreground" : "rotate-0"
              }`}
            />
          </h3>
          <span className="text-xs text-muted-foreground shrink-0 tabular-nums">
            {project.dates}
          </span>
        </div>
        {project.subtitle && (
          <p className="text-xs text-foreground/80 mt-1">{project.subtitle}</p>
        )}

        {/* Expandable content */}
        <motion.div
          initial={false}
          animate={{
            opacity: isExpanded ? 1 : 0,
            height: isExpanded ? "auto" : 0,
          }}
          transition={{
            duration: 0.25,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="overflow-hidden"
        >
          {Array.isArray(project.summary) && project.summary.length > 0 ? (
            <ul className="mt-3 space-y-1.5 text-xs text-foreground/90 list-disc list-outside pl-4 leading-relaxed marker:text-foreground/60">
              {project.summary.map((point, idx) => (
                <li key={idx} className="pl-0.5">
                  {point}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-xs text-foreground/90 mt-2 leading-relaxed">
              {project.description}
            </p>
          )}

          {/* Links */}
          {project.links && project.links.length > 0 && (
            <div className="flex items-center gap-2.5 pt-3 pb-1">
              {project.links.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="text-xs font-medium inline-flex items-center gap-1 bg-muted/60 text-muted-foreground hover:text-foreground hover:bg-muted border border-border/50 px-2.5 py-1 rounded-md transition-colors"
                >
                  {link.type}
                  <span className="text-[10px]">↗</span>
                </Link>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}


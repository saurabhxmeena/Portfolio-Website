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
      className="flex items-start gap-3 py-4 border-b border-border/50 last:border-0 last:pb-0 cursor-pointer group"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      {/* Logo */}
      {project.logoUrl && (
        <div className="relative size-10 shrink-0 rounded-full overflow-hidden">
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
          <h3 className="inline-flex items-center gap-1 text-sm font-semibold leading-none">
            {project.title}
            <ChevronRightIcon
              className={`size-4 transition-all duration-300 ease-out ${
                isExpanded 
                  ? "rotate-90 translate-x-1 opacity-100" 
                  : "rotate-0 translate-x-0 opacity-0 group-hover:translate-x-1 group-hover:opacity-100"
              }`}
            />
          </h3>
          <span className="text-xs text-muted-foreground shrink-0 tabular-nums">
            {project.dates}
          </span>
        </div>
        {project.subtitle && (
          <p className="text-xs text-foreground/90 mt-0.5">{project.subtitle}</p>
        )}

        {/* Expandable content */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isExpanded ? 1 : 0,
            height: isExpanded ? "auto" : 0,
          }}
          transition={{
            duration: 0.4,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="overflow-hidden"
        >
          <p className="text-sm text-muted-foreground mt-2">{project.description}</p>
          {project.links && project.links.length > 0 && (
            <div className="flex items-center gap-3 pt-2">
              {project.links.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="text-xs font-medium flex items-center gap-1 bg-muted/50 text-muted-foreground hover:text-foreground hover:bg-muted px-2.5 py-1 rounded-md transition-colors"
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

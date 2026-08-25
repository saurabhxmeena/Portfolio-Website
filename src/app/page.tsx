import { siteConfig } from "@/data/siteConfig";
import { RealTimeAge } from "@/components/RealTimeAge";
import { BlurFade } from "@/components/BlurFade";
import { ProjectCard } from "@/components/ProjectCard";
import Image from "next/image";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="flex flex-col space-y-8 sm:space-y-12">
      {/* Hero */}
      <section id="hero">
        <div className="flex justify-between items-start gap-4">
          <div className="flex flex-col space-y-1.5 flex-1">
            <BlurFade delay={BLUR_FADE_DELAY}>
              <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">
                hi, {siteConfig.name.split(" ")[0].toLowerCase()} here
              </h1>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 2}>
              <div className="max-w-[600px] text-base text-muted-foreground">
                <span className="block sm:inline">been here for </span>
                <span className="block sm:inline"><RealTimeAge birthDate={siteConfig.birthDate} /> years</span>
              </div>
            </BlurFade>
          </div>
          <BlurFade delay={BLUR_FADE_DELAY}>
            <div className="relative size-24 sm:size-28 shrink-0 rounded-full border border-border/50 overflow-hidden bg-muted">
              <Image
                src={siteConfig.avatarUrl}
                alt={siteConfig.name}
                fill
                className="object-cover"
              />
            </div>
          </BlurFade>
        </div>
      </section>

      {/* About */}
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold mb-0">about</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <div className="flex flex-col space-y-4 text-sm text-muted-foreground leading-relaxed">
            {siteConfig.summary.split('\n\n').map((paragraph, idx) => {
              if (paragraph.includes("YouTube")) {
                const parts = paragraph.split("YouTube");
                return (
                  <p key={idx}>
                    {parts[0]}
                    <a href="https://www.youtube.com/@saurabhxmeena" target="_blank" rel="noopener noreferrer" className="text-foreground hover:underline underline-offset-4">YouTube</a>
                    {parts[1]}
                  </p>
                );
              }
              return <p key={idx}>{paragraph}</p>;
            })}
          </div>
        </BlurFade>
      </section>

      {/* Projects */}
      <section id="projects">
        <BlurFade delay={BLUR_FADE_DELAY * 5}>
          <h2 className="text-xl font-bold mb-0">cool projects I made</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 6}>
          <div className="flex flex-col">
            {siteConfig.projects.map((project, idx) => (
              <ProjectCard key={idx} project={project} />
            ))}
          </div>
        </BlurFade>
      </section>

      {/* Education */}
      <section id="education">
        <BlurFade delay={BLUR_FADE_DELAY * 7}>
          <h2 className="text-xl font-bold mb-4">education</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 8}>
          <div className="flex flex-col space-y-4">
            {siteConfig.education.map((edu, idx) => (
              <div key={idx} className="flex items-start gap-3">
                {edu.logoUrl && (
                  <div className="relative size-10 shrink-0 rounded-full border border-border/50 overflow-hidden bg-white">
                    <Image
                      src={edu.logoUrl}
                      alt={edu.school}
                      fill
                      className="object-contain p-1"
                    />
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-semibold">{edu.school}</h3>
                    <span className="text-xs text-muted-foreground shrink-0 ml-2">
                      {edu.start} – {edu.end}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">{edu.degree}</p>
                </div>
              </div>
            ))}
          </div>
        </BlurFade>
      </section>

      {/* Skills */}
      <section id="skills">
        <BlurFade delay={BLUR_FADE_DELAY * 9}>
          <h2 className="text-xl font-bold mb-4">skills</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 10}>
          <div className="flex flex-wrap gap-2">
            {siteConfig.skills.map((skill, idx) => (
              <span
                key={idx}
                className="inline-flex items-center rounded-md bg-foreground px-2.5 py-1 text-xs font-semibold text-background transition-colors hover:bg-foreground/90"
              >
                {skill}
              </span>
            ))}
          </div>
        </BlurFade>
      </section>

      {/* Contact Me */}
      <section id="contact" className="flex flex-col items-center text-center">
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <h2 className="text-xl font-bold mb-1">contact me</h2>
          <p className="text-sm text-muted-foreground mb-6">feel free to reach out anytime</p>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 12}>
          <a
            href={`mailto:${siteConfig.social.Email.url.replace('mailto:', '')}`}
            className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-muted/30 px-6 py-3 text-sm font-medium text-foreground hover:bg-muted transition-colors"
          >
            {siteConfig.social.Email.url.replace('mailto:', '')}
          </a>
        </BlurFade>
      </section>
    </main>
  );
}

import { useState } from "react";
import { Project } from "@/data/projects";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Smartphone, RefreshCw } from "lucide-react";
import { motion } from "framer-motion";

function getScreenshotUrl(url: string) {
  return `https://s0.wordpress.com/mshots/v1/${encodeURIComponent(url)}?w=1200&h=800`;
}

function WebsitePreview({ project }: { project: Project }) {
  const [status, setStatus] = useState<"loading" | "loaded" | "error">("loading");
  const src = getScreenshotUrl(project.url);

  return (
    <>
      {status === "loading" && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted">
          <div className="flex flex-col items-center gap-2">
            <div className="w-6 h-6 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
            <span className="text-xs text-muted-foreground">Loading preview…</span>
          </div>
        </div>
      )}
      {status === "error" && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-muted gap-3 p-4 text-center">
          <RefreshCw className="h-7 w-7 text-muted-foreground/50" />
          <span className="text-xs text-muted-foreground">Preview unavailable</span>
          <span className="text-xs text-muted-foreground/50 font-mono">
            {new URL(project.url).hostname.replace("www.", "")}
          </span>
        </div>
      )}
      <img
        src={src}
        alt={`${project.client} website preview`}
        className={`absolute inset-0 w-full h-full object-cover object-top transition-all duration-500 group-hover:scale-105 ${
          status === "loaded" ? "opacity-100" : "opacity-0"
        }`}
        onLoad={() => setStatus("loaded")}
        onError={() => setStatus("error")}
        loading="lazy"
      />
    </>
  );
}

function AppPreview({ project }: { project: Project }) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-[#0d1f3c] via-[#112244] to-[#0a3060] gap-4 p-6 overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-cyan-400/10 rounded-full translate-y-1/2 -translate-x-1/2" />
      <div className="relative z-10 bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/10">
        <Smartphone className="h-10 w-10 text-cyan-400" />
      </div>
      <div className="relative z-10 text-center">
        <p className="text-white font-semibold text-base leading-tight">{project.client}</p>
        <p className="text-white/50 text-xs mt-1">Mobile Application</p>
      </div>
    </div>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  const isApp = project.noPreview || project.category === "app";
  const hasUrl = project.url && project.url !== "#";

  const categoryAccents: Record<string, string> = {
    website: "text-cyan-700 bg-cyan-50",
    app: "text-emerald-700 bg-emerald-50",
    software: "text-violet-700 bg-violet-50",
  };
  const accent = categoryAccents[project.category] || categoryAccents.website;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Card className="overflow-hidden h-full flex flex-col hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card border-border/50">
        <div className="relative h-44 sm:h-52 w-full overflow-hidden bg-muted group">
          {isApp ? <AppPreview project={project} /> : <WebsitePreview project={project} />}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300 pointer-events-none" />
        </div>

        <CardContent className="p-6 flex flex-col flex-1">
          <div className="flex justify-between items-start mb-3 gap-3">
            <h3 className="font-semibold text-lg leading-snug line-clamp-2">{project.client}</h3>
            <span className={`text-xs font-semibold uppercase tracking-wider px-2 py-1 rounded shrink-0 ${accent}`}>
              {project.category}
            </span>
          </div>
          <p className="text-muted-foreground text-sm mb-5 flex-1 leading-relaxed">{project.description}</p>
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.tags.map((tag) => (
              <span key={tag} className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-md">
                {tag}
              </span>
            ))}
          </div>
          {hasUrl ? (
            <Button variant="outline" className="w-full mt-auto group/btn hover:border-secondary hover:text-secondary transition-colors" asChild>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                View Live Site
                <ExternalLink className="ml-2 h-4 w-4 group-hover/btn:text-secondary transition-colors" />
              </a>
            </Button>
          ) : (
            <Button variant="outline" className="w-full mt-auto opacity-60 cursor-default" disabled>
              <Smartphone className="mr-2 h-4 w-4" />
              Coming to App Stores
            </Button>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}

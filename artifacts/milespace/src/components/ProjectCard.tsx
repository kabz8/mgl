import { Project } from "@/data/projects";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Smartphone } from "lucide-react";
import { motion } from "framer-motion";

const categoryGradients: Record<string, string> = {
  website: "from-[#0d1f3c] via-[#112244] to-[#0a3060]",
  app: "from-[#0a2a3a] via-[#0d3d52] to-[#0a2535]",
  software: "from-[#1a1a2e] via-[#16213e] to-[#0f3460]",
};

const categoryAccents: Record<string, string> = {
  website: "bg-cyan-400/20 text-cyan-300",
  app: "bg-emerald-400/20 text-emerald-300",
  software: "bg-violet-400/20 text-violet-300",
};

function ProjectPreview({ project }: { project: Project }) {
  const isApp = project.noPreview || project.category === "app";
  const gradient = categoryGradients[project.category] || categoryGradients.website;
  const domain = project.url && project.url !== "#"
    ? new URL(project.url).hostname.replace("www.", "")
    : null;

  return (
    <div className={`absolute inset-0 bg-gradient-to-br ${gradient} flex flex-col items-center justify-center gap-4 p-6 overflow-hidden`}>
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-cyan-400/10 rounded-full translate-y-1/2 -translate-x-1/2" />

      {isApp ? (
        <>
          <div className="relative z-10 bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/10">
            <Smartphone className="h-10 w-10 text-cyan-400" />
          </div>
          <div className="relative z-10 text-center">
            <p className="text-white font-semibold text-base leading-tight">{project.client}</p>
            <p className="text-white/50 text-xs mt-1">Mobile Application</p>
          </div>
        </>
      ) : (
        <>
          {domain && (
            <img
              src={`https://www.google.com/s2/favicons?sz=64&domain=${domain}`}
              alt=""
              className="relative z-10 w-14 h-14 rounded-xl bg-white/10 p-2 border border-white/10"
              onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
            />
          )}
          <div className="relative z-10 text-center px-2">
            <p className="text-white font-semibold text-lg leading-tight">{project.client}</p>
            {domain && (
              <p className="text-white/40 text-xs mt-1.5 font-mono">{domain}</p>
            )}
          </div>
          <div className="relative z-10 flex gap-1.5 flex-wrap justify-center">
            {project.tags.slice(0, 2).map(tag => (
              <span key={tag} className="text-xs text-white/60 bg-white/10 px-2 py-0.5 rounded-full border border-white/10">
                {tag}
              </span>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  const hasUrl = project.url && project.url !== "#";
  const accentClass = categoryAccents[project.category] || categoryAccents.website;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Card className="overflow-hidden h-full flex flex-col hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card border-border/50">
        <div className="relative h-44 sm:h-52 w-full overflow-hidden group">
          <ProjectPreview project={project} />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 pointer-events-none" />
        </div>

        <CardContent className="p-6 flex flex-col flex-1">
          <div className="flex justify-between items-start mb-3 gap-3">
            <h3 className="font-semibold text-lg leading-snug line-clamp-2">{project.client}</h3>
            <span className={`text-xs font-semibold uppercase tracking-wider px-2 py-1 rounded shrink-0 ${accentClass}`}>
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

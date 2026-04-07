import { useState } from "react";
import { Project } from "@/data/projects";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

export function ProjectCard({ project }: { project: Project }) {
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [iframeError, setIframeError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Card className="overflow-hidden h-full flex flex-col hover:shadow-lg transition-shadow bg-card border-border/50">
        <div className="relative h-48 sm:h-64 w-full bg-muted overflow-hidden border-b border-border/50 group">
          {!iframeLoaded && !iframeError && (
            <Skeleton className="absolute inset-0 z-10" />
          )}
          {iframeError ? (
            <div className="absolute inset-0 flex items-center justify-center bg-muted flex-col gap-2 p-4 text-center">
              <span className="text-muted-foreground text-sm font-medium">Preview unavailable</span>
              <span className="text-muted-foreground/70 text-xs truncate max-w-full">{project.url}</span>
            </div>
          ) : (
            <div className="w-[1440px] h-[900px] origin-top-left scale-[0.25] sm:scale-[0.35] lg:scale-[0.25] xl:scale-[0.28] group-hover:scale-[0.26] sm:group-hover:scale-[0.36] lg:group-hover:scale-[0.26] xl:group-hover:scale-[0.29] transition-transform duration-500 ease-out">
              <iframe
                src={project.url}
                sandbox="allow-scripts allow-same-origin"
                className="w-full h-full border-none bg-white"
                style={{ pointerEvents: 'none' }}
                onLoad={() => setIframeLoaded(true)}
                onError={() => setIframeError(true)}
                title={`Preview of ${project.client}`}
              />
            </div>
          )}
          <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-300 z-20 pointer-events-none" />
        </div>
        
        <CardContent className="p-6 flex flex-col flex-1">
          <div className="flex justify-between items-start mb-2 gap-4">
            <h3 className="font-bold text-xl line-clamp-1">{project.client}</h3>
            <span className="text-xs font-semibold uppercase tracking-wider text-secondary bg-secondary/10 px-2 py-1 rounded">
              {project.category}
            </span>
          </div>
          <p className="text-muted-foreground text-sm mb-6 flex-1">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span key={tag} className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-md">
                {tag}
              </span>
            ))}
          </div>
          <Button variant="outline" className="w-full mt-auto group" asChild>
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              View Live
              <ExternalLink className="ml-2 h-4 w-4 group-hover:text-secondary transition-colors" />
            </a>
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}

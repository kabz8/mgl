import { useState } from "react";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export default function Portfolio() {
  const [filter, setFilter] = useState<'all' | 'website' | 'app' | 'software'>('all');

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="flex flex-col w-full pb-24 bg-background min-h-screen">
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Our <span className="text-secondary">Work</span>
          </h1>
          <p className="text-xl text-primary-foreground/80 font-light">
            A showcase of digital products we've crafted for ambitious brands. We let our results speak for themselves.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-8 py-16">
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <Button 
            variant={filter === 'all' ? 'default' : 'outline'} 
            onClick={() => setFilter('all')}
            className={filter === 'all' ? 'bg-primary text-primary-foreground' : ''}
          >
            All Projects
          </Button>
          <Button 
            variant={filter === 'website' ? 'default' : 'outline'} 
            onClick={() => setFilter('website')}
            className={filter === 'website' ? 'bg-primary text-primary-foreground' : ''}
          >
            Websites
          </Button>
          <Button 
            variant={filter === 'app' ? 'default' : 'outline'} 
            onClick={() => setFilter('app')}
            className={filter === 'app' ? 'bg-primary text-primary-foreground' : ''}
          >
            Apps
          </Button>
          <Button 
            variant={filter === 'software' ? 'default' : 'outline'} 
            onClick={() => setFilter('software')}
            className={filter === 'software' ? 'bg-primary text-primary-foreground' : ''}
          >
            Custom Software
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <h3 className="text-2xl font-bold text-muted-foreground">No projects found in this category.</h3>
          </div>
        )}
      </section>
    </div>
  );
}

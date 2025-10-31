import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const Projects = () => {
  const projects: Array<{
    title: string;
    description: string;
    technologies: string[];
    featured: boolean;
    github?: string;
  }> = [
    
    {
      title: "Inspira Enterprise Migration",
      description: "Migrated Oracle CX Sales from Classic to Redwood Experience using VBCS, improving user experience by 35%.",
      technologies: ["VBCS", "Redwood", "OIC", "Oracle Fusion"],
      featured: true,
    },
    {
      title: "HDFC Credila Integration",
      description: "Secure REST and SOAP integrations between Oracle Cloud ERP systems with encryption workflows.",
      technologies: ["OIC", "REST", "SOAP", "Oracle ERP"],
      featured: false,
    },
    {
      title: "INSEAD Supplier Dashboard",
      description: "Dynamic real-time supplier data dashboard with automated validation using VBCS and Redwood.",
      technologies: ["VBCS", "Redwood", "Oracle Fusion", "REST APIs"],
      featured: false,
    },
    {
      title: "Yes Bank Migration Revamp",
      description: "Led site creation, content modeling, and integration using Oracle Content Management (OCM). Developed dynamic components with HTML, CSS, JavaScript, jQuery, Knockout.js, and Mustache.js for yesbank.in.",
      technologies: ["Oracle OCM", "JavaScript", "jQuery", "Knockout.js", "HTML/CSS"],
      featured: true,
    },
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/5 w-88 h-88 bg-primary/12 rounded-full blur-3xl animate-orbital-large"></div>
        <div className="absolute bottom-1/3 right-1/5 w-88 h-88 bg-secondary/12 rounded-full blur-3xl animate-orbital" style={{ animationDelay: "12s" }}></div>
        <div className="absolute top-2/3 right-1/3 w-64 h-64 bg-secondary/8 rounded-full blur-3xl animate-orbital-reverse" style={{ animationDelay: "6s" }}></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gradient-primary">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => {
            const { ref, isVisible } = useScrollAnimation();
            return (
              <motion.div
                key={index}
                ref={ref}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`glass-card p-6 rounded-2xl hover-glow-primary transition-all perspective-card ${
                  project.featured ? "md:col-span-2" : ""
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <h3 className="text-2xl font-bold">{project.title}</h3>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg hover:bg-primary/10 transition-colors"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                  </div>

                  <p className="text-foreground/70">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary/10 rounded-full text-sm text-primary border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.github && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        View Code
                      </a>
                    </Button>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;

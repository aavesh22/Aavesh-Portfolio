import { Code2, Database, Cloud, Wrench } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: Code2,
      color: "primary",
      skills: ["Angular", "TypeScript", "JavaScript", "HTML/CSS", "jQuery", "Knockout.js", "VBCS", "Redwood"],
    },
    {
      title: "Backend",
      icon: Database,
      color: "secondary",
      skills: ["Java", "Spring Boot", "Spring MVC", "Hibernate", "REST APIs", "SOAP APIs", "MySQL"],
    },
    {
      title: "Cloud & Integration",
      icon: Cloud,
      color: "primary",
      skills: ["Oracle Integration Cloud (OIC)", "Oracle Fusion", "Oracle Content Management (OCM)", "Data Transformation"],
    },
    {
      title: "Tools & Others",
      icon: Wrench,
      color: "secondary",
      skills: ["Git", "GitHub", "Spring Security", "Workflow Automation", "UI/UX Enhancement"],
    },
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-secondary/15 rounded-full blur-3xl animate-orbital-reverse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-primary/15 rounded-full blur-3xl animate-orbital" style={{ animationDelay: "10s" }}></div>
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-primary/8 rounded-full blur-3xl animate-orbital-large" style={{ animationDelay: "5s" }}></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gradient-primary">
          Technical Skills
        </h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            const { ref, isVisible } = useScrollAnimation();
            return (
              <motion.div
                key={category.title}
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`glass-card p-6 rounded-2xl hover-glow-${category.color} transition-all hover:scale-105 perspective-card`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 rounded-lg bg-${category.color}/10`}>
                    <Icon className={`w-6 h-6 text-${category.color}`} />
                  </div>
                  <h3 className="text-2xl font-bold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-card rounded-full text-sm border border-border/50 hover:border-primary/50 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;

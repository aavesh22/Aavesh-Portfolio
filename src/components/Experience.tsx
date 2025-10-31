import { Briefcase, Calendar, MapPin, ChevronRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const Experience = () => {
  const experiences = [
    {
      company: "Clover Infotech",
      role: "Software Engineer",
      period: "MAY 2023 - PRESENT",
      location: "Mumbai",
      projects: [
        {
          name: "Inspira Enterprise – Migration Project",
          description: "Migrated Oracle CX Sales from Classic to Redwood Experience using VBCS, delivering a modernized UI and enhanced workflows. Customized pages for web and mobile, improving user experience by 35%.",
        },
        {
          name: "HDFC Credila Financial Ltd",
          description: "Developed REST and SOAP integrations using OIC for secure data exchange between Oracle Cloud ERP systems. Implemented encryption workflows and data transformation.",
        },
        {
          name: "INSEAD – Know Your Supplier",
          description: "Developed dynamic dashboard in VBCS and Redwood to display real-time supplier data from Oracle Fusion with automated data validation.",
        },
        {
          name: "Employee Management System",
          description: "Built full-stack system with Angular, Spring Boot, and MySQL. Implemented secure authentication, CRUD operations, and Excel file uploads.",
        },
        {
          name: "Yes Bank Migration Revamp",
          description: "Led site creation, content modeling, and component development using Oracle Content Management (OCM) for yesbank.in.",
        },
      ],
    },
    {
      company: "Clover Infotech",
      role: "Trainee",
      period: "MAY 2022 - APRIL 2023",
      location: "Mumbai",
      projects: [
        {
          name: "Master Application & Product Management",
          description: "Developed Servlets & JSP modules and contributed to Spring MVC-based product management system.",
        },
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/5 left-1/5 w-80 h-80 bg-primary/12 rounded-full blur-3xl animate-orbital"></div>
        <div className="absolute bottom-1/5 right-1/5 w-80 h-80 bg-secondary/12 rounded-full blur-3xl animate-orbital-large" style={{ animationDelay: "15s" }}></div>
        <div className="absolute top-3/4 left-1/3 w-56 h-56 bg-primary/6 rounded-full blur-3xl animate-orbital-reverse" style={{ animationDelay: "8s" }}></div>
      </div>
      {/* Timeline Line */}
      <div className="absolute left-1/2 w-px bg-gradient-to-b from-primary via-secondary to-primary/20 hidden lg:block transform -translate-x-1/2" style={{top: '160px', height: 'calc(100% - 320px)'}} />
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient-primary">
          Work Experience
        </h2>

        <div className="max-w-6xl mx-auto space-y-12">
          {experiences.map((exp, index) => {
            const { ref, isVisible } = useScrollAnimation();
            const isLeft = index % 2 === 0;
            
            return (
              <motion.div
                key={index}
                ref={ref}
                initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
                animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: isLeft ? -100 : 100 }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                className={`relative ${isLeft ? 'lg:pr-[50%]' : 'lg:pl-[50%]'}`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 top-8 -translate-x-1/2 w-6 h-6 rounded-full bg-primary border-4 border-background shadow-glow-primary hidden lg:block z-10" />
                
                <div className="glass-card p-6 md:p-8 rounded-2xl hover-glow-primary transition-all perspective-card group">
                  {/* Header */}
                  <div className="flex flex-col gap-4 mb-6 pb-6 border-b border-primary/20">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                            <Briefcase className="w-5 h-5 text-primary" />
                          </div>
                          <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                            {exp.company}
                          </h3>
                        </div>
                        <p className="text-xl font-semibold text-foreground/90 ml-[52px]">{exp.role}</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-4 ml-[52px]">
                      <div className="flex items-center gap-2 text-foreground/70">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium">{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2 text-foreground/70">
                        <MapPin className="w-4 h-4 text-secondary" />
                        <span className="text-sm font-medium">{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Projects */}
                  <div className="space-y-6">
                    <h4 className="text-lg font-semibold text-foreground/80 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                      Key Projects & Contributions
                    </h4>
                    {exp.projects.map((project, projectIndex) => (
                      <motion.div
                        key={projectIndex}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.5, delay: index * 0.2 + projectIndex * 0.1 }}
                        className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-primary/50 group/project hover:before:bg-primary transition-all"
                      >
                        <div className="flex items-start gap-2">
                          <ChevronRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0 group-hover/project:translate-x-1 transition-transform" />
                          <div>
                            <h5 className="font-bold text-lg mb-2 text-secondary group-hover/project:text-primary transition-colors">
                              {project.name}
                            </h5>
                            <p className="text-foreground/70 leading-relaxed">
                              {project.description}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;

import { GraduationCap } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const Education = () => {
  const education = [
    {
      degree: "M.Sc. in Information Technology",
      institution: "Arunodaya University",
      year: "2025",
    },
    {
      degree: "BSC in Information Technology",
      institution: "SICES Degree College of Arts, Science & Commerce",
      year: "2022",
    },
    {
      degree: "Diploma in Computer Engineering",
      institution: "S.H Jondhale Polytechnic",
      year: "2020",
    },
    {
      degree: "High School",
      institution: "K.V.K Ghatkopar Sarvajanik School",
      year: "2016",
    },
  ];

  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-72 h-72 bg-primary/15 rounded-full blur-3xl animate-orbital"></div>
        <div className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-secondary/15 rounded-full blur-3xl animate-orbital-reverse" style={{ animationDelay: "14s" }}></div>
        <div className="absolute top-3/4 left-1/5 w-52 h-52 bg-primary/8 rounded-full blur-3xl animate-orbital-large" style={{ animationDelay: "7s" }}></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gradient-primary">
          Education
        </h2>

        <div className="max-w-3xl mx-auto space-y-6">
          {education.map((edu, index) => {
            const { ref, isVisible } = useScrollAnimation();
            return (
              <motion.div
                key={index}
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card p-6 rounded-2xl hover-glow-primary transition-all perspective-card"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 flex-shrink-0">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-xl font-bold">{edu.degree}</h3>
                      <span className="text-sm text-foreground/60">{edu.year}</span>
                    </div>
                    <p className="text-foreground/80">{edu.institution}</p>
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

export default Education;

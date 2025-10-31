import { Award } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const Certifications = () => {
  const certifications = [
    {
      title: "Oracle Cloud Infrastructure 2025 Certified Application Integration Professional",
      issuer: "Oracle",
      category: "Cloud",
    },
    {
      title: "Oracle Cloud Infrastructure 2025 Generative AI Professional",
      issuer: "Oracle",
      category: "AI",
    },
    {
      title: "Oracle Content Management Professional",
      issuer: "Oracle",
      category: "Cloud",
    },
    {
      title: "Oracle Redwood Application 2025 Developer Associate",
      issuer: "Oracle",
      category: "Cloud",
    },
    {
      title: "Oracle Cloud Infrastructure 2025 AI Foundations Associate",
      issuer: "Oracle",
      category: "AI",
    },
    {
      title: "Oracle Foundation Associate",
      issuer: "Oracle",
      category: "Cloud",
    },
    
    {
      title: "Angular - The Complete Guide (2024 Edition)",
      issuer: "Udemy",
      category: "Frontend",
    },
    {
      title: "Generative AI Productivity Skills",
      issuer: "Microsoft & LinkedIn",
      category: "AI",
    },
  ];

  return (
    <section className="py-20 relative">
      {/* Animated background orbs for this section */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/15 rounded-full blur-3xl animate-orbital"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/15 rounded-full blur-3xl animate-orbital-reverse" style={{ animationDelay: "7s" }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-primary/8 rounded-full blur-3xl animate-orbital-large" style={{ animationDelay: "4s" }}></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gradient-secondary">
          Certifications
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certifications.map((cert, index) => {
            const { ref, isVisible } = useScrollAnimation();
            return (
              <motion.div
                key={index}
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card p-6 rounded-2xl hover-glow-secondary transition-all perspective-card"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-secondary/10 flex-shrink-0">
                    <Award className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">{cert.title}</h3>
                    <p className="text-sm text-foreground/60">{cert.issuer}</p>
                    <span className="inline-block mt-2 px-3 py-1 bg-secondary/10 rounded-full text-xs text-secondary">
                      {cert.category}
                    </span>
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

export default Certifications;

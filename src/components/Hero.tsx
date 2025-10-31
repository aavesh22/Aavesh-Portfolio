import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Oracle Integration & Full Stack Engineer";
  
  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 50);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-orbital"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-orbital-reverse" style={{ animationDelay: "5s" }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-primary/15 rounded-full blur-3xl animate-orbital" style={{ animationDelay: "8s" }}></div>
        <div className="absolute top-3/4 right-1/3 w-80 h-80 bg-secondary/15 rounded-full blur-3xl animate-orbital-large" style={{ animationDelay: "12s" }}></div>
        <div className="absolute top-1/6 right-1/5 w-72 h-72 bg-primary/12 rounded-full blur-3xl animate-orbital-reverse" style={{ animationDelay: "3s" }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center space-y-8"
        >
          <div className="space-y-4">
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-secondary text-lg font-medium"
            >
              Hi, I'm
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold text-gradient-primary"
            >
              Aavesh Momin
            </motion.h1>
            <div className="h-16 flex items-center justify-center">
              <p className="text-2xl md:text-3xl text-foreground/80">
                {displayText}
                <span className="animate-glow-pulse text-primary">|</span>
              </p>
            </div>
          </div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-lg text-foreground/70 max-w-2xl mx-auto"
          >
            Specialized in Oracle Integration Cloud (OIC), VBCS, Redwood, and Full-Stack Development. 
            Transforming business requirements into scalable enterprise solutions.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap gap-4 justify-center items-center"
          >
            <Button variant="hero" size="lg" asChild className="hover-glow-primary">
              <a href="#projects">View My Work</a>
            </Button>
            <Button variant="secondary-hero" size="lg" asChild className="hover-glow-secondary">
              <a href="#contact">Contact Me</a>
            </Button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex gap-4 justify-center pt-4"
          >
            <a
              href="https://github.com/aavesh22"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-3 rounded-full hover-glow-primary transition-all hover:scale-110"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://in.linkedin.com/in/aavesh-momin-5a1103187"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-3 rounded-full hover-glow-secondary transition-all hover:scale-110"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:momin.aavesh123@gmail.com"
              className="glass-card p-3 rounded-full hover-glow-primary transition-all hover:scale-110"
            >
              <Mail className="w-6 h-6" />
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="pt-8 animate-bounce"
          >
            <a href="#about">
              <ArrowDown className="w-6 h-6 mx-auto text-primary" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const About = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-primary/15 rounded-full blur-3xl animate-orbital"></div>
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-secondary/15 rounded-full blur-3xl animate-orbital-reverse" style={{ animationDelay: "6s" }}></div>
        <div className="absolute top-2/3 left-1/4 w-60 h-60 bg-secondary/8 rounded-full blur-3xl animate-orbital-large" style={{ animationDelay: "9s" }}></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gradient-primary">
            About Me
          </h2>
          
          <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 md:p-12 rounded-2xl shadow-lg hover-glow-primary perspective-card"
          >
            <div className="space-y-6 text-foreground/80 leading-relaxed">
              <p className="text-lg">
                I'm an <span className="text-primary font-semibold">innovative and results-driven Software Engineer</span> based in Mumbai, Maharashtra, 
                with hands-on expertise in Oracle Integration Cloud (OIC), Visual Builder (VBCS), and Redwood for developing 
                dynamic, scalable enterprise solutions.
              </p>
              
              <p className="text-lg">
                With a strong foundation in <span className="text-secondary font-semibold">Java, Spring Boot, Angular, and MySQL</span>, 
                I specialize in delivering seamless cloud integrations, interactive dashboards, and secure web applications. 
                My experience spans across major projects with leading financial institutions and enterprise clients.
              </p>
              
              <p className="text-lg">
                I excel at <span className="text-primary font-semibold">bridging business needs with technical solutions</span>, 
                enhancing process efficiency and user experience through modern development practices and enterprise-grade technologies.
              </p>

              <div className="pt-6 flex flex-wrap gap-4">
                <div className="glass-card px-4 py-2 rounded-full">
                  <span className="text-sm">📍 Mumbai, Maharashtra</span>
                </div>
                <div className="glass-card px-4 py-2 rounded-full">
                  <span className="text-sm">💼 Software Engineer @ Clover Infotech</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

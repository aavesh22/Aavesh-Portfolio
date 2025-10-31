import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";


const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://formspree.io/f/myzbnlak', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message
        })
      });
      
      if (response.ok) {
        toast({
          title: "Message Sent!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error('Failed to send');
      }
    } catch (error) {
      toast({
        title: "Error!",
        description: "Failed to send message. Please try again.",
        variant: "destructive"
      });
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "momin.aavesh123@gmail.com",
      href: "mailto:momin.aavesh123@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91-7045505308",
      href: "tel:+917045505308",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Mumbai, Maharashtra",
    },
  ];

  const { ref: refLeft, isVisible: isVisibleLeft } = useScrollAnimation();
  const { ref: refRight, isVisible: isVisibleRight } = useScrollAnimation();

  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-84 h-84 bg-primary/12 rounded-full blur-3xl animate-orbital-reverse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-84 h-84 bg-secondary/12 rounded-full blur-3xl animate-orbital-large" style={{ animationDelay: "11s" }}></div>
        <div className="absolute top-2/3 right-1/5 w-60 h-60 bg-primary/8 rounded-full blur-3xl animate-orbital" style={{ animationDelay: "16s" }}></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gradient-primary">
          Get In Touch
        </h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          <motion.div
            ref={refLeft}
            initial={{ opacity: 0, x: -50 }}
            animate={isVisibleLeft ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={index} className="flex items-center gap-4">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-foreground/60">{info.label}</p>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-foreground hover:text-primary transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-foreground">{info.value}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          <motion.div
            ref={refRight}
            initial={{ opacity: 0, x: 50 }}
            animate={isVisibleRight ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 rounded-2xl space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-card/50"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-card/50"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="bg-card/50"
                />
              </div>

              <Button type="submit" variant="hero" size="lg" className="w-full hover-glow-primary">
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

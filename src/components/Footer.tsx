import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-foreground/60 text-sm">
            © 2025 Aavesh Momin. All rights reserved.
          </p>

          <div className="flex gap-4">
            <a
              href="https://github.com/aavesh22"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-primary transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://in.linkedin.com/in/aavesh-momin-5a1103187"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-secondary transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:momin.aavesh123@gmail.com"
              className="text-foreground/60 hover:text-primary transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

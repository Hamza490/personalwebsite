import { motion } from 'motion/react';
import { Github, Linkedin } from 'lucide-react';

export function SocialSection() {
  return (
    <section id="contact" className="py-20 px-6 bg-accent/30">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl mb-4">Let's Connect</h2>
          <p className="text-muted-foreground mb-12 text-lg">
            Find me on GitHub and LinkedIn
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center gap-6"
        >
          <a
            href="https://github.com/Hamza490"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-8 py-4 bg-background border border-border rounded-xl hover:border-foreground transition-all duration-300 hover:scale-105"
          >
            <Github className="w-6 h-6 group-hover:text-indigo-500 transition-colors" />
            <span className="font-medium">GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/mhamzamahboob/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-8 py-4 bg-background border border-border rounded-xl hover:border-foreground transition-all duration-300 hover:scale-105"
          >
            <Linkedin className="w-6 h-6 group-hover:text-blue-500 transition-colors" />
            <span className="font-medium">LinkedIn</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
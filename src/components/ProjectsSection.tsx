import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Amazon Clone',
    description: 'Full e-commerce app with catalog, cart, checkout, seller functions',
    technologies: ['React', 'Node.js', 'AWS', 'PostgreSQL', 'MongoDB'],
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'AutoRover',
    description: 'Real-time SLAM with LIDAR + depth sensors. PostgreSQL logging + RViz visualization for path analysis',
    technologies: ['ROS', 'LIDAR', 'PostgreSQL', 'Python'],
    gradient: 'from-purple-500 to-pink-500',
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-6 bg-accent/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4">Featured Projects</h2>
          <p className="text-muted-foreground">
            Innovative solutions showcasing technical expertise
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative bg-card border border-border rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              {/* Gradient header */}
              <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-white text-3xl">{project.title}</h3>
                </div>
              </div>

              <div className="p-6">
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-4 border-t border-border">
                  <button className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                    <Github className="w-4 h-4" />
                    <span className="text-sm">View Code</span>
                  </button>
                  <button className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm">Live Demo</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
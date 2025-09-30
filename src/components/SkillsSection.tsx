import { motion } from 'motion/react';
import { Code2, Cpu, Cloud, Database, TestTube } from 'lucide-react';

const skillCategories = [
  {
    title: 'Languages & Frameworks',
    icon: Code2,
    skills: [
      'Python (pandas, scikit-learn, XGBoost, PyTorch)',
      'Qt (PyQt, Qt Designer)',
      'Java',
      'C/C++',
      'Node.js',
      'JavaScript/TypeScript',
      'React',
      'React Native',
      'Three.js',
      'OpenGL',
      'HTML/CSS',
    ],
  },
  {
    title: 'Systems Engineering',
    icon: Cpu,
    skills: [
      'Embedded systems',
      'IP networking',
      'Hardware/software integration',
      'PC architecture',
      'Telemetry',
    ],
  },
  {
    title: 'Cloud & DevOps',
    icon: Cloud,
    skills: [
      'AWS',
      'Azure',
      'GCP',
      'Docker',
      'Kubernetes',
      'CI/CD',
    ],
  },
  {
    title: 'Databases & Tools',
    icon: Database,
    skills: [
      'PostgreSQL',
      'MySQL',
      'MongoDB',
      'Supabase',
      'Git',
      'Webpack/Vite',
      'Jira',
      'Figma',
    ],
  },
  {
    title: 'Testing & QA',
    icon: TestTube,
    skills: [
      'JUnit',
      'PyTest',
      'Cypress',
      'Semgrep',
      'ESLint',
      'Trivy',
    ],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-6 bg-accent/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4">Technical Skills</h2>
          <p className="text-muted-foreground">
            A comprehensive toolkit for building modern software solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-indigo-600/10 rounded-lg">
                    <Icon className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h3 className="text-xl">{category.title}</h3>
                </div>
                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="text-muted-foreground text-sm flex items-start gap-2"
                    >
                      <span className="text-indigo-600 mt-1">▸</span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
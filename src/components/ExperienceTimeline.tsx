import { motion } from 'motion/react';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    title: 'AI Engineer Intern',
    company: 'AVAtalk',
    period: 'Sept 2025 – Present',
    achievements: [
      'Built transcription + conversational pipeline with Whisper + Web Speech API',
      'Integrated Guardrails AI middleware for safe GPT therapy responses',
      'Developed customizable 3D avatars in Three.js/Babylon.js with Avaturn API',
    ],
  },
  {
    title: 'Software Engineer Intern',
    company: 'Nuvis Technologies',
    period: 'May 2025 – Aug 2025',
    achievements: [
      'Implemented OAuth2 and role-based access controls for multi-tenant systems',
      'Designed REST APIs + React interfaces for distributed hardware projects',
      'Built telemetry services for IP devices via Teltonika routers + Google Maps API',
    ],
  },
  {
    title: 'Software Developer Intern',
    company: 'Gabriel Service and Repair',
    period: 'May 2025 – Jul 2025',
    achievements: [
      'Automated invoice-to-marketing workflows with QuickBooks + Mailchimp',
      'Integrated QuickBooks Webhooks + QBO API for real-time invoice detection',
      'Reduced overhead with personalized e-commerce campaign triggers',
    ],
  },
  {
    title: 'Software Engineer',
    company: 'MedPass',
    period: 'Aug 2024 – May 2025',
    achievements: [
      'Built MedPass LLMs for no-code SaaS + compliance tools',
      'Integrated EHR, smartwatch, and medical device APIs',
      'Developed compliance mapping reports (policies → test cases)',
    ],
  },
];

export function ExperienceTimeline() {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4">Experience</h2>
          <p className="text-muted-foreground">
            Building innovative solutions across diverse domains
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${exp.period}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 top-0 w-5 h-5 bg-indigo-600 rounded-full border-4 border-background hidden md:block" />

                <div className="md:ml-20 bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-2 bg-indigo-600/10 rounded-lg md:hidden">
                      <Briefcase className="w-5 h-5 text-indigo-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl mb-1">{exp.title}</h3>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-muted-foreground">
                        <span>{exp.company}</span>
                        <span className="hidden sm:inline">•</span>
                        <span className="text-sm">{exp.period}</span>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li
                        key={i}
                        className="text-muted-foreground flex items-start gap-2"
                      >
                        <span className="text-indigo-600 mt-1">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
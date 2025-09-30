import { motion } from 'motion/react';
import { GraduationCap, Award, Users } from 'lucide-react';

export function EducationSection() {
  return (
    <section id="education" className="py-12 px-6 bg-accent/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4">Education</h2>
          <p className="text-muted-foreground">
            Academic foundation and achievements
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-card border border-border rounded-lg p-8"
        >
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 bg-indigo-600/10 rounded-lg">
              <GraduationCap className="w-8 h-8 text-indigo-600" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl mb-2">Bachelor of Engineering (BEng)</h3>
              <p className="text-muted-foreground mb-1">Computer Engineering</p>
              <p className="text-muted-foreground">
                Toronto Metropolitan University • Expected May 2027
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Award className="w-5 h-5 text-indigo-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="mb-2">Hackathons</h4>
                  <ul className="space-y-1 text-muted-foreground text-sm">
                    <li>• 1st Place TMU Tetra</li>
                    <li>• Top Solo Score MEC 91%</li>
                    <li>• Top 10 DMZ Basecamp</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Users className="w-5 h-5 text-indigo-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="mb-2">Leadership</h4>
                  <ul className="space-y-1 text-muted-foreground text-sm">
                    <li>• Chair MEC '24</li>
                    <li>• VP Corps IEEE</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
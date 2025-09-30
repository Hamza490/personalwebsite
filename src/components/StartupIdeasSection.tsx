import { motion } from 'motion/react';
import { Lightbulb, Sparkles } from 'lucide-react';

interface StartupIdea {
  id: number;
  title: string;
  tagline: string;
  problem: string;
  solution: string;
  status: 'brainstorming' | 'researching' | 'planning' | 'developing' | 'shipping';
  color: string;
  rotation: number;
}

const startupIdeas: StartupIdea[] = [
  {
    id: 1,
    title: 'ProjectShip',
    tagline: 'Real-world coding assessments',
    problem: 'Cheating tools for coding assessments make it harder to test for DSA skills',
    solution: 'Coding assessments that test DSA, shipping abilities, and software architecture in one go',
    status: 'brainstorming',
    color: 'bg-blue-200',
    rotation: -2,
  },
  {
    id: 2,
    title: 'MedPass',
    tagline: 'Compliant healthcare software at speed',
    problem: 'People most intimate with healthcare problems lack skills to build cost effectively and ensure compliance',
    solution: 'CI/CD tech stack to generate medical SaaS/device software with automatic regulator-backed compliance reports',
    status: 'developing',
    color: 'bg-green-200',
    rotation: 3,
  },
  {
    id: 3,
    title: 'Leadrboard',
    tagline: 'Get paid to improve yourself',
    problem: 'Building better habits is often associated with cost, making it harder to stay committed',
    solution: 'Social gamification platform with challenges, buy-in prices, and prize money for winners',
    status: 'shipping',
    color: 'bg-purple-200',
    rotation: -1,
  },
  {
    id: 4,
    title: 'BrewLocal',
    tagline: 'Discover your neighborhood roasters',
    problem: 'Local coffee roasters struggle to compete with big brands, and coffee lovers can\'t easily discover quality local options',
    solution: 'Marketplace connecting coffee enthusiasts with local roasters through rotating subscription boxes',
    status: 'researching',
    color: 'bg-yellow-200',
    rotation: 2,
  },
  {
    id: 5,
    title: 'ShelfLife',
    tagline: 'Stop wasting food and money',
    problem: 'Households waste 40% of food purchases because they forget what\'s in the fridge and when it expires',
    solution: 'AI-powered app that tracks food expiration dates, sends reminders, and suggests recipes based on what\'s expiring soon',
    status: 'developing',
    color: 'bg-orange-200',
    rotation: -3,
  },
  {
    id: 6,
    title: 'CodeMigrate',
    tagline: 'Migrate codebases with confidence',
    problem: 'Migrating between frameworks/languages is risky, time-consuming, and error-prone',
    solution: 'Automated codebase migration using LLMs to convert code while maintaining architecture',
    status: 'brainstorming',
    color: 'bg-pink-200',
    rotation: 1,
  },
];

const statusLabels = {
  brainstorming: '💭 Brainstorming',
  researching: '🔍 Researching',
  planning: '📋 Planning',
  developing: '⚙️ Developing',
  shipping: '🚀 Shipping',
};

export function StartupIdeasSection() {
  return (
    <section id="ideas" className="py-20 px-6 bg-background relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(0deg, #000 0px, #000 1px, transparent 1px, transparent 20px),
                           repeating-linear-gradient(90deg, #000 0px, #000 1px, transparent 1px, transparent 20px)`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Lightbulb className="w-8 h-8 text-yellow-500" />
            <h2 className="text-4xl md:text-5xl">Startup Ideas</h2>
            <Sparkles className="w-8 h-8 text-yellow-500" />
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of ideas I'm exploring. Some might become reality, others might inspire something better.
          </p>
        </motion.div>

        {/* Sticky Notes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {startupIdeas.map((idea, index) => (
            <motion.div
              key={idea.id}
              initial={{ opacity: 0, y: 20, rotate: 0 }}
              whileInView={{ opacity: 1, y: 0, rotate: idea.rotation }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05, 
                rotate: 0,
                y: -8,
                transition: { duration: 0.2 }
              }}
              className="relative group"
            >
              {/* Pin/Tack */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                <div className="w-6 h-6 rounded-full bg-gray-400 shadow-lg relative">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-300 to-gray-500" />
                  <div className="absolute top-1 left-1 w-2 h-2 rounded-full bg-white/40" />
                </div>
              </div>

              {/* Sticky Note */}
              <div 
                className={`${idea.color} p-6 rounded-sm shadow-lg relative min-h-[320px] flex flex-col`}
                style={{
                  boxShadow: '4px 4px 12px rgba(0,0,0,0.15), 0 2px 4px rgba(0,0,0,0.1)',
                }}
              >
                {/* Top gradient for sticky note effect */}
                <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-black/5 to-transparent rounded-t-sm" />

                {/* Status Badge */}
                <div className="mb-3">
                  <span className="inline-block px-3 py-1 bg-black/80 text-white rounded-full text-xs backdrop-blur-sm shadow-md font-semibold">
                    {statusLabels[idea.status]}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-3">
                  <h3 className="text-2xl text-gray-900 font-bold drop-shadow-sm">{idea.title}</h3>
                  <p className="text-sm text-gray-800 italic font-medium">{idea.tagline}</p>
                  
                  <div className="space-y-2 pt-2">
                    <div>
                      <p className="text-xs text-gray-900 uppercase tracking-wide mb-1 font-bold">Problem</p>
                      <p className="text-sm text-gray-900 font-medium leading-snug">{idea.problem}</p>
                    </div>
                    
                    <div>
                      <p className="text-xs text-gray-900 uppercase tracking-wide mb-1 font-bold">Solution</p>
                      <p className="text-sm text-gray-900 font-medium leading-snug">{idea.solution}</p>
                    </div>
                  </div>
                </div>

                {/* Handwritten-style underline */}
                <div className="mt-4 pt-3 border-t-2 border-dashed border-gray-500/40">
                  <p className="text-xs text-gray-700 text-center opacity-0 group-hover:opacity-100 transition-opacity font-medium">
                    Click to learn more (coming soon)
                  </p>
                </div>

                {/* Paper texture overlay */}
                <div 
                  className="absolute inset-0 pointer-events-none opacity-20 mix-blend-multiply rounded-sm"
                  style={{
                    backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'4\' height=\'4\'%3E%3Cpath d=\'M0 0h1v1H0zm2 2h1v1H2z\' fill=\'%23000\' fill-opacity=\'0.05\'/%3E%3C/svg%3E")',
                  }}
                />
              </div>

              {/* Shadow underneath */}
              <div 
                className={`absolute inset-0 -z-10 ${idea.color} blur-sm opacity-30`}
                style={{ transform: `translateY(4px) rotate(${idea.rotation}deg)` }}
              />
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="inline-block bg-card border border-border rounded-lg p-6">
            <p className="text-muted-foreground mb-3">
              Have thoughts on these ideas? Want to collaborate?
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors duration-200"
            >
              Let's Chat
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
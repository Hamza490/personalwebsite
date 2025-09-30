import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { EducationSection } from './components/EducationSection';
import { StartupIdeasSection } from './components/StartupIdeasSection';
import { SocialSection } from './components/SocialSection';

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <HeroSection />
        <SkillsSection />
        <ExperienceTimeline />
        <EducationSection />
        <StartupIdeasSection />
        <SocialSection />
      </main>
    </div>
  );
}
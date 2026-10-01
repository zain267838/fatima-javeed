import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { SelectedWork } from './components/SelectedWork';
import { AboutServices } from './components/AboutServices';
import { ResumeSection } from './components/ResumeSection';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { TestimonialStats } from './components/TestimonialStats';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { Project } from './types/portfolio';

export function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF4EC] text-[#173E3D] selection:bg-[#F5A58C] selection:text-[#064F50] overflow-x-hidden font-sans">
      {/* Sticky Navigation Header with direct mailto Let's Talk CTA */}
      <Header />

      {/* Hero Section with updated Fatima Javeed branding & photo */}
      <main>
        <Hero
          onViewWorkClick={() => scrollToSection('work')}
          onAboutClick={() => scrollToSection('about')}
        />

        {/* Selected Work Portfolio Section */}
        <SelectedWork onSelectProject={(project) => setSelectedProject(project)} />

        {/* About & Capabilities (What I Do) Section */}
        <AboutServices />

        {/* Resume Download Section (Recruiter-Ready PDF Access) */}
        <ResumeSection />

        {/* Work Experience & Track Record Section */}
        <ExperienceTimeline />

        {/* Testimonial & Experience Statistics Section */}
        <TestimonialStats />

        {/* Final CTA & Contact Section with direct mailto & LinkedIn */}
        <FinalCTA />
      </main>

      {/* Footer */}
      <Footer />

      {/* Case Study Quick View Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}

export default App;

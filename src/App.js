import React, { useState } from 'react';
import { PERSONAL_INFO, SKILLS_DATA, PROJECTS_DATA, EXPERIENCE_DATA } from './data/portfolioData';
import { useLocalStorage } from './hooks/useLocalStorage';

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import ContactSection from './components/ContactSection';
import ProjectModal from './components/ProjectModal';
import Toast from './components/Toast';
import Footer from './components/Footer';

import './App.css';

export default function App() {
  const [theme, setTheme] = useLocalStorage('theme', 'dark');
  const [activeTab, setActiveTab] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [toastMessage, setToastMessage] = useState('');

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 3500);
  };

  const categories = ['All', ...new Set(PROJECTS_DATA.map(p => p.category))];
  const filteredProjects = activeTab === 'All' 
    ? PROJECTS_DATA 
    : PROJECTS_DATA.filter(p => p.category === activeTab);

  return (
    <div className={`portfolio-app ${theme}-theme`}>
      {/* Bootstrap Icons Link */}
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css" />

      <Navbar theme={theme} toggleTheme={toggleTheme} name={PERSONAL_INFO.name} />

      <main>
        <HeroSection info={PERSONAL_INFO} />
        <SkillsSection skills={SKILLS_DATA} />
        <ProjectsSection 
          categories={categories}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          projects={filteredProjects}
          onSelectProject={setSelectedProject}
        />
        <ExperienceSection experience={EXPERIENCE_DATA} />
        <ContactSection email={PERSONAL_INFO.email} showToast={showToast} />
      </main>

      <Footer name={PERSONAL_INFO.name} />

      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
          theme={theme}
        />
      )}

      {toastMessage && <Toast message={toastMessage} />}
    </div>
  );
}

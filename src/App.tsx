import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [currentSection, setCurrentSection] = useState('home');

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    // Smooth scroll behavior for the entire page
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setCurrentSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Add smooth scrolling to all internal links
  useEffect(() => {
    const handleInternalLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a[href^="#"]') as HTMLAnchorElement;
      
      if (link) {
        e.preventDefault();
        const targetId = link.getAttribute('href')?.substring(1);
        if (targetId) {
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        }
      }
    };

    document.addEventListener('click', handleInternalLinkClick);
    return () => document.removeEventListener('click', handleInternalLinkClick);
  }, []);

  return (
    <div className={`min-h-screen transition-all duration-500 ease-in-out ${
      darkMode ? 'dark' : ''
    }`}>
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        
        {/* Page Sections with Transition Effects */}
        <div className="transition-all duration-700 ease-in-out">
          <Hero />
        </div>
        
        <div className="transition-all duration-700 ease-in-out">
          <About />
        </div>
        
        <div className="transition-all duration-700 ease-in-out">
          <Skills />
        </div>
        
        <div className="transition-all duration-700 ease-in-out">
          <Projects />
        </div>
        
        <div className="transition-all duration-700 ease-in-out">
          <Experience />
        </div>
        
        <div className="transition-all duration-700 ease-in-out">
          <Contact />
        </div>
        
        <div className="transition-all duration-700 ease-in-out">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
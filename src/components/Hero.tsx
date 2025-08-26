import React, { useState, useEffect } from 'react';
import { ChevronDown, Download, ExternalLink } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const [displayText2, setDisplayText2] = useState('');
  const [isDeleting2, setIsDeleting2] = useState(false);
  const [loopNum2, setLoopNum2] = useState(0);
  const [typingSpeed2, setTypingSpeed2] = useState(150);

  const text = "Chamika Shashipriya";
  const fullText = text;
  const text2 = "Full Stack Developer & UI/UX Designer";
  const fullText2 = text2;

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    
    if (isDeleting) {
      if (displayText === '') {
        setIsDeleting(false);
        setLoopNum(prev => prev + 1);
        setTypingSpeed(150);
      } else {
        timeout = setTimeout(() => {
          setDisplayText(prev => prev.slice(0, -1));
          setTypingSpeed(50);
        }, typingSpeed);
      }
    } else {
      if (displayText === fullText) {
        timeout = setTimeout(() => {
          setIsDeleting(true);
          setTypingSpeed(2000); // Pause before deleting
        }, 2000);
      } else {
        timeout = setTimeout(() => {
          setDisplayText(fullText.slice(0, displayText.length + 1));
          setTypingSpeed(150);
        }, typingSpeed);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, loopNum, typingSpeed, fullText]);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    
    if (isDeleting2) {
      if (displayText2 === '') {
        setIsDeleting2(false);
        setLoopNum2(prev => prev + 1);
        setTypingSpeed2(150);
      } else {
        timeout = setTimeout(() => {
          setDisplayText2(prev => prev.slice(0, -1));
          setTypingSpeed2(50);
        }, typingSpeed2);
      }
    } else {
      if (displayText2 === fullText2) {
        timeout = setTimeout(() => {
          setIsDeleting2(true);
          setTypingSpeed2(2000); // Pause before deleting
        }, 2000);
      } else {
        timeout = setTimeout(() => {
          setDisplayText2(fullText2.slice(0, displayText2.length + 1));
          setTypingSpeed2(150);
        }, typingSpeed2);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText2, isDeleting2, loopNum2, typingSpeed2, fullText2]);

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-blue-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, rgb(59, 130, 246, 0.1) 2px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="text-center">
          {/* Animated Avatar */}
          <div className="mb-8 relative">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1 animate-pulse">
              <div className="w-full h-full rounded-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center text-4xl font-bold text-gray-600 dark:text-gray-300">
                CS
              </div>
            </div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white dark:border-gray-900 flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full animate-ping"></div>
            </div>
          </div>

          {/* Hero Text */}
          <div className="space-y-6 max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="text-gray-900 dark:text-white">Hi, I'm </span>
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {displayText}
                <span className="animate-pulse">|</span>
              </span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 font-light">
              {displayText2}
              <span className="animate-pulse">|</span>
            </h2>
            
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
              I create beautiful, responsive web applications with modern technologies. 
              Passionate about clean code, great user experiences, and innovative solutions.
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <button 
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-200 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2"
              >
                View My Work
                <ExternalLink size={18} />
              </button>
              
              <button className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-blue-600 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 flex items-center justify-center gap-2">
                Download CV
                <Download size={18} />
              </button>
            </div>
          </div>

          {/* Scroll Indicator */}
          <button
            onClick={scrollToAbout}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors animate-bounce cursor-pointer"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
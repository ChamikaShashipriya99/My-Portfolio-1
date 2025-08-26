import React from 'react';
import { Code, Heart, Coffee, Lightbulb } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-30"></div>
      <div className="absolute inset-0 bg-circuit opacity-10"></div>
      
      {/* Floating Code Elements */}
      <div className="floating-code top-32 left-8">console.log("Hello World");</div>
      <div className="floating-code top-64 right-12">const passion = "coding";</div>
      <div className="floating-code bottom-32 left-16">git commit -m "progress"</div>
      
      {/* Glowing Orbs */}
      <div className="glow-orb top-1/4 right-1/4"></div>
      <div className="glow-orb bottom-1/4 left-1/4"></div>
      
      {/* Particle System */}
      <div className="particle top-1/3 left-1/3" style={{ animationDelay: '1s' }}></div>
      <div className="particle top-2/3 right-1/3" style={{ animationDelay: '3s' }}></div>
      <div className="particle bottom-1/3 left-2/3" style={{ animationDelay: '5s' }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Profile Image */}
            <div className="relative">
              <div className="relative z-10">
                <img 
                  src="https://github.com/ChamikaShashipriya99.png" 
                  alt="Profile" 
                  className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl transform rotate-3 scale-105 opacity-20"></div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Passionate Developer & Designer
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                  Hello! I'm Chamika Shashipriya, a passionate Full-Stack Developer dedicated to building modern, scalable, and user-friendly web applications. With a strong foundation in JavaScript, React.js, Node.js, and the MERN stack, I love turning ideas into reality through code.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                  My journey in web development began with a curiosity for how things work on the internet. Since then, I've honed my skills in both frontend and backend technologies, always striving to learn and adapt to new trends. I enjoy collaborating with others, solving complex problems, and delivering high-quality solutions that make a difference.
                </p>
              </div>

              {/* Values */}
              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                    <Code className="text-blue-600 dark:text-blue-400" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Clean Code</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Quality & maintainability</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-red-100 dark:bg-red-900 rounded-lg">
                    <Heart className="text-red-600 dark:text-red-400" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">User Focus</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">User-centered design</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-yellow-100 dark:bg-yellow-900 rounded-lg">
                    <Coffee className="text-yellow-600 dark:text-yellow-400" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Dedication</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Committed to excellence</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-green-100 dark:bg-green-900 rounded-lg">
                    <Lightbulb className="text-green-600 dark:text-green-400" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Innovation</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Always learning</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
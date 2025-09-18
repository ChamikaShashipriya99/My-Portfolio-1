import React from 'react';
import { 
  Code, 
  Database, 
  GitBranch, 
  Globe, 
  Palette, 
  FileCode, 
  Server, 
  Layers,
  Zap,
  Shield,
  Cpu,
  Monitor
} from 'lucide-react';
import {
  SiJavascript,
  SiC,
  SiCplusplus,
  SiKotlin,
  SiMongodb,
  SiMysql,
  SiExpress,
  SiTailwindcss,
  SiDotnet,
  SiSpring,
  SiJsonwebtokens,
  SiCanva,
  SiCisco,
  SiTrello,
  SiNodemon,
  SiApachetomcat
} from 'react-icons/si';
import {
  FaJava,
  FaPython,
  FaPhp,
  FaHtml5,
  FaCss3Alt,
  FaGit,
  FaGithub,
  FaNpm,
  FaFigma,
  FaReact,
  FaNodeJs,
  FaBootstrap,
  FaDatabase
} from 'react-icons/fa';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6 text-blue-600" />,
      skills: [
        { name: "JavaScript", icon: <SiJavascript className="w-6 h-6 text-yellow-500" /> },
        { name: "Java", icon: <FaJava className="w-6 h-6 text-[#ea2d2e]" /> },
        { name: "Python", icon: <FaPython className="w-6 h-6 text-[#3776AB]" /> },
        { name: "C", icon: <SiC className="w-6 h-6 text-[#00599C]" /> },
        { name: "C++", icon: <SiCplusplus className="w-6 h-6 text-[#00599C]" /> },
        { name: "C#", icon: <SiDotnet className="w-6 h-6 text-[#512BD4]" /> },
        { name: "PHP", icon: <FaPhp className="w-6 h-6 text-[#777BB4]" /> },
        { name: "Kotlin", icon: <SiKotlin className="w-6 h-6 text-[#7F52FF]" /> },
        { name: "HTML", icon: <FaHtml5 className="w-6 h-6 text-[#E34F26]" /> },
        { name: "CSS", icon: <FaCss3Alt className="w-6 h-6 text-[#1572B6]" /> }
      ]
    },
    {
      title: "Databases",
      icon: <Database className="w-6 h-6 text-green-600" />,
      skills: [
        { name: "MongoDB", icon: <SiMongodb className="w-6 h-6 text-[#47A248]" /> },
        { name: "MySQL", icon: <SiMysql className="w-6 h-6 text-[#4479A1]" /> },
        { name: "Microsoft SQL Server", icon: <FaDatabase className="w-6 h-6 text-[#CC2927]" /> }
      ]
    },
    {
      title: "Tools and IDE's",
      icon: <GitBranch className="w-6 h-6 text-purple-600" />,
      skills: [
        { name: "Git", icon: <FaGit className="w-6 h-6 text-[#F05032]" /> },
        { name: "GitHub", icon: <FaGithub className="w-6 h-6 text-gray-900 dark:text-gray-100" /> },
        { name: "NPM", icon: <FaNpm className="w-6 h-6 text-[#CB3837]" /> },
        { name: "Figma", icon: <FaFigma className="w-6 h-6 text-[#F24E1E]" /> },
        { name: "Canva", icon: <SiCanva className="w-6 h-6 text-[#00C4CC]" /> },
        { name: "Cisco", icon: <SiCisco className="w-6 h-6 text-[#1BA0D7]" /> },
        { name: "Trello", icon: <SiTrello className="w-6 h-6 text-[#0052CC]" /> },
        { name: "Nodemon", icon: <SiNodemon className="w-6 h-6 text-[#76D04B]" /> },
        { name: "Apache Tomcat", icon: <SiApachetomcat className="w-6 h-6 text-[#F8DC75]" /> }
      ]
    },
    {
      title: "Frameworks & Platforms",
      icon: <Globe className="w-6 h-6 text-orange-600" />,
      skills: [
        { name: "React", icon: <FaReact className="w-6 h-6 text-[#61DAFB]" /> },
        { name: "Node.js", icon: <FaNodeJs className="w-6 h-6 text-[#339933]" /> },
        { name: "Express.js", icon: <SiExpress className="w-6 h-6 text-gray-900 dark:text-gray-100" /> },
        { name: "Bootstrap", icon: <FaBootstrap className="w-6 h-6 text-[#7952B3]" /> },
        { name: "Tailwind", icon: <SiTailwindcss className="w-6 h-6 text-[#06B6D4]" /> },
        { name: ".NET", icon: <SiDotnet className="w-6 h-6 text-[#512BD4]" /> },
        { name: "Spring", icon: <SiSpring className="w-6 h-6 text-[#6DB33F]" /> },
        { name: "JWT", icon: <SiJsonwebtokens className="w-6 h-6 text-[#000000]" /> }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-hexagon opacity-20"></div>
      
      {/* Matrix-style Digital Rain */}
      <div className="matrix-rain left-8" style={{ animationDelay: '0s' }}>const skills = [];</div>
      <div className="matrix-rain left-16" style={{ animationDelay: '2s' }}>function learn() {"{ return growth; }"}</div>
      <div className="matrix-rain left-24" style={{ animationDelay: '4s' }}>npm install knowledge</div>
      <div className="matrix-rain right-12" style={{ animationDelay: '1s' }}>git add .</div>
      <div className="matrix-rain right-20" style={{ animationDelay: '3s' }}>console.log("coding");</div>
      
      {/* Floating Code Elements */}
      <div className="floating-code top-32 left-1/4">let expertise = "growing";</div>
      <div className="floating-code top-64 right-1/4">const passion = "learning";</div>
      <div className="floating-code bottom-32 left-1/3">git push origin main</div>
      
      {/* Glowing Orbs */}
      <div className="glow-orb top-1/3 left-1/4"></div>
      <div className="glow-orb bottom-1/3 right-1/4"></div>
      
      {/* Particle System */}
      <div className="particle top-1/4 left-1/2" style={{ animationDelay: '2s' }}></div>
      <div className="particle top-1/2 right-1/3" style={{ animationDelay: '4s' }}></div>
      <div className="particle bottom-1/4 left-2/3" style={{ animationDelay: '6s' }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Skills & Technologies
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Here are the technologies and tools I work with to bring ideas to life
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full mb-4">
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex} 
                      className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-200 group"
                    >
                      <span className="text-2xl">{skill.icon}</span>
                      <span className="text-gray-700 dark:text-gray-300 font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Skills Summary */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Technical Expertise Overview
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg">
                <div className="flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900/20 rounded-full mx-auto mb-4">
                  <Monitor className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-3">
                  Full-Stack Development
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Proficient in both frontend and backend technologies with expertise in modern web frameworks and databases.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg">
                <div className="flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full mx-auto mb-4">
                  <Zap className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="text-lg font-semibold text-green-600 dark:text-green-400 mb-3">
                  Modern Tools & Platforms
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Experience with contemporary development tools, IDEs, and collaboration platforms for efficient project delivery.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg">
                <div className="flex items-center justify-center w-16 h-16 bg-purple-100 dark:bg-purple-900/20 rounded-full mx-auto mb-4">
                  <Layers className="w-8 h-8 text-purple-600" />
                </div>
                <h4 className="text-lg font-semibold text-purple-600 dark:text-purple-400 mb-3">
                  Cross-Platform Solutions
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Versatile programming skills across multiple languages and platforms for diverse project requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
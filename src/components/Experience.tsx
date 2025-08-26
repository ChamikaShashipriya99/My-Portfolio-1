import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Full Stack Developer",
      company: "Freelance",
      location: "Ambalangoda, Sri Lanka",
      period: "2021 - Present",
      description: "Developing modern web applications using MEAN stack technologies. Creating responsive, user-friendly interfaces and robust backend systems for various clients.",
      technologies: ["Angular", "Node.js", "MongoDB", "AWS", "Docker"],
      achievements: [
        "Built 20+ successful web applications",
        "Specialized in MEAN stack development",
        "Implemented responsive designs with modern UI/UX"
      ]
    },
    {
      id: 2,
      title: "Web Developer",
      company: "Local Projects",
      location: "Ambalangoda, Sri Lanka",
      period: "2020 - 2021",
      description: "Worked on various local web development projects, focusing on creating modern, responsive websites and learning advanced development techniques.",
      technologies: ["React", "Express.js", "PostgreSQL", "Redis"],
      achievements: [
        "Completed 10+ local business websites",
        "Gained expertise in modern web technologies",
        "Developed strong problem-solving skills"
      ]
    },
    {
      id: 3,
      title: "Junior Developer",
      company: "Self-Learning",
      location: "Ambalangoda, Sri Lanka",
      period: "2019 - 2020",
      description: "Started my development journey by learning programming fundamentals and web development technologies through online courses and personal projects.",
      technologies: ["React", "Angular", "TypeScript", "Sass"],
      achievements: [
        "Mastered HTML, CSS, and JavaScript fundamentals",
        "Built first portfolio website",
        "Started contributing to open-source projects"
      ]
    }
  ];

  const education = [
    {
      id: 1,
      degree: "Self-Taught Developer",
      school: "Online Learning Platforms",
      location: "Sri Lanka",
      period: "2019 - Present",
      description: "Continuously learning and improving skills through online courses, documentation, and hands-on projects.",
      achievements: [
        "Completed multiple online courses in web development",
        "Active contributor to open-source projects",
        "Constantly updating skills with latest technologies"
      ]
    }
  ];

  const ExperienceCard = ({ experience, isEducation = false }) => (
    <div className="relative">
      {/* Timeline Line */}
      <div className="absolute left-4 top-8 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600"></div>
      
      {/* Timeline Dot */}
      <div className="absolute left-2 top-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900 shadow-lg"></div>
      
      {/* Content Card */}
      <div className="ml-12 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 transform hover:-translate-y-1">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              {experience.title}
            </h3>
            <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-1">
                <Briefcase size={16} />
                <span className="font-medium">{experience.company || experience.school}</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin size={16} />
                <span>{experience.location}</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-1 text-blue-600 dark:text-blue-400 font-medium mt-2 md:mt-0">
            <Calendar size={16} />
            <span>{experience.period}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
          {experience.description}
        </p>

        {/* Technologies */}
        {experience.technologies && (
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
              Technologies Used:
            </h4>
            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((tech, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Achievements */}
        <div>
          <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
            Key {isEducation ? 'Highlights' : 'Achievements'}:
          </h4>
          <ul className="space-y-1">
            {experience.achievements.map((achievement, index) => (
              <li 
                key={index}
                className="flex items-start gap-2 text-gray-600 dark:text-gray-400 text-sm"
              >
                <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Experience & Education
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              My professional journey and educational background
            </p>
          </div>

          {/* Experience Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Professional Experience
            </h3>
            <div className="space-y-8">
              {experiences.map((experience) => (
                <ExperienceCard key={experience.id} experience={experience} />
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Education
            </h3>
            <div className="space-y-8">
              {education.map((edu) => (
                <ExperienceCard key={edu.id} experience={edu} isEducation={true} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
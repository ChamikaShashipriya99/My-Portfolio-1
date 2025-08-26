import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming",
      skills: [
        { name: "Java", level: 90, color: "bg-orange-500" },
        { name: "Python", level: 85, color: "bg-blue-500" },
        { name: "Kotlin", level: 80, color: "bg-purple-500" },
        { name: "R", level: 75, color: "bg-blue-600" },
        { name: "C#", level: 85, color: "bg-green-500" },
        { name: "HTML/CSS", level: 90, color: "bg-orange-600" },
        { name: "PHP", level: 80, color: "bg-blue-700" }
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "MySQL Workbench", level: 85, color: "bg-blue-500" },
        { name: "MongoDB", level: 80, color: "bg-green-600" },
        { name: "SQL Server Management Studio", level: 75, color: "bg-red-500" }
      ]
    },
    {
      title: "Tools & IDEs",
      skills: [
        { name: "GitHub", level: 90, color: "bg-gray-700" },
        { name: "Visual Studio Code", level: 95, color: "bg-blue-500" },
        { name: "Visual Studio", level: 85, color: "bg-purple-600" },
        { name: "Android Studio", level: 80, color: "bg-green-500" },
        { name: "Eclipse", level: 75, color: "bg-orange-500" },
        { name: "XAMPP", level: 70, color: "bg-orange-600" }
      ]
    },
    {
      title: "Frameworks & Platforms",
      skills: [
        { name: ".NET", level: 85, color: "bg-purple-500" },
        { name: "Node.js", level: 80, color: "bg-green-500" },
        { name: "Spring Boot", level: 75, color: "bg-green-600" },
        { name: "React.js", level: 85, color: "bg-blue-500" }
      ]
    },
    {
      title: "Soft Skills",
      skills: [
        { name: "Communication", level: 90, color: "bg-blue-500" },
        { name: "Quick-Learning", level: 95, color: "bg-green-500" },
        { name: "Self-Learning Time", level: 90, color: "bg-purple-500" },
        { name: "Management", level: 85, color: "bg-orange-500" },
        { name: "Problem-Solving", level: 90, color: "bg-red-500" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
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

          <div className="grid lg:grid-cols-5 gap-6">
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                  {category.title}
                </h3>
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="group">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-700 dark:text-gray-300 font-medium">
                          {skill.name}
                        </span>
                        <span className="text-gray-500 dark:text-gray-400 text-sm font-semibold">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                        <div 
                          className={`h-2 ${skill.color} rounded-full transition-all duration-1000 ease-out group-hover:scale-105 transform origin-left`}
                          style={{ 
                            width: `${skill.level}%`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Technologies */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Technologies I Work With
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {['Java', 'Python', 'Kotlin', 'C#', 'HTML/CSS', 'PHP', 'MySQL', 'MongoDB', 'SQL Server', 'GitHub', 'VS Code', 'Visual Studio', 'Android Studio', 'Eclipse', 'XAMPP', '.NET', 'Node.js', 'Spring Boot', 'React.js'].map((tech, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200 cursor-default border border-gray-200 dark:border-gray-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
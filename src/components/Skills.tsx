import React from 'react';
import { Code, Globe, Database, Palette, Wrench } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="text-blue-600" size={28} />,
      skills: ["C", "Java", "Python", "JavaScript"],
      color: "blue"
    },
    {
      title: "Web Technologies",
      icon: <Globe className="text-green-600" size={28} />,
      skills: ["HTML5", "CSS3", "JavaScript", "React.js"],
      color: "green"
    },
    {
      title: "Backend & Database",
      icon: <Database className="text-purple-600" size={28} />,
      skills: ["Node.js", "MongoDB", "MySQL", "Django"],
      color: "purple"
    },
    {
      title: "Design & Tools",
      icon: <Palette className="text-pink-600" size={28} />,
      skills: ["Figma", "Workflow", "Git", "VS Code"],
      color: "pink"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: "bg-blue-50",
        border: "border-blue-200",
        skill: "bg-blue-100 text-blue-800"
      },
      green: {
        bg: "bg-green-50",
        border: "border-green-200",
        skill: "bg-green-100 text-green-800"
      },
      purple: {
        bg: "bg-purple-50",
        border: "border-purple-200",
        skill: "bg-purple-100 text-purple-800"
      },
      pink: {
        bg: "bg-pink-50",
        border: "border-pink-200",
        skill: "bg-pink-100 text-pink-800"
      }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Skills & Technologies</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => {
            const colorClasses = getColorClasses(category.color);
            return (
              <div
                key={index}
                className={`${colorClasses.bg} ${colorClasses.border} border-2 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}
              >
                <div className="flex items-center gap-3 mb-6">
                  {category.icon}
                  <h3 className="text-xl font-bold text-gray-800">{category.title}</h3>
                </div>
                
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className={`${colorClasses.skill} px-4 py-2 rounded-lg font-medium text-center transition-all duration-200 hover:scale-105`}
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Skills Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl">
            <div className="text-3xl font-bold text-blue-600 mb-2">3+</div>
            <p className="text-gray-600">Years Learning</p>
          </div>
          <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl">
            <div className="text-3xl font-bold text-green-600 mb-2">10+</div>
            <p className="text-gray-600">Projects Built</p>
          </div>
          <div className="p-6 bg-gradient-to-br from-purple-50 to-violet-100 rounded-xl">
            <div className="text-3xl font-bold text-purple-600 mb-2">5+</div>
            <p className="text-gray-600">Technologies</p>
          </div>
          <div className="p-6 bg-gradient-to-br from-pink-50 to-rose-100 rounded-xl">
            <div className="text-3xl font-bold text-pink-600 mb-2">150+</div>
            <p className="text-gray-600">Problems Solved</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
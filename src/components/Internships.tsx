import React from 'react';
import { Briefcase, Calendar, TrendingUp, Clock } from 'lucide-react';

const Internships: React.FC = () => {
  const internships = [
    {
      title: "Full Stack Intern",
      company: "Cool Dreamers LLP",
      duration: "June 2024",
      type: "Remote",
      description: "Built a comprehensive MERN stack web application with modern development practices, reducing development time by 30% through efficient code architecture and reusable components.",
      achievements: [
        "Developed full-stack web application using MERN stack",
        "Reduced development time by 30% with optimized workflows",
        "Implemented responsive design and user-friendly interfaces",
        "Collaborated with cross-functional teams"
      ],
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "JavaScript", "Git"],
      color: "blue"
    },
    {
      title: "Web Development Intern",
      company: "Lamda Tech Softics",
      duration: "December 2023 - January 2024",
      type: "Remote",
      description: "Created responsive web pages using HTML, CSS, and JavaScript with focus on user experience, resulting in 20% boost in user engagement through improved design and functionality.",
      achievements: [
        "Boosted user engagement by 20% through improved UX",
        "Created responsive web pages for multiple projects",
        "Implemented modern CSS techniques and animations",
        "Ensured cross-browser compatibility"
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Git", "Figma"],
      color: "green"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: "bg-blue-50",
        border: "border-blue-200",
        badge: "bg-blue-100 text-blue-800",
        icon: "text-blue-600"
      },
      green: {
        bg: "bg-green-50",
        border: "border-green-200",
        badge: "bg-green-100 text-green-800",
        icon: "text-green-600"
      }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="internships" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Professional Experience</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hands-on experience gained through internships and professional engagements
          </p>
        </div>

        <div className="space-y-8">
          {internships.map((internship, index) => {
            const colorClasses = getColorClasses(internship.color);
            return (
              <div
                key={index}
                className={`${colorClasses.bg} ${colorClasses.border} border-2 rounded-2xl p-8 hover:shadow-lg transition-all duration-300`}
              >
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Company Info */}
                  <div className="lg:col-span-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`p-3 bg-white rounded-full shadow-md`}>
                        <Briefcase className={colorClasses.icon} size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800">{internship.title}</h3>
                        <p className="text-lg font-semibold text-gray-600">{internship.company}</p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Calendar size={16} />
                        <span>{internship.duration}</span>
                      </div>
                      <div className={`${colorClasses.badge} px-3 py-1 rounded-full text-sm font-medium inline-block`}>
                        {internship.type}
                      </div>
                    </div>
                  </div>

                  {/* Description & Achievements */}
                  <div className="lg:col-span-2">
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {internship.description}
                    </p>

                    {/* Key Achievements */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                        <TrendingUp className={colorClasses.icon} size={20} />
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {internship.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start gap-3">
                            <div className={`w-2 h-2 rounded-full ${colorClasses.icon.replace('text-', 'bg-')} mt-2 flex-shrink-0`}></div>
                            <span className="text-gray-600">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {internship.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className={`${colorClasses.badge} px-3 py-1 rounded-full text-sm font-medium`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Experience Summary */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Experience Summary</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold mb-2">2</div>
              <p className="text-blue-100">Internships Completed</p>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">3</div>
              <p className="text-blue-100">Months Experience</p>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">30%</div>
              <p className="text-blue-100">Efficiency Improvement</p>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">20%</div>
              <p className="text-blue-100">Engagement Boost</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Internships;
import React from 'react';
import { Award, Trophy, Star, Code, Users } from 'lucide-react';

const Achievements: React.FC = () => {
  const achievements = [
    {
      title: "Microsoft Certified: Azure Fundamentals (AZ-900)",
      description: "Achieved Microsoft Azure Fundamentals certification demonstrating cloud computing knowledge",
      date: "June 2025",
      icon: <Award className="text-blue-600" size={24} />,
      type: "Certification",
      color: "blue"
    },
    {
      title: "Smart India Hackathon - Shortlisted",
      description: "Selected among thousands of participants for the prestigious Smart India Hackathon",
      date: "2024",
      icon: <Trophy className="text-yellow-600" size={24} />,
      type: "Competition",
      color: "yellow"
    },
    {
      title: "Google Girls Hackathon 2025",
      description: "Participated in Google Girls Hackathon, showcasing problem-solving and technical skills",
      date: "2025",
      icon: <Users className="text-purple-600" size={24} />,
      type: "Participation",
      color: "purple"
    },
    {
      title: "Build-a-thon 2025 - Runner Up",
      description: "Build IoT Based Smart Trolley and got second place in Build-a-thon",
      date: "2025",
      icon: <Trophy className="text-yellow-600" size={24} />,
      type: "Competition",
      color: "yellow"
    },
    {
      title: "150+ LeetCode Problems Solved",
      description: "Demonstrated strong algorithmic thinking and problem-solving abilities",
      date: "Ongoing",
      icon: <Code className="text-green-600" size={24} />,
      type: "Programming",
      color: "green"
    },
    {
      title: "Skillrack Top Performer",
      description: "Ranked among top performers with overall rank of 21,000 on Skillrack platform",
      date: "Ongoing",
      icon: <Star className="text-orange-600" size={24} />,
      type: "Ranking",
      color: "orange"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-50 border-blue-200",
      yellow: "bg-yellow-50 border-yellow-200",
      purple: "bg-purple-50 border-purple-200",
      green: "bg-green-50 border-green-200",
      orange: "bg-orange-50 border-orange-200"
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="achievements" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Achievements & Recognition</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Milestones and recognitions that mark my journey in technology and development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className={`${getColorClasses(achievement.color)} border-2 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 bg-white`}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 p-3 bg-white rounded-full shadow-md">
                  {achievement.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                      {achievement.type}
                    </span>
                    <span className="text-sm text-gray-400">{achievement.date}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2 leading-tight">
                    {achievement.title}
                  </h3>
                </div>
              </div>
              
              <p className="text-gray-600 leading-relaxed">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">Achievement Stats</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">1</div>
              <p className="text-gray-600 text-sm">Certification</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-600 mb-2">1</div>
              <p className="text-gray-600 text-sm">Hackathon Selection</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">2</div>
              <p className="text-gray-600 text-sm">Competitions</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">150+</div>
              <p className="text-gray-600 text-sm">Problems Solved</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">21K</div>
              <p className="text-gray-600 text-sm">Global Rank</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
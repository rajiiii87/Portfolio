import React from 'react';
// import { Mail, Phone, MapPin } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-100 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-left">
            {/* <p className="text-lg text-gray-600 mb-4">I'm Rajalakshmi</p> */}
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Full Stack
              <br />
              <span className="text-gray-800">Developer</span>
            </h1>
            
            <div className="flex items-center gap-4 mb-8">
              <span className="px-4 py-2 bg-gray-100 rounded-full text-gray-700 font-medium">Design</span>
              <div className="w-2 h-2 bg-gray-400 star"></div>
              <span className="px-4 py-2 bg-gray-100 rounded-full text-gray-700 font-medium">Development</span>
            </div>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg">
              As a passionate and skilled full stack developer with expertise to create 
              amazing digital experiences through website designs, user interfaces and 
              implementing code to bring ideas to life.
            </p>

            <div className="flex items-center gap-6">
              <span className="text-gray-700 font-medium">Got a project?</span>
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:-translate-y-1"
              >
                Let's Talk.
              </button>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop&crop=face"
                  alt="Rajalakshmi J - Full Stack Developer"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full"></div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-green-400 rounded-full opacity-80"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
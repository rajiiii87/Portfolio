import React from "react";
// import { GraduationCap } from "lucide-react";

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-800 mb-3">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded"></div>
        </div>

        {/* Grid with auto + 1fr instead of 50/50 */}
        <div className="grid lg:grid-cols-[auto,1fr] gap-8 items-center">
          
          {/* Profile Image + Resume */}
          <div className="flex flex-col items-center lg:items-start">
            <div className="w-64 h-64 rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/public/raji_pic.jpg"
                alt="Rajalakshmi J - Full Stack Developer"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            <a
              href="/public/Rajalakshmi_resume.pdf"
              download="Rajalakshmi_J_Resume.pdf"
              className="mt-6 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 
                  01-2-2V5a2 2 0 012-2h5.586a1 1 0 
                  01.707.293l5.414 5.414a1 1 0 
                  01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Download Resume
            </a>
          </div>

          {/* About Content */}
          <div className="space-y-8">

            <p className="text-lg text-gray-600 leading-relaxed">
              I am an enthusiastic undergraduate student with a strong foundation in Full Stack Development, Front-End Technologies, and User Interface & User Experience (UI/UX).
              Passionate about crafting seamless and user-centric digital solutions, I thrive on applying creative problem-solving and technical expertise to real-world challenges.
              <br></br><br></br>
                I am eager to contribute to innovative projects where I can leverage my skills, collaborate with dynamic teams, and continue to grow both personally and professionally. My ultimate goal is to deliver solutions that not only function efficiently but also provide meaningful and engaging user experiences.

            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-5 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg shadow">
                <div className="text-3xl font-bold text-blue-600 mb-1">
                  150+
                </div>
                <p className="text-gray-600">LeetCode Problems</p>
              </div>
              <div className="text-center p-5 bg-gradient-to-br from-purple-50 to-pink-100 rounded-lg shadow">
                <div className="text-3xl font-bold text-purple-600 mb-1">
                  21K
                </div>
                <p className="text-gray-600">Skillrack Rank</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;


            {/* Education */}
            // <div>
            //   <h3 className="text-2xl font-semibold text-gray-800 flex items-center gap-2 mb-5">
            //     <GraduationCap className="text-blue-600" size={26} />
            //     Education
            //   </h3>

            //   <div className="space-y-4">
            //     <div className="p-5 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border-l-4 border-blue-600 shadow-sm">
            //       <div className="flex justify-between items-center">
            //         <h4 className="text-lg font-semibold text-gray-800">
            //           B.E. Computer Science Engineering
            //         </h4>
            //         <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
            //           CGPA: 8.58/10
            //         </span>
            //       </div>
            //       <p className="text-gray-600 mt-1">
            //         Kamaraj College of Engineering and Technology
            //       </p>
            //       <p className="text-sm text-gray-500">Up to 5th Semester</p>
            //     </div>

            //     <div className="p-5 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border-l-4 border-blue-600 shadow-sm">
            //       <div className="flex justify-between items-center">
            //         <h4 className="text-lg font-semibold text-gray-800">
            //           Higher Secondary Certificate
            //         </h4>
            //         <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
            //           89%
            //         </span>
            //       </div>
            //       <p className="text-gray-600 mt-1">
            //         Kshatriya Girls Higher Secondary School
            //       </p>
            //     </div>
            //   </div>
            // </div>

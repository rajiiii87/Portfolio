import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Voice Assisted Shopping App",
      description: "Designed a mobile app enabling An accessible voice-driven e-commerce platform for visually impaired users, integrating Google Gemini API for product search, cart management, and checkout, eliminating the need for visual interaction entirely",
      technologies: ["Next.js", "MongoDB", "Gemini API"],
      demoLink: "#",
      githubLink: "https://github.com/rajiiii87/Visual",
      image: "/Shopping.jpg"
    },
    {
      title: "Direct Market Access For Farmers",
      description: "Designed a mobile app enabling farmers to sell products at fair prices, improving income transparency and connecting them directly with consumers.",
      technologies: ["Flutter", "Node.js", "PostMan", "MongoDB"],
      demoLink: "https://www.figma.com/proto/UVejElj4Wo4sgvEBhZ60vs/Untitled?node-id=18-88&starting-point-node-id=18%3A88&t=EsE899AxgcC2lLjS-1",
      githubLink: "#",
      image: "/Agri.jpg"
    },
    {
      title: "Billing Management System",
      description: "Built a real-time billing system for a retail client, featuring dynamic invoice generation, itemised billing, and printable receipt output. Responsive dashboards for tracking customer transactions and outstanding balances, reducing manual billing effort and eliminating paperwork errors for the client.",
      technologies: ["HTML","CSS","JavaScript", "Node.js", "Express" , "MongoDB"],
      demoLink: "#",
      githubLink: "https://github.com/rajiiii87/Nagamani",
      image: "/Billing.jpg"
    },
    {
      title: "Event Booking Website",
      description: "Developed a comprehensive event booking platform with booking management system, email notifications, and real-time availability updates.",
      technologies: ["HTML","CSS","JavaScript", "Node.js", "Express" , "MongoDB"],
      demoLink: "#",
      githubLink: "https://github.com/rajiiii87/VPT",
      image: "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop"
    },
    {
      title: "Task Tracker Website",
      description: "Built a drag-and-drop task tracker with role-based access control, real-time task management, and collaborative features for team productivity.",
      technologies: ["HTML", "CSS","Javascript",  "Node.js", "Express" , "MongoDB"],
      demoLink: "#",
      githubLink: "https://github.com/rajiiii87/task-tracker",
      image: "/Task.jpg"
    },
    {
      title: "Blog Website",
      description: "Designed a modern and user-friendly blog website with responsive design and easy content management.",
      technologies: ["React.js",  "Node.js", "Express" , "MongoDB"],
      demoLink: "#",
      githubLink: "https://github.com/rajiiii87/blog",
      image: "/Blog.jpg"
    },
    {
      title: "Food Delivery App UI/UX Design",
      description: "Designed a mobile app enabling a modern and user-friendly food delivery app UI/UX in Figma with a seamless ordering experience",
      technologies: ["Figma", "UI/UX Design", "Prototyping"],
      demoLink: "https://www.figma.com/proto/Zm8tCvvaAfpXFPV06zoTI0/Untitled?node-id=63-19&starting-point-node-id=63%3A19&t=o9Jmz6TWeLbiHqpE-1",
      githubLink: "#",
      image: "/Food.jpg"
    }

  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in full-stack development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Project Image */}
              <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex gap-4">
                  {project.demoLink !== "#" && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 border border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 px-4 py-2 rounded-lg font-medium transition-colors"
                  >
                    <Github size={16} />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
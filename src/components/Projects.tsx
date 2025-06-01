// import React from 'react';
// import { ExternalLink, Github } from 'lucide-react';

// const Projects = () => {
//   const projects = [
//     // {
//     //   title: "House Price Prediction",
//     //   description: "A comprehensive machine learning project using linear regression to predict house prices based on various features like location, size, and amenities. Implemented data preprocessing, feature engineering, and model evaluation techniques.",
//     //   technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
//     //   category: "Machine Learning"
//     // },
//     {
//       title: "Quiz Master Web Application",
//       description: "An interactive web-based quiz platform built with Flask framework. Features include user authentication, dynamic question generation, real-time scoring, and comprehensive admin dashboard for managing quizzes and users.",
//       technologies: ["Python", "Flask", "HTML", "CSS", "JavaScript", "SQLite"],
//       category: "Web Development"
//     },
//     {
//       title: "TDS Virtual TA",
//       description: "An AI-powered Teaching Assistant that answers student queries using scraped Discourse data and course content. Built a FastAPI backend, integrated OpenAI for smart responses, and evaluated performance using promptfoo.",
//       technologies: ["Python", "FastAPI", "OpenAI API", "BeautifulSoup", "Promptfoo"],
//       category: "AI Assistant"
//     }
//   ];

//   return (
//     <section id="projects" className="py-20" style={{ backgroundColor: '#2D2D2D' }}>
//       <div className="container mx-auto px-6">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold mb-4 hover:scale-105 transition-transform duration-500"
//               style={{ color: '#F4D35E' }}>
//             Featured Projects
//           </h2>
//           <div className="w-24 h-1 mx-auto mb-4 transition-all duration-500 hover:w-32"
//                style={{ backgroundColor: '#B68973' }}></div>
//           <p className="text-lg max-w-2xl mx-auto transition-colors duration-300"
//              style={{ color: '#E5E5E5' }}>
//             A showcase of my recent work in machine learning and web development
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 gap-8">
//           {projects.map((project, index) => (
//             <div
//               key={index}
//               className="group rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 border overflow-hidden"
//               style={{ backgroundColor: '#121212', borderColor: '#2D2D2D' }}
//             >
//               <div className="h-2 transition-all duration-300 group-hover:h-3"
//                    style={{ backgroundColor: index === 0 ? '#B68973' : index === 1 ? '#F4D35E' : '#B68973' }}></div>
              
//               <div className="p-8">
//                 <div className="flex items-center justify-between mb-4">
//                   <span className="px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 group-hover:scale-110"
//                         style={{ 
//                           backgroundColor: index === 0 ? '#B68973' : index === 1 ? '#F4D35E' : '#B68973', 
//                           color: '#121212' 
//                         }}>
//                     {project.category}
//                   </span>
//                 </div>
                
//                 <h3 className="text-2xl font-bold mb-4 transition-all duration-300 group-hover:scale-105"
//                     style={{ color: '#E5E5E5' }}>
//                   {project.title}
//                 </h3>
                
//                 <p className="mb-6 leading-relaxed transition-colors duration-300"
//                    style={{ color: '#E5E5E5' }}>
//                   {project.description}
//                 </p>
                
//                 <div className="flex flex-wrap gap-2 mb-6">
//                   {project.technologies.map((tech, techIndex) => (
//                     <span
//                       key={techIndex}
//                       className="px-3 py-1 rounded-full text-sm font-medium hover:scale-110 transition-all duration-300 cursor-pointer"
//                       style={{ 
//                         backgroundColor: '#2D2D2D', 
//                         color: '#E5E5E5' 
//                       }}
//                       onMouseEnter={(e) => {
//                         e.target.style.backgroundColor = '#B68973';
//                         e.target.style.color = '#121212';
//                       }}
//                       onMouseLeave={(e) => {
//                         e.target.style.backgroundColor = '#2D2D2D';
//                         e.target.style.color = '#E5E5E5';
//                       }}
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
                
//                 <div className="flex space-x-4">
//                   <a
//                     href="https://github.com/23f1001716/tds-p1"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center space-x-2 font-medium transition-all duration-300 hover:scale-110 group/btn"
//                     style={{ color: '#B68973' }}
//                   >
//                     <Github className="w-5 h-5 group-hover/btn:scale-110 transition-transform duration-300" />
//                     <span>Code</span>
//                   </a>
//                   <a
//                     href="https://your-api-url.com" // Replace with your actual API/demo URL
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center space-x-2 font-medium transition-all duration-300 hover:scale-110 group/btn"
//                     style={{ color: '#F4D35E' }}
//                   >
//                     <ExternalLink className="w-5 h-5 group-hover/btn:scale-110 transition-transform duration-300" />
//                     <span>Demo</span>
//                   </a>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;



import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Quiz Master Web Application",
      description:
        "An interactive web-based quiz platform built with Flask framework. Features include user authentication, dynamic question generation, real-time scoring, and comprehensive admin dashboard for managing quizzes and users.",
      technologies: ["Python", "Flask", "HTML", "CSS", "JavaScript", "SQLite"],
      category: "Web Development",
      github: "https://github.com/23f1001716/mad1-quiz-master.git", 
      demo: "https://quizmaster-akshaya.netlify.app"       
    },
    {
      title: "TDS Virtual TA",
      description:
        "An AI-powered Teaching Assistant that answers student queries using scraped Discourse data and course content. Built a FastAPI backend, integrated OpenAI for smart responses, and evaluated performance using promptfoo.",
      technologies: ["Python", "FastAPI", "OpenAI API", "BeautifulSoup", "Promptfoo"],
      category: "AI Assistant",
      github: "https://github.com/23f1001716/tds-p1",
      demo: "https://tds-ta-api.akshaya.live" // Replace with your deployed API/demo
    }
  ];

  return (
    <section id="projects" className="py-20" style={{ backgroundColor: '#2D2D2D' }}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold mb-4 hover:scale-105 transition-transform duration-500"
            style={{ color: '#F4D35E' }}
          >
            Featured Projects
          </h2>
          <div
            className="w-24 h-1 mx-auto mb-4 transition-all duration-500 hover:w-32"
            style={{ backgroundColor: '#B68973' }}
          ></div>
          <p
            className="text-lg max-w-2xl mx-auto transition-colors duration-300"
            style={{ color: '#E5E5E5' }}
          >
            A showcase of my recent work in machine learning and web development
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 border overflow-hidden"
              style={{ backgroundColor: '#121212', borderColor: '#2D2D2D' }}
            >
              <div
                className="h-2 transition-all duration-300 group-hover:h-3"
                style={{
                  backgroundColor:
                    index % 2 === 0 ? '#B68973' : '#F4D35E'
                }}
              ></div>

              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 group-hover:scale-110"
                    style={{
                      backgroundColor:
                        index % 2 === 0 ? '#B68973' : '#F4D35E',
                      color: '#121212'
                    }}
                  >
                    {project.category}
                  </span>
                </div>

                <h3
                  className="text-2xl font-bold mb-4 transition-all duration-300 group-hover:scale-105"
                  style={{ color: '#E5E5E5' }}
                >
                  {project.title}
                </h3>

                <p
                  className="mb-6 leading-relaxed transition-colors duration-300"
                  style={{ color: '#E5E5E5' }}
                >
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 rounded-full text-sm font-medium hover:scale-110 transition-all duration-300 cursor-pointer"
                      style={{
                        backgroundColor: '#2D2D2D',
                        color: '#E5E5E5'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = '#B68973';
                        e.target.style.color = '#121212';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = '#2D2D2D';
                        e.target.style.color = '#E5E5E5';
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 font-medium transition-all duration-300 hover:scale-110 group/btn"
                    style={{ color: '#B68973' }}
                  >
                    <Github className="w-5 h-5 group-hover/btn:scale-110 transition-transform duration-300" />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 font-medium transition-all duration-300 hover:scale-110 group/btn"
                    style={{ color: '#F4D35E' }}
                  >
                    <ExternalLink className="w-5 h-5 group-hover/btn:scale-110 transition-transform duration-300" />
                    <span>Demo</span>
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

// import { Linkedin, Github } from 'lucide-react';
// import React from 'react';
// import { ChevronDown } from 'lucide-react';

// const Hero = () => {
//   const scrollToAbout = () => {
//     const element = document.getElementById('about');
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <section className="min-h-screen flex items-center justify-center relative overflow-hidden"
//              style={{ backgroundColor: '#121212' }}>
//       <div className="absolute inset-0"
//            style={{ background: 'linear-gradient(135deg, rgba(182, 137, 115, 0.1) 0%, rgba(244, 211, 94, 0.1) 100%)' }}></div>
      
//       {/* Floating animation elements */}
//       <div className="absolute top-20 left-10 w-20 h-20 rounded-full animate-float"
//            style={{ background: 'linear-gradient(45deg, rgba(182, 137, 115, 0.2), rgba(244, 211, 94, 0.2))' }}></div>
//       <div className="absolute bottom-32 right-16 w-16 h-16 rounded-full animate-float"
//            style={{ background: 'linear-gradient(45deg, rgba(244, 211, 94, 0.2), rgba(182, 137, 115, 0.2))', animationDelay: '2s' }}></div>
//       <div className="absolute top-1/3 right-20 w-12 h-12 rounded-full animate-float"
//            style={{ background: 'linear-gradient(45deg, rgba(182, 137, 115, 0.3), rgba(244, 211, 94, 0.1))', animationDelay: '4s' }}></div>
      
//       <div className="container mx-auto px-6 text-center relative z-10">
//         <div className="animate-fade-in">
//           <h1 className="text-5xl md:text-7xl font-bold mb-6 transition-all duration-700 hover:scale-105"
//               style={{ color: '#F4D35E' }}>
//             Akshaya Muvva
//           </h1>
          
//           <div className="text-xl md:text-2xl mb-4 font-medium transform transition-all duration-500"
//                style={{ color: '#E5E5E5' }}
//                onMouseEnter={(e) => e.target.style.color = '#B68973'}
//                onMouseLeave={(e) => e.target.style.color = '#E5E5E5'}>
//             B.Tech Computer Science & Engineering
//           </div>

//           <div className="text-lg md:text-xl mb-8 transition-all duration-500 flex flex-col sm:flex-row items-center justify-center gap-4"
//      style={{ color: '#E5E5E5' }}>
//   <div
//     onMouseEnter={(e) => e.target.style.color = '#F4D35E'}
//     onMouseLeave={(e) => e.target.style.color = '#E5E5E5'}
//   >
//     Third Year Student | CGPA: <span className="font-bold" style={{ color: '#B68973' }}>9.76</span>
//   </div>

//   <div className="flex gap-4 mt-2 sm:mt-0">
//     <a href="https://www.linkedin.com/in/your-linkedin-username" target="_blank" rel="noopener noreferrer"
//        className="hover:scale-110 transition-transform duration-300">
//       <Linkedin size={24} color="#F4D35E" />
//     </a>
//     <a href="https://github.com/AkshayaMuvva" target="_blank" rel="noopener noreferrer"
//        className="hover:scale-110 transition-transform duration-300">
//       <Github size={24} color="#F4D35E" />
//     </a>
//   </div>
// </div>

          
//           <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed transform transition-all duration-700 hover:scale-105"
//              style={{ color: '#E5E5E5' }}>
//             Passionate about <span className="font-semibold" style={{ color: '#B68973' }}>Machine Learning</span> and 
//             <span className="font-semibold" style={{ color: '#F4D35E' }}> Data Science</span>, 
//             with a strong foundation in software development and problem-solving.
//           </p>
          
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <button
//               onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
//               className="px-8 py-3 rounded-full font-semibold hover:shadow-2xl transform hover:scale-110 transition-all duration-500 animate-pulse hover:animate-none"
//               style={{ backgroundColor: '#F4D35E', color: '#121212' }}
//               onMouseEnter={(e) => e.target.style.backgroundColor = '#B68973'}
//               onMouseLeave={(e) => e.target.style.backgroundColor = '#F4D35E'}
//             >
//               View My Work
//             </button>
//             <button
//               onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
//               className="border-2 px-8 py-3 rounded-full font-semibold hover:shadow-2xl transform hover:scale-110 transition-all duration-500"
//               style={{ borderColor: '#B68973', color: '#B68973' }}
//               onMouseEnter={(e) => {
//                 e.target.style.backgroundColor = '#B68973';
//                 e.target.style.color = '#121212';
//               }}
//               onMouseLeave={(e) => {
//                 e.target.style.backgroundColor = 'transparent';
//                 e.target.style.color = '#B68973';
//               }}
//             >
//               Get In Touch
//             </button>
//           </div>
//         </div>
//       </div>
      
//       <button
//         onClick={scrollToAbout}
//         className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hover:animate-pulse transition-all duration-300 hover:scale-125"
//         style={{ color: '#E5E5E5' }}
//         onMouseEnter={(e) => e.target.style.color = '#B68973'}
//         onMouseLeave={(e) => e.target.style.color = '#E5E5E5'}
//       >
//         <ChevronDown className="w-8 h-8 transition-colors duration-300" />
//       </button>
//     </section>
//   );
// };

// export default Hero;


import { Linkedin, Github, ChevronDown } from 'lucide-react';
import React from 'react';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden"
             style={{ backgroundColor: '#121212' }}>
      <div className="absolute inset-0"
           style={{ background: 'linear-gradient(135deg, rgba(182, 137, 115, 0.1) 0%, rgba(244, 211, 94, 0.1) 100%)' }}></div>
      
      {/* Floating animation elements */}
      <div className="absolute top-20 left-10 w-20 h-20 rounded-full animate-float"
           style={{ background: 'linear-gradient(45deg, rgba(182, 137, 115, 0.2), rgba(244, 211, 94, 0.2))' }}></div>
      <div className="absolute bottom-32 right-16 w-16 h-16 rounded-full animate-float"
           style={{ background: 'linear-gradient(45deg, rgba(244, 211, 94, 0.2), rgba(182, 137, 115, 0.2))', animationDelay: '2s' }}></div>
      <div className="absolute top-1/3 right-20 w-12 h-12 rounded-full animate-float"
           style={{ background: 'linear-gradient(45deg, rgba(182, 137, 115, 0.3), rgba(244, 211, 94, 0.1))', animationDelay: '4s' }}></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 transition-all duration-700 hover:scale-105"
              style={{ color: '#F4D35E' }}>
            Akshaya Muvva
          </h1>

          <div className="text-xl md:text-2xl mb-4 font-medium transform transition-all duration-500"
               style={{ color: '#E5E5E5' }}
               onMouseEnter={(e) => e.target.style.color = '#B68973'}
               onMouseLeave={(e) => e.target.style.color = '#E5E5E5'}>
            B.Tech Computer Science & Engineering
          </div>

          <div className="flex gap-4 justify-center mb-8">
            <a href="https://www.linkedin.com/in/akshaya-muvva-041b20258" target="_blank" rel="noopener noreferrer"
               className="hover:scale-110 transition-transform duration-300">
              <Linkedin size={24} color="#F4D35E" />
            </a>
            <a href="https://github.com/23f1001716" target="_blank" rel="noopener noreferrer"
               className="hover:scale-110 transition-transform duration-300">
              <Github size={24} color="#F4D35E" />
            </a>
          </div>

          <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed transform transition-all duration-700 hover:scale-105"
             style={{ color: '#E5E5E5' }}>
            Passionate about <span className="font-semibold" style={{ color: '#B68973' }}>Machine Learning</span> and 
            <span className="font-semibold" style={{ color: '#F4D35E' }}> Data Science</span>, 
            with a strong foundation in software development and problem-solving.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 rounded-full font-semibold hover:shadow-2xl transform hover:scale-110 transition-all duration-500 animate-pulse hover:animate-none"
              style={{ backgroundColor: '#F4D35E', color: '#121212' }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#B68973'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#F4D35E'}
            >
              View My Work
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 px-8 py-3 rounded-full font-semibold hover:shadow-2xl transform hover:scale-110 transition-all duration-500"
              style={{ borderColor: '#B68973', color: '#B68973' }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#B68973';
                e.target.style.color = '#121212';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = '#B68973';
              }}
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
      
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hover:animate-pulse transition-all duration-300 hover:scale-125"
        style={{ color: '#E5E5E5' }}
        onMouseEnter={(e) => e.target.style.color = '#B68973'}
        onMouseLeave={(e) => e.target.style.color = '#E5E5E5'}>
        <ChevronDown className="w-8 h-8 transition-colors duration-300" />
      </button>
    </section>
  );
};

export default Hero;

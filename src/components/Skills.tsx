
import React from 'react';
import { Code, Database, Brain } from 'lucide-react';

const Skills = () => {
  const programmingLanguages = [
    'Java', 'Python', 'C', 'HTML', 'CSS', 'JavaScript'
  ];

  const frameworks = [
    'Scikit-learn', 'Flask', 'NumPy', 'Pandas'
  ];

  const databases = [
    'SQLite', 'MySQL', 'MongoDB'
  ];

  const SkillCard = ({ title, skills, icon: Icon }: any) => (
    <div className="p-6 rounded-xl border backdrop-blur-sm transform transition-all duration-500 hover:scale-105 hover:shadow-2xl group"
         style={{ backgroundColor: '#121212', borderColor: '#2D2D2D' }}>
      <div className="flex items-center mb-6">
        <Icon className="w-8 h-8 mr-3 transition-all duration-300 group-hover:scale-110"
              style={{ color: '#B68973' }} />
        <h3 className="text-xl font-semibold transition-colors duration-300"
            style={{ color: '#E5E5E5' }}>{title}</h3>
      </div>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill: any, index: number) => (
          <span
            key={index}
            className="px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300 hover:scale-105 cursor-default"
            style={{ 
              backgroundColor: 'rgba(45, 45, 45, 0.5)', 
              color: '#E5E5E5', 
              borderColor: '#2D2D2D' 
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = 'rgba(182, 137, 115, 0.2)';
              e.target.style.color = '#B68973';
              e.target.style.borderColor = '#B68973';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'rgba(45, 45, 45, 0.5)';
              e.target.style.color = '#E5E5E5';
              e.target.style.borderColor = '#2D2D2D';
            }}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20" style={{ backgroundColor: '#121212' }}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 hover:scale-105 transition-transform duration-500"
              style={{ color: '#F4D35E' }}>
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 mx-auto mb-4 transition-all duration-500 hover:w-32"
               style={{ backgroundColor: '#B68973' }}></div>
          <p className="text-lg max-w-2xl mx-auto transition-colors duration-300"
             style={{ color: '#E5E5E5' }}>
            A comprehensive skill set spanning programming languages, frameworks, and databases
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <SkillCard
            title="Programming Languages"
            skills={programmingLanguages}
            icon={Code}
          />
          
          <SkillCard
            title="ML/Data Science"
            skills={frameworks}
            icon={Brain}
          />
          
          <SkillCard
            title="Databases"
            skills={databases}
            icon={Database}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;

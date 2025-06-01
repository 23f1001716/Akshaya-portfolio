
import React from 'react';
import { Trophy, Award, Users } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      title: "IIIT Sricity College Agentica Hackathon",
      subtitle: "Consolation Prize - 4th Place",
      description: "Secured 4th position among 200+ participating teams in a competitive hackathon focused on innovative technology solutions.",
      icon: Trophy,
      rank: "4th / 200+ teams"
    },
    {
      title: "Design Thinking Expo",
      subtitle: "1st Place Winner",
      description: "Achieved first place in the Design Thinking Expo, demonstrating exceptional problem-solving and innovative thinking capabilities.",
      icon: Award,
      rank: "1st Place"
    }
  ];

  return (
    <section id="achievements" className="py-20" style={{ backgroundColor: '#121212' }}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 hover:scale-105 transition-transform duration-500"
              style={{ color: '#F4D35E' }}>
            Achievements
          </h2>
          <div className="w-24 h-1 mx-auto mb-4 transition-all duration-500 hover:w-32"
               style={{ backgroundColor: '#B68973' }}></div>
          <p className="text-lg max-w-2xl mx-auto transition-colors duration-300"
             style={{ color: '#E5E5E5' }}>
            Recognition for excellence in competitions and academic pursuits
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 border"
              style={{ backgroundColor: '#2D2D2D', borderColor: '#B68973' }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 opacity-10 transition-all duration-500 group-hover:opacity-20">
                <achievement.icon className="w-full h-full" style={{ color: '#B68973' }} />
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-full mr-4 transition-all duration-300 group-hover:scale-110"
                       style={{ backgroundColor: index === 0 ? '#B68973' : '#F4D35E' }}>
                    <achievement.icon className="w-8 h-8" style={{ color: '#121212' }} />
                  </div>
                  <div className="px-4 py-2 rounded-full font-bold text-sm transition-all duration-300 group-hover:scale-110"
                       style={{ 
                         backgroundColor: index === 0 ? '#B68973' : '#F4D35E', 
                         color: '#121212' 
                       }}>
                    {achievement.rank}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-2 transition-colors duration-300"
                    style={{ color: '#E5E5E5' }}>
                  {achievement.title}
                </h3>
                
                <h4 className="text-lg font-semibold mb-4"
                    style={{ color: index === 0 ? '#B68973' : '#F4D35E' }}>
                  {achievement.subtitle}
                </h4>
                
                <p className="leading-relaxed transition-colors duration-300"
                   style={{ color: '#E5E5E5' }}>
                  {achievement.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center rounded-full px-6 py-3 shadow-lg border hover:shadow-2xl hover:scale-105 transition-all duration-500"
               style={{ backgroundColor: '#2D2D2D', borderColor: '#B68973' }}>
            <Users className="w-6 h-6 mr-3 transition-colors duration-300"
                   style={{ color: '#B68973' }} />
            <span className="font-medium" style={{ color: '#E5E5E5' }}>
              Consistently performing in top percentiles across competitions
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;

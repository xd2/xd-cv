import React from 'react';
import { Experience as ExperienceType } from '../data/profile';

interface ExperienceProps {
  experiences: ExperienceType[];
}

const Experience: React.FC<ExperienceProps> = ({ experiences }) => {
  return (
    <section className="py-16 bg-bg-light">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Expérience Professionnelle
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-royal-blue to-royal-blue-light mx-auto rounded"></div>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-royal-blue via-royal-blue-light to-accent-orange hidden lg:block"></div>
            
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center mb-8 lg:mb-10 animate-slide-up`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:text-right lg:pr-12' : 'lg:ml-auto lg:pl-12'}`}>
                  <div className="glass-effect rounded-2xl p-6 shadow-elegant hover-lift group">
                    <div className="flex items-start justify-between mb-4">
                      <div className={index % 2 === 0 ? 'lg:text-right' : ''}>
                        <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                          {exp.title}
                        </h3>
                        <h4 className="text-lg font-semibold text-royal-blue mb-2">
                          {exp.company}
                        </h4>
                        <p className="text-sm text-gray-500 mb-4 font-medium">
                          {exp.period}
                        </p>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      {exp.description}
                    </p>
                    
                    {exp.technologies && (
                      <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'lg:justify-end' : 'lg:justify-start'}`}>
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="skill-tag text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 z-10">
                  <div className="w-12 h-12 bg-gradient-to-r from-royal-blue to-royal-blue-light rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                    <i className="fas fa-briefcase text-white"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
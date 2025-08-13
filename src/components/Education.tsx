import React from 'react';
import { Education as EducationType } from '../data/profile';

interface EducationProps {
  education: EducationType[];
}

const Education: React.FC<EducationProps> = ({ education }) => {
  return (
    <section className="py-16 bg-bg-light">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Formation
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-royal-blue to-royal-blue-light mx-auto rounded"></div>
          </div>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <div
                key={index}
                className="glass-effect rounded-2xl p-8 shadow-elegant hover-lift animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <div className="mb-4 lg:mb-0">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      {edu.degree}
                    </h3>
                    <div className="flex items-center gap-3 mb-2">
                      {edu.logo && (
                        <img
                          src={edu.logo}
                          alt={`${edu.school} logo`}
                          className="w-6 h-6 object-contain rounded bg-white"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                          }}
                        />
                      )}
                      <h4 className="text-xl font-semibold text-royal-blue">
                        {edu.school}
                      </h4>
                    </div>
                    {edu.description && (
                      <p className="text-gray-700 leading-relaxed">
                        {edu.description}
                      </p>
                    )}
                  </div>
                  
                  <div className="flex items-center gap-2 text-gray-600">
                    <div className="w-10 h-10 bg-gradient-to-r from-royal-blue to-royal-blue-light rounded-full flex items-center justify-center">
                      <i className="fas fa-calendar text-white"></i>
                    </div>
                    <span className="font-semibold text-lg whitespace-nowrap">
                      {edu.period}
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                  <div className="w-6 h-6 bg-gradient-to-r from-accent-orange to-royal-blue rounded-full flex items-center justify-center">
                    <i className="fas fa-graduation-cap text-white text-xs"></i>
                  </div>
                  <span className="text-sm text-gray-600 font-medium">
                    Certification obtenue
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
import React from 'react';
import { ProfileData } from '../data/profile';

interface SkillsProps {
  skills: ProfileData['skills'];
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  const categories = [
    { key: 'technical' as const, label: 'Technical Skills', icon: 'fas fa-code', gradient: 'from-royal-blue to-royal-blue-light' },
    { key: 'tools' as const, label: 'Tools & Technologies', icon: 'fas fa-tools', gradient: 'from-royal-blue-light to-accent-orange' },
    { key: 'soft' as const, label: 'Soft Skills', icon: 'fas fa-users', gradient: 'from-accent-orange to-royal-blue' }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Skills
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-royal-blue to-royal-blue-light mx-auto rounded"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {categories.map((category, categoryIndex) => (
              <div
                key={category.key}
                className="glass-effect rounded-2xl p-6 shadow-elegant animate-slide-up"
                style={{ animationDelay: `${categoryIndex * 0.2}s` }}
              >
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${category.gradient} mx-auto mb-4 flex items-center justify-center`}>
                    <i className={`${category.icon} text-white text-2xl`}></i>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">
                    {category.label}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2 justify-center">
                  {skills[category.key].map((skill, index) => {
                    const label = typeof skill === 'string' ? skill : (skill as any).description;
                    return (
                      <span
                        key={`${category.key}-${index}`}
                        className="skill-tag text-xs"
                        style={{ animationDelay: `${(categoryIndex * 10 + index) * 0.05}s` }}
                      >
                        {label}
                      </span>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="glass-effect rounded-2xl p-6 shadow-elegant animate-slide-up">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-royal-blue to-royal-blue-light rounded-full flex items-center justify-center">
                  <i className="fas fa-language text-white text-sm"></i>
                </div>
                Languages
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-800">Français</span>
                  <span className="bg-gradient-to-r from-royal-blue to-royal-blue-light text-white px-3 py-1 rounded-full text-sm font-medium">
                    Langue maternelle
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-800">Anglais</span>
                  <span className="bg-gradient-to-r from-royal-blue-light to-accent-orange text-white px-3 py-1 rounded-full text-sm font-medium">
                    Professionnel
                  </span>
                </div>
              </div>
            </div>

            <div className="glass-effect rounded-2xl p-6 shadow-elegant animate-slide-up">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-accent-orange to-royal-blue rounded-full flex items-center justify-center">
                  <i className="fas fa-heart text-white text-sm"></i>
                </div>
                Interests
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Chant Opéra', 'Ébénisterie', 'Sports & Nature', 'Innovation Tech', 'Recherche IA'].map((interest, index) => (
                  <span
                    key={index}
                    className="bg-gradient-to-r from-accent-orange to-royal-blue text-white px-3 py-1 rounded-full text-sm font-medium hover:scale-105 transition-transform cursor-default"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
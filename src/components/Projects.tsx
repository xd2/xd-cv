import React from 'react';
import { Project } from '../data/profile';

interface ProjectsProps {
  projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Projets Marquants
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-royal-blue to-royal-blue-light mx-auto rounded"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group glass-effect rounded-2xl p-8 shadow-elegant hover-lift animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 group-hover:text-royal-blue transition-colors mb-2">
                      {project.name}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  
                  <div className="w-12 h-12 bg-gradient-to-r from-royal-blue to-royal-blue-light rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0 ml-4">
                    <i className="fas fa-rocket text-white"></i>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-600 mb-3 uppercase tracking-wider">
                    Technologies utilisées
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="skill-tag text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {(project.link || project.github) && (
                  <div className="flex gap-4 pt-4 border-t border-gray-200">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-royal-blue hover:text-royal-blue-dark font-semibold transition-colors group-hover:scale-105 duration-300"
                      >
                        <i className="fas fa-external-link-alt"></i>
                        <span>Voir le projet</span>
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-600 hover:text-gray-800 font-semibold transition-colors group-hover:scale-105 duration-300"
                      >
                        <i className="fab fa-github"></i>
                        <span>Code source</span>
                      </a>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="glass-effect rounded-2xl p-8 shadow-elegant animate-slide-up">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center justify-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-accent-orange to-royal-blue rounded-full flex items-center justify-center">
                  <i className="fas fa-lightbulb text-white text-sm"></i>
                </div>
                Innovation Continue
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
                Passionné par l'innovation technologique, je développe constamment de nouveaux projets 
                qui repoussent les limites de l'IA et créent de la valeur pour les utilisateurs. 
                Chaque projet est une opportunité d'explorer de nouvelles technologies et méthodologies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
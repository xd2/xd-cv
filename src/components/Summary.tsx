import React from 'react';
import { ProfileData } from '../data/profile';

interface SummaryProps {
  profile: ProfileData;
}

const Summary: React.FC<SummaryProps> = ({ profile }) => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              À propos
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-royal-blue to-royal-blue-light mx-auto rounded"></div>
          </div>
          
          <div className="glass-effect rounded-2xl p-8 shadow-elegant animate-slide-up">
            <p className="text-lg text-gray-700 leading-relaxed text-center">
              {profile.summary}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-royal-blue to-royal-blue-light rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <i className="fas fa-code text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">15+ Ans</h3>
                <p className="text-gray-600">d'expérience en développement</p>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-royal-blue-light to-accent-orange rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <i className="fas fa-rocket text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">3 Startups</h3>
                <p className="text-gray-600">fondées et dirigées</p>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-accent-orange to-royal-blue rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <i className="fas fa-brain text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">AI Expert</h3>
                <p className="text-gray-600">spécialisé en GenAI</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Summary;
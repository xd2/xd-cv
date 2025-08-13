import React from 'react';
import { ProfileData } from '../data/profile';

interface FooterProps {
  profile: ProfileData;
}

const Footer: React.FC<FooterProps> = ({ profile }) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <footer className="gradient-bg text-white py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">
              Intéressé par mon profil ?
            </h2>
            <p className="text-lg opacity-90 mb-8">
              N'hésitez pas à me contacter pour discuter de vos projets ou opportunités.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-2 glass-effect px-6 py-3 rounded-full hover:bg-white hover:bg-opacity-20 transition-all duration-300 hover-lift font-semibold"
              >
                <i className="fas fa-envelope"></i>
                <span>M'envoyer un email</span>
              </a>
              
              {profile.linkedin && (
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 glass-effect px-6 py-3 rounded-full hover:bg-white hover:bg-opacity-20 transition-all duration-300 hover-lift font-semibold"
                >
                  <i className="fab fa-linkedin"></i>
                  <span>LinkedIn</span>
                </a>
              )}
              
              {profile.website && (
                <a
                  href={profile.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 glass-effect px-6 py-3 rounded-full hover:bg-white hover:bg-opacity-20 transition-all duration-300 hover-lift font-semibold"
                >
                  <i className="fas fa-globe"></i>
                  <span>Mon site web</span>
                </a>
              )}
              
              <button
                onClick={handlePrint}
                className="flex items-center gap-2 glass-effect px-6 py-3 rounded-full hover:bg-white hover:bg-opacity-20 transition-all duration-300 hover-lift font-semibold no-print"
              >
                <i className="fas fa-print"></i>
                <span>Imprimer le CV</span>
              </button>
            </div>
          </div>
          
          <div className="border-t border-white border-opacity-20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-center md:text-left">
                <p className="font-semibold text-lg">{profile.name}</p>
                <p className="opacity-80">{profile.title}</p>
              </div>
              
              <div className="text-center md:text-right">
                <p className="opacity-80">CV généré avec React & Tailwind CSS</p>
                <p className="text-sm opacity-60">Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-royal-blue via-royal-blue-light to-accent-orange"></div>
    </footer>
  );
};

export default Footer;
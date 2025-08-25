import type { FC } from 'react';
import { ProfileData } from '../data/profile';
import profileImg from '../assets/xd.png';

interface HeaderProps {
  profile: ProfileData;
}

const Header: FC<HeaderProps> = ({ profile }) => {
  return (
    <header className="relative overflow-hidden gradient-bg text-white">
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="relative z-10 container mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="text-center lg:text-left mb-8 lg:mb-0 animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
              {profile.name}
            </h1>
            <h2 className="text-2xl lg:text-3xl font-light mb-2 opacity-90">
              {profile.title}
            </h2>
            <p className="text-lg opacity-80 font-medium">
              {profile.subtitle}
            </p>
            
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-6">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-2 glass-effect px-4 py-2 rounded-full hover:bg-white hover:bg-opacity-20 transition-all duration-300 hover-lift"
              >
                <i className="fas fa-envelope"></i>
                <span className="hidden sm:inline">{profile.email}</span>
              </a>
              <div className="flex items-center gap-2 glass-effect px-4 py-2 rounded-full">
                <i className="fas fa-map-marker-alt"></i>
                <span>{profile.location}</span>
              </div>
              {profile.linkedin && (
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 glass-effect px-4 py-2 rounded-full hover:bg-white hover:bg-opacity-20 transition-all duration-300 hover-lift"
                >
                  <i className="fab fa-linkedin"></i>
                  <span className="hidden sm:inline">LinkedIn</span>
                </a>
              )}
              {profile.website && (
                <a
                  href={profile.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 glass-effect px-4 py-2 rounded-full hover:bg-white hover:bg-opacity-20 transition-all duration-300 hover-lift"
                >
                  <i className="fas fa-globe"></i>
                  <span className="hidden sm:inline">Website</span>
                </a>
              )}
            </div>
          </div>
          
          <div className="animate-float">
            <div className="w-48 h-48 lg:w-64 lg:h-64 rounded-full bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg border border-white border-opacity-20 p-2">
              <div className="w-full h-full rounded-full overflow-hidden bg-white bg-opacity-20">
                <img 
                  src={profileImg} 
                  alt={profile.name}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-royal-blue via-royal-blue-light to-accent-orange"></div>
    </header>
  );
};

export default Header;
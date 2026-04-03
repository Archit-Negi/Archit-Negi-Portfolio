import React from 'react';
import { socialLinks, personalData } from '../config/data';

const Footer = () => {
  return (
    <footer className="w-full py-8 mt-20 border-t border-white/10 glass-nav z-10 relative">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start">
          <a href="#home" className="text-xl font-bold tracking-tighter text-white mb-2">
            {personalData.portfolioName}<span className="text-primary">.dev</span>
          </a>
          <p className="text-text/70 text-sm">
            &copy; {new Date().getFullYear()} {personalData.name}. All rights reserved.
          </p>
        </div>
        
        <div className="flex gap-6">
          {socialLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text/80 hover:text-primary transition-all duration-300 hover:-translate-y-1 transform bg-background/50 p-2 rounded-full border border-white/5 hover:border-primary/50"
                aria-label={link.name}
              >
                <Icon size={20} />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

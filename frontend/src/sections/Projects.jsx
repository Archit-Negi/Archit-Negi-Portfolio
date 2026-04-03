import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../config/data';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  return (
    <section id="projects" className="w-full py-24 px-6 relative z-10">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Projects</span>
          </h2>
          <p className="text-text/80 text-lg max-w-2xl mx-auto">
            A selection of my recent work focusing on solving real-world problems with scalable code and intuitive design.
          </p>
        </motion.div>

        <div className="flex flex-col gap-16">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center group`}
              >
                {/* Project Image Container */}
                <div className="w-full lg:w-1/2 overflow-hidden rounded-2xl glass border border-white/5 relative">
                  <div className="absolute inset-0 bg-primary/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-[300px] sm:h-[400px] object-cover object-top transform group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Project Info */}
                <div className={`w-full lg:w-1/2 flex flex-col ${isEven ? 'lg:items-start lg:text-left' : 'lg:items-end lg:text-right'} p-4`}>
                  <p className="text-primary font-medium tracking-wider mb-2 font-mono text-sm">Featured Project</p>
                  <h3 className="text-3xl font-bold text-white mb-6">{project.title}</h3>
                  <div className="glass p-6 rounded-xl border border-white/5 bg-card/90 shadow-xl mb-6 relative z-10 w-full lg:w-[110%] ${isEven ? '' : 'lg:-ml-[10%]'}">
                    <p className="text-text/90 leading-relaxed text-left">
                      {project.description}
                    </p>
                  </div>
                  
                  {/* Tech Stack Tags */}
                  <div className={`flex flex-wrap gap-3 mb-8 ${isEven ? 'justify-start' : 'lg:justify-end'}`}>
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-4 py-1 text-sm bg-background border border-primary/20 text-primary rounded-full font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className={`flex items-center gap-6 ${isEven ? 'justify-start' : 'justify-end'}`}>
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-text hover:text-white transition-colors flex items-center gap-2 hover:scale-110 transform duration-300"
                    >
                      <FaGithub size={24} />
                    </a>
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-text hover:text-primary transition-colors flex items-center gap-2 hover:scale-110 transform duration-300"
                    >
                      <FaExternalLinkAlt size={22} />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;

import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { projects } from '../config/data';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ project, isEven }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay: 0.2 }}
      className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center group`}
    >
      {/* Project Image Container with Tilt */}
      <motion.div 
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="w-full lg:w-1/2 overflow-hidden rounded-2xl glass border border-white/5 relative cursor-pointer"
      >
        <div 
          style={{ transform: "translateZ(50px)" }}
          className="absolute inset-0 bg-primary/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"
        ></div>
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-[300px] sm:h-[400px] object-cover object-top transition-all duration-700"
        />
      </motion.div>

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
};

const Projects = () => {
  return (
    <section id="projects" className="w-full py-24 px-6 relative z-10 overflow-visible">
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
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} isEven={index % 2 === 0} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

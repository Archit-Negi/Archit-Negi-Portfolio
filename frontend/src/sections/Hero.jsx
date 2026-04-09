import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import { personalData } from '../config/data';

const Magnetic = ({ children }) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.3, y: middleY * 0.3 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;
  return (
    <motion.div
      style={{ position: "relative" }}
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
    >
      {children}
    </motion.div>
  );
};

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center w-full px-6 pt-24 pb-12 relative overflow-hidden">
      <div className="container mx-auto flex flex-col items-center text-center max-w-5xl relative z-10">
        
        {/* Animated Greeting Pill */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="glass px-6 py-2 rounded-full mb-8 border-primary/30 flex items-center gap-3"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
          </span>
          <span className="text-sm font-medium tracking-widest uppercase text-text/80">Available for new opportunities</span>
        </motion.div>

        {/* Main Heading Text */}
        <motion.h1 
          className="text-5xl md:text-7xl lg:text-8xl font-black font-sans text-white mb-6 tracking-tighter leading-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Building Digital <br className="hidden md:block" />
          <span className="animate-shiny text-transparent bg-clip-text">
            Experiences
          </span>
        </motion.h1>
        
        {/* Role & Name */}
        <motion.p 
          className="text-xl md:text-2xl text-text/90 mb-8 max-w-2xl font-light"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Hi, I'm <span className="text-white font-semibold">{personalData.name}</span>, a {" "}
          <span className="text-primary font-medium">{personalData.title}</span> specializing in modern UI/UX and scalable backends.
        </motion.p>
        
        {/* CTA Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <Magnetic>
            <a 
              href="#projects" 
              className="group relative px-8 py-4 rounded-full bg-primary text-background font-bold flex items-center justify-center gap-3 hover:bg-white transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(102,252,241,0.4)]"
            >
              View My Projects 
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
          </Magnetic>
          <a 
            href="#contact" 
            className="px-8 py-4 rounded-full glass border border-white/10 text-white font-bold flex items-center justify-center gap-3 hover:bg-white/5 transition-all duration-300 hover:scale-105"
          >
            Let's Connect
          </a>
        </motion.div>
        
      </div>

      {/* Decorative background grid element */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] z-0 pointer-events-none"></div>
    </section>
  );
};

export default Hero;

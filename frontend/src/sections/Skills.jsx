import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../config/data';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 100 }
  },
};

const Skills = () => {
  return (
    <section id="skills" className="w-full py-24 px-6 relative z-10">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Tech <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Arsenal</span>
          </h2>
          <p className="text-text/80 text-lg max-w-2xl mx-auto">
            A comprehensive list of the tools and technologies I use to build scalable, modern web applications.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.05 }}
                className="glass p-6 rounded-2xl flex flex-col items-center justify-center gap-4 border border-white/5 hover:border-primary/50 hover:bg-white/5 transition-colors cursor-pointer group"
              >
                <div 
                  className="w-16 h-16 flex items-center justify-center rounded-xl bg-background/50 group-hover:bg-background transition-colors"
                  style={{ color: skill.color || '#fff' }}
                >
                  <Icon size={40} className="filter drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]" />
                </div>
                <span className="font-semibold text-text group-hover:text-white transition-colors text-sm text-center">
                  {skill.name}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

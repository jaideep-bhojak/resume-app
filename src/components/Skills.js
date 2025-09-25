// src/components/Skills.js
import React from 'react';
import resumeData from '../resumeData';
import { motion } from 'framer-motion';

const barVariants = {
  initial: { width: 0 },
  animate: (level) => ({
    width: `${level}%`,
    transition: { duration: 1 }
  })
};

const Skills = () => {
  return (
    <div className="skills">
      <h2>Skills</h2>
      <div className="skills-list">
        {resumeData.skills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <div key={index} className="skill-item">
              <div className="skill-label">
                <Icon className="skill-icon" />
                <p>{skill.name}</p>
              </div>
              <div className="skill-bar">
                <motion.div
                  className="skill-fill"
                  custom={skill.level}
                  initial="initial"
                  animate="animate"
                  variants={barVariants}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;

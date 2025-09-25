// src/components/Experience.js
import React from 'react';
import resumeData from '../resumeData';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      ease: 'easeOut'
    }
  })
};

const Experience = () => {
  return (
    <div className="experience">
      <h2>Experience</h2>
      <div className="experience-cards">
        {resumeData.experience.map((job, index) => (
          <motion.div
            className="experience-card"
            key={index}
            custom={index}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
          >
            <h3>{job.role}</h3>
            <h4>{job.company}</h4>
            <p className="duration">{job.duration}</p>
            <p>{job.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;

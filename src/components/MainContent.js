// src/components/MainContent.js
import React from 'react';
import resumeData from '../resumeData';
import Experience from './Experience';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import Skills from './Skills';

const MainContent = () => {
  const { name, title, location, bio, stats } = resumeData;

  return (
    <motion.div
      className="main-content"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <h1>I'm {name}, {title} based in {location}</h1>
      <p className="bio">{bio}</p>

      <div className="stats-expanded">
        <p><strong><CountUp end={stats.projects} duration={2} />+</strong> Projects</p>
        <p><strong><CountUp end={stats.experience} duration={2} />+</strong> Years Experience</p>
        {/* <p><strong><CountUp end={stats.clients} duration={2} />+</strong> Satisfied Clients</p>
        <p><strong><CountUp end={stats.awards} duration={2} />+</strong> Awards Received</p> */}
      </div>
      <Skills />
      <Experience />
    </motion.div>
  );
};

export default MainContent;

// src/components/Sidebar.js
import React from 'react';
import resumeData from '../resumeData';
import { motion } from 'framer-motion';
import profilePicture from '../assets/IMG.jpg';

const Sidebar = () => {
  const { name, title, location, available, contact, stats, company } = resumeData;

  return (
    <motion.div
      className="sidebar"
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <img src= {profilePicture} alt="Profile" className="profile-pic" />
      
      <h2>{name}</h2>
      <p>{title}</p>
      <p>{company}</p>
      <div className="contact">
        <p>Email: {contact.email}</p>
        <p>Phone: {contact.phone}</p>
        <a href={contact.social.linkedin} target="_blank">LinkedIn</a>
        {/* <a href={contact.dribbble}>Dribbble</a> */}
      </div>
      
    </motion.div>
  );
};

export default Sidebar;

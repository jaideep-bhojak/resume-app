// src/Resume.js
import React from 'react';
import resumeData from './resumeData';
import './Resume.css';

const Resume = () => {
  const { name, contact, summary, skills, experience } = resumeData;

  return (
    <div className="resume">
      <h1>{name}</h1>
      <p>Email: {contact.email} | Phone: {contact.phone}</p>

      <section>
        <h2>Summary</h2>
        <p>{summary}</p>
      </section>

      <section>
        <h2>Skills</h2>
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </section>

      <section className="experience-section">
        <h2 className="section-title">Experience</h2>
        {experience.map((job, index) => (
          <div key={index} className="job-card">
            <h3 className="job-title">{job.role}</h3>
            <p className="company-name">{job.company}</p>
            <p className="job-duration">{job.duration}</p>
            <ul className="job-description">
              {job.description.split('. ').map((point, i) => (
                <li key={i}>{point.trim().replace(/\.$/, '')}.</li>
              ))}
            </ul>
          </div>
        ))}
      </section>



    </div>
  );
};

export default Resume;

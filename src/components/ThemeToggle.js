// src/components/ThemeToggle.js
import React from 'react';

const ThemeToggle = ({ theme, setTheme }) => {
  return (
    <button className="theme-toggle" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
    </button>
  );
};

export default ThemeToggle;

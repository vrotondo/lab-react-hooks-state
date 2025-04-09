import React, { useState } from 'react';

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
    document.body.classList.toggle('dark-mode', !darkMode); // Apply dark mode class to the body
  };

  return (
    <button onClick={toggleDarkMode}>
      {darkMode ? 'Disable Dark Mode' : 'Enable Dark Mode'}
    </button>
  );
};

export default DarkModeToggle;
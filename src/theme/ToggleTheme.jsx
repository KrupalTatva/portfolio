import React from 'react';
import { useTheme } from './ThemeContext';

const ThemeToggle = () => {
  const { updateTheme } = useTheme();

  const switchToDark = () => {
    updateTheme();
  };

  const switchToLight = () => {
    updateTheme();
  };

  return (
    <div style={{ padding: '1rem' }}>
      <button onClick={switchToLight}>Light Theme</button>
      <button onClick={switchToDark} style={{ marginLeft: '10px' }}>
        Dark Theme
      </button>
    </div>
  );
};

export default ThemeToggle;

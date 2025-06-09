import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

const darkTheme = {
  '--primary-color': '#6CE800AA',
  '--hover-color': '#00FF1AFF',
  '--title-text-color': '#ffffff',
  '--header-text-color': '#00FF1AFF',
  '--social-icon-color': '#ffffff',
  '--network-node-color': '#84ff00',
  '--network-line-color': '#68C307FF',
  '--bg-black': '#000000AA',
  '--color-black': '#000000FF',
  '--bg-chip': '#ffffff1a',
};

const lightTheme = {
  '--primary-color': '#E8FFEA',            // light green background
  '--hover-color': '#C8FFD2',              // slightly darker for hover
  '--title-text-color': '#000000',         // dark text
  '--header-text-color': '#008000',        // deep green for header text
  '--social-icon-color': '#008000',        // green icons
  '--network-node-color': '#00A82D',       // vivid green for nodes
  '--network-line-color': '#9BE69F',       // light green lines
  '--bg-black': '#ffffffAA',    
  '--bg-chip': '#ffffff1a',             // white background
};



export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(darkTheme);

  useEffect(() => {
    // Apply theme variables to the root element
    const root = document.documentElement;
    Object.entries(theme).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });
  }, [theme]);

  const updateTheme = (newTheme) => {
    setTheme((prev) => ({ ...prev, ...newTheme }));
  };

  return (
    <ThemeContext.Provider value={{ theme, updateTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
export { darkTheme, lightTheme }; // Exporting both themes for flexibility

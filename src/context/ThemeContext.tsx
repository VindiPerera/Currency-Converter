import React, { createContext, useState, useMemo } from 'react';

type ThemeContextType = {
  isDarkMode: boolean;
  toggleTheme: () => void;
  styles: {
    backgroundColor: string;
    cardBackground: string;
    textColor: string;
    linkColor: string;
    iconColor: string;
    buttonBackground: string;
  buttonTextColor: string;
  headerBackgroundColor: string;
  headerTextColor: string;
    
  };
};

const defaultTheme = {
  isDarkMode: false,
  toggleTheme: () => {},
  styles: {
    backgroundColor: '#f4f4f4',
    cardBackground: '#fff',
    textColor: '#000',
    linkColor: 'blue',
    navItemColor: "#007BFF",
    iconColor: "#555",
    buttonBackground: "#4CAF50",
    buttonTextColor: "#fff",
    headerBackgroundColor: "#333",
    headerTextColor: "#fff",
  },
};


export const ThemeContext = createContext<ThemeContextType>(defaultTheme);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const theme = useMemo(
    () => ({
      isDarkMode,
      toggleTheme: () => setIsDarkMode((prevMode) => !prevMode),
      styles: isDarkMode
        ? {
            backgroundColor: '#121212',
            cardBackground: '#333',
            textColor: '#fff',
            linkColor: '#1e90ff',
            iconColor: "#bbb",
            buttonBackground: "#4CAF50",
  buttonTextColor: "#fff",
  headerBackgroundColor: "#f5f5f5",
  headerTextColor: "#333",
          }
        : {
            backgroundColor: '#f4f4f4',
            cardBackground: '#fff',
            textColor: '#000',
            linkColor: '#bfecff',
            iconColor: "#555",
            buttonBackground: "#007BFF",
            buttonTextColor: "#fff",
            headerBackgroundColor: "#333",
            headerTextColor: "#fff",

           
          },
    }),
    [isDarkMode]
  );

  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
};

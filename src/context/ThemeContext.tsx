import React, { createContext, useState, useContext, ReactNode } from "react";

type Theme = {
  backgroundColor: string;
  textColor: string;
  widgetBackground: string;
  widgetBorderColor: string;
};

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

const lightTheme: Theme = {
  backgroundColor: "#fff",
  textColor: "#333",
  widgetBackground: "#f9f9f9",
  widgetBorderColor: "#bfecff",
};

const darkTheme: Theme = {
  backgroundColor: "#333",
  textColor: "#fff",
  widgetBackground: "#555",
  widgetBorderColor: "#888",
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => setIsDark(!isDark);

  const theme = isDark ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

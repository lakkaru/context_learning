import { createContext, useContext, useState } from "react";

const ThemeContext = createContext('light'); //creating context

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    // console.log("toggle");
    setTheme(theme==='light'? 'dark':'light');
    // console.log(theme);
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

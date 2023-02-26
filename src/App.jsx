import { useEffect, useState } from "react";
import './App.css'
import { Test } from "./test";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
    {
      console.log(theme);
    }
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className={`App ${theme}`}>
      <Test />
    </div>
  );
}

export default App;

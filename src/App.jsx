import { useEffect, useState } from "react";
import "./App.css";
import { Test } from "./test";
import { ThemeContext } from "./Context/themeContext";
import { DataContext } from "./Context/dataContext";
import getPosts from "./Features/getPosts";

function App() {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);


  const [countries, setCountries] = useState(getPosts(5));

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <DataContext.Provider value={{ countries, setCountries }}>
        <div className={`App ${theme}`}>
          <Test />
        </div>
      </DataContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;

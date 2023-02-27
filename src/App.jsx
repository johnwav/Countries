import { useEffect, useState } from "react";
import "./App.css";
import { Test } from "./test";
import { themeContext } from "./Context/themeContext";
import { DataContext } from "./Context/dataContext";
import data from "./data/data.json";

function App() {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const [countries, setCountries] = useState(data);

  return (
    <themeContext.Provider value={{ theme, setTheme }}>
      <DataContext.Provider value={{ countries, setCountries }}>
        <div className={`App ${theme}`}>
          <Test />
        </div>
      </DataContext.Provider>
    </themeContext.Provider>
  );
}

export default App;

import { useEffect, useState } from "react";
import "./App.css";
import { Test } from "./Pages/Test";
import { ThemeContext } from "./Context/themeContext";
import { DataContext } from "./Context/dataContext";
import data from "./data/data.json";
import { Home } from "./Pages/Home";
import { Detail } from "./Pages/Detail";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Navbar } from "./Components/Navbar.component";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: ":id",
    element: <Detail data={data}/>,
  },
  {
    path: "test",
    element: <Test data={data}/>,
  },
]);

function App() {
  const [theme, setTheme] = useState("light");
  
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  const [countries, setCountries] = useState(data);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <DataContext.Provider value={{ countries, setCountries }}>
        <div className={`App ${theme}`}>
          <Navbar />
          <RouterProvider router={router}></RouterProvider>
        </div>
      </DataContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;

import styles from "./Navbar.module.css";
import moon from "../../assets/moon-solid.svg";
import { useContext } from "react";
import { ThemeContext } from "../../Context/themeContext";

export const Navbar = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };



  return ( 
    <div className={theme==='dark'? styles.navDark :styles.nav}>
      <div className={styles.container}>
        <h1>Where in the world?</h1>
        <button className={styles.right} onClick={toggleTheme}>
          <img src={moon} width={20} />
          <span>Dark Mode</span>
        </button>
      </div>

      <div className={styles.line}></div>
    </div>
  );


};

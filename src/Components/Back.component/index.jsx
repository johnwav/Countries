import styles from "./Back.module.css";
import { ThemeContext } from "../../Context/themeContext";
import { useContext } from "react";

export const BackBtn = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <button className={theme === "dark" ? styles.backDark : styles.back}>
      Back
    </button>
  );
};

import styles from "./BorderCountries.module.css";
import { useContext } from "react";
import { ThemeContext } from "../../Context/themeContext";

export const BorderCountry = ({ name }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={theme === "dark" ? styles.wrapperDark : styles.wrapper}>
      {name}
    </div>
  );
};

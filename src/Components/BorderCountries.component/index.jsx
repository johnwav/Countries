import styles from "./BorderCountries.module.css";
import { useContext } from "react";
import { ThemeContext } from "../../Context/themeContext";

export const BorderCountry = (props) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={theme === "dark" ? styles.wrapperDark : styles.wrapper}>
      {props.border}
    </div>
  );
};

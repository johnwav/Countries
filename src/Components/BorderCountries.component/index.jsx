import styles from "./BorderCountries.module.css";
import { useContext } from "react";
import { ThemeContext } from "../../Context/themeContext";
import { DataContext } from "../../Context/dataContext";

export const BorderCountry = (props) => {
  const { theme } = useContext(ThemeContext);
  const { data } = useContext(DataContext);
  // const names = props.border.find(nam => nam.)
  // const names = data.find((nam) => nam.borders === props.border);

  return (
    <div className={theme === "dark" ? styles.wrapperDark : styles.wrapper}>
      {props.border}
    </div>
  );
};

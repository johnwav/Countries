import styles from "./Country.module.css";
import { ThemeContext } from "../../Context/themeContext";
import { useContext } from "react";
export const Country = (props) => {
  const Name = props.name;
  const Flag = props.flag;
  const { theme } = useContext(ThemeContext);

  return (
    <div className={theme === "dark" ? styles.wrapperDark : styles.wrapper}>
      <div className={styles.flagWrapper}>
        <img className={styles.flag} src={Flag} />
      </div>
      <h1 className={styles.countryName}>{Name}</h1>
      <div className={styles.details}>
        <div>
          <strong>Population:</strong> 92382983923
        </div>
        <div>
          <strong>Region:</strong> Europe
        </div>
        <div>
          <strong>Capital:</strong> Berlin
        </div>
      </div>
    </div>
  );
};

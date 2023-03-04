import styles from "./Country.module.css";
import { ThemeContext } from "../../Context/themeContext";
import { useContext } from "react";
export const Country = (props) => {
  const Name = props.name;
  const Flag = props.flag;
  const Region = props.region
  const Capital = props.capital
  const Population = props.population
  const { theme } = useContext(ThemeContext);

  return (
    <div className={theme === "dark" ? styles.wrapperDark : styles.wrapper}>
      <div className={styles.flagWrapper}>
        <img className={styles.flag} src={Flag} />
      </div>
      <h1 className={styles.countryName}>{Name}</h1>
      <div className={styles.details}>
        <div>
          <strong>Population:</strong> {Population}
        </div>
        
        <div>
          <strong>Region:</strong> {Region}
        </div>
        <div>
          <strong>Capital:</strong> {Capital}
        </div>
      </div>
    </div>
  );
};

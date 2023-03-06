import styles from "./Filter.module.css";
import { ThemeContext } from "../../Context/themeContext";
import { useContext } from "react";

export const Filter = (props) => {
  const onFilterChange = (e) => {
    props.filterValueSelected(e.target.value);
  };

  const { theme } =useContext(ThemeContext)

  return (
    <>
      <select className={theme==='dark'? styles.dropdownDark : styles.dropdown} onChange={onFilterChange}>
        <option value={"All"}>Filter by Region</option>
        <option value={"Africa"}>Africa</option>
        <option value={"America"}>America</option>
        <option value={"Asia"}>Asia</option>
        <option value={"Europe"}>Europe</option>
        <option value={"Oceania"}>Oceania</option>
      </select>
    </>
  );
};

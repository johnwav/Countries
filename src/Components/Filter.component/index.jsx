import { useState } from "react";
import styles from "./Filter.module.css";

export const Filter = () => {
  const [filter, setFilter] = useState("All");

  const handleChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <>
      <select
        name="Filter by Region"
        className={styles.dropdown}
        onChange={handleChange}
      >
        {console.log(filter)}

        
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

import styles from "./Filter.module.css";

export const Filter = (props) => {
  const onFilterChange = (e) => {
    props.filterValueSelected(e.target.value);
  };

  return (
    <>
      <select className={styles.dropdown} onChange={onFilterChange}>
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

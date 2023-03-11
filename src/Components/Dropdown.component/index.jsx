import styles from "./Dropdown.module.css";

export const Dropdown = (props) => {
  const dropDownItems = [
    "Filter by region",
    "Africa",
    "America",
    "Asia",
    "Europe",
    "Oceania",
  ];

  const onFilterChange = (e) => {
    // props.filterValueSelected(e.target.value);
    console.log(e.target.value)
  };


  return (
    <div className={styles.container}>
      <input type="checkbox" />

      <div className={styles.optionsContainer}>
        {dropDownItems.map((item) => {
          return (
            <div className={styles.option}>
              <input type="radio" name="slected" value={item} onChange={() => onFilterChange}/>
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
};

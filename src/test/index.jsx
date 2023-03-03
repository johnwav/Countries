import { useContext, useState } from "react";
import { Country } from "../Components/Country.component";
import { Navbar } from "../Components/Navbar.component";
import styles from "./test.module.css";
import { DataContext } from "../Context/dataContext";
import { Filter } from "../Components/Filter.component";

export const Test = () => {
  const { countries, setCountries } = useContext(DataContext);
  const [filter, setFilter] = useState("Asia");
  const filterdList = countries.filter((item) => {
    if (filter === "All") return countries;
    else return item.region.includes(filter);
  });
  const filterValueChange = (filterValue) => {
    setFilter(filterValue);
  };


  return (
    <center className={styles.container}>
      <h1>This is a test for componets</h1>
      <Filter filterValueSelected={filterValueChange} />
      <Navbar />
      <div className={styles.contries}>
        {filterdList.map((country, i) => (
          <>
            <Country
              key={i}
              name={country.name}
              flag={country.flag}
              region={country.region}
            />
          </>
        ))}
      </div>
    </center>
  );
};

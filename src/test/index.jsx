import { useContext, useState } from "react";
import { Country } from "../Components/Country.component";
import { Navbar } from "../Components/Navbar.component";
import styles from "./test.module.css";
import { DataContext } from "../Context/dataContext";
import { Filter } from "../Components/Filter.component";
import { Searchbar } from "../Components/Searchbar.component";

export const Test = () => {
  const { countries, setCountries } = useContext(DataContext);
  const [filter, setFilter] = useState("All");
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
      <Searchbar />
      <div className={styles.contries}>
        {filterdList.map((country, i) => (
          <>
            <Country
              key={i}
              name={country.name}
              flag={country.flag}
              region={country.region}
              population={country.population}
              capital={country.capital}

            />
          </>
        ))}
      </div>
    </center>
  );
};

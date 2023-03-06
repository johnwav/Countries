import { useContext, useState } from "react";
import { Filter } from "../../Components/Filter.component";
import { Searchbar } from "../../Components/Searchbar.component";
import styles from "./Home.module.css";
import { DataContext } from "../../Context/dataContext";
import { Country } from "../../Components/Country.component";

export const Home = () => {
  const { countries } = useContext(DataContext);
  const [query, setQuery] = useState();
  const [filter, setFilter] = useState("All");

  const filterdList = countries.filter((item) => {
    if (query) {
      return item.name.toLowerCase().includes(query.toLowerCase());
    }

    if (filter === "All") return countries;
    else return item.region.includes(filter);
  });

  const filterValueChange = (filterValue) => {
    setFilter(filterValue);
  };

  const handleSearch = (input) => {
    setQuery(input);
  };

  return (  
    <div className={styles.Container}>
      <div className={styles.buttons}>
        <Searchbar searchMethod={handleSearch} />
        <Filter filterValueSelected={filterValueChange} />
      </div>

      <div className={styles.contries}>
        {filterdList.map((country) => (
          <Country
            key={country.alpha3Code}
            name={country.name}
            flag={country.flag}
            region={country.region}
            population={country.population}
            capital={country.capital}
          />
        ))}
      </div>
    </div>
  );
};

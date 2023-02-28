import { useContext } from "react";
import { Country } from "../Components/Country.component";
import { Navbar } from "../Components/Navbar.component";
import styles from "./test.module.css";
import { DataContext } from "../Context/dataContext";

export const Test = () => {
  const { countries, setCountries } = useContext(DataContext);

  return (
    <center className={styles.container}>
      <h1>This is a test for componets</h1>
      <Country  name={countries[0].name} flag={countries[0].flag} />
      <Navbar />
      
      <div className={styles.contries}>
        {countries.map((country, i) => (
          <>
            <Country key={i} name={country.name} flag={country.flag} />

            {console.log(country)}
          </>
        ))}
      </div>
    </center>
  );
};

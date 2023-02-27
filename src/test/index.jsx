import { useContext } from "react";
import { Country } from "../components/Country.component";
import { Navbar } from "../components/Navbar.component";
import styles from "./test.module.css";
import { DataContext } from "../Context/dataContext";

export const Test = () => {
  const { countries, setCountries } = useContext(DataContext);

  return (
    <center className={styles.container}>
      <h1>This is a test for componets</h1>
      <Country />
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

import { useContext, useState } from "react";
import { Country } from "../Components/Country.component";
import { Navbar } from "../Components/Navbar.component";
import styles from "./test.module.css";
import { DataContext } from "../Context/dataContext";
import InfiniteScroll from "react-infinite-scroll-component";
import getPosts from "../Features/getPosts";
import { Filter } from "../Components/Filter.component";

export const Test = () => {
  const { countries, setCountries } = useContext(DataContext);
  // const [number, setNumber] = useState(30);
  // const loadmore = () => {
  //   setCountries(getPosts(number));
  //   setNumber(number + 20);
  // };

  const [filter, setFilter] = useState("All");

  const handleChange = (e) => {
    setFilter(e.target.value);

    const filterd = countries.filter((country) => {
      if (country.region != "All") {
      return country.region.includes(filter);
      }
    });

    console.log(filterd)

  };

  return (
    <center className={styles.container}>
      <>
        <select
          name="Filter by Region"
          className={styles.dropdown}
          onChange={handleChange}
        >
          {console.log(filter)}
          <option value={"All"}>Filter by Region</option>
          <option value={"Africa"}>Africa</option>
          <option value={"Americas"}>America</option>
          <option value={"Asia"}>Asia</option>
          <option value={"Europe"}>Europe</option>
          <option value={"Oceania"}>Oceania</option>
        </select>
      </>

      <h1>This is a test for componets</h1>
      <br />
      <br />
      <br />
      {/* <Filter /> */}
      <br />
      <br />
      <br />
      {/* <Country name={countries[0].name} flag={countries[0].flag} /> */}
      <br />
      <br />
      <br />
      <Navbar />
      <br />
      <br />
      <br />

      {/* <InfiniteScroll
        dataLength={countries.length}
        next={loadmore}
        hasMore={true}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      > */}

      <div className={styles.contries}>
        {countries.map((country, i) => (
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
      {/* </InfiniteScroll> */}
      <br />
      <br />
      <br />
    </center>
  );
};

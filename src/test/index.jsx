import { useContext, useState } from "react";
import { Country } from "../Components/Country.component";
import { Navbar } from "../Components/Navbar.component";
import styles from "./test.module.css";
import { DataContext } from "../Context/dataContext";
import InfiniteScroll from "react-infinite-scroll-component";
import getPosts from "../Features/getPosts";
import data from '../data/data.json'

export const Test = () => {
  const { countries, setCountries } = useContext(DataContext);
  const [number, setNumber] = useState(30);
  const loadmore = () => {
    setCountries(getPosts(number));
    setNumber(number + 20);
  };

  {console.log(data.length)}

  return (
    <center className={styles.container}>
      <h1>This is a test for componets</h1>
      <Country name={countries[0].name} flag={countries[0].flag} />
      <Navbar />
      <InfiniteScroll
        dataLength={countries.length}
        next={loadmore}
        hasMore={true}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <div className={styles.contries}>
          {countries.map((country, i) => (
            <>
              <Country key={i} name={country.name} flag={country.flag} />
            </>
          ))}
        </div>
      </InfiniteScroll>
    </center>
  );
};

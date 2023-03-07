import { BackBtn } from "../../Components/Back.component";
import styles from "./Detail.module.css";
import data from "../../data/data.json";
import { Link, useParams } from "react-router-dom";
import { languages } from "monaco-editor";

export const Detail = () => {
  const { id } = useParams();
  const countries = data.find((country) => country.alpha3Code === id);
  const {
    name,
    flag,
    nativeName,
    population,
    region,
    subregion,
    capital,
    currencies,
    topLevelDomain,
    languages,
  } = countries;

  return (
    <div className={styles.container}>
      <div className={styles.navigation}>
        <Link to={"/"}>
          <BackBtn />
        </Link>
      </div>
      <div className={styles.details}>
        <img src={flag}></img>
        <div className={styles.detailsGroup}>
          <h1>{name}</h1>
          <div className={styles.hero}>
            <div className={styles.hero1}>
              <p>
                <strong>Native Name: </strong>
                {nativeName}
              </p>
              <p>
                <strong>Population: </strong>
                {population.toLocaleString()}
              </p>
              <p>
                <strong>Region: </strong>
                {region}
              </p>
              <p>
                <strong>Sub Region: </strong>
                {subregion}
              </p>
              <p>
                <strong>Capital: </strong>
                {capital}
              </p>
            </div>
            <div className={styles.hero2}>
              <p>
                <strong>Top Level Domain: </strong>
                {topLevelDomain}
              </p>
              <p>
                <strong>Currencies: </strong>
                {Object.keys(currencies).map((key) => (
                  <div>{currencies[key].name}</div>
                ))}
              </p>
              <p>
                <strong>Languages: </strong>
                {Object.keys(languages).map((key) => (
                  <div>{languages[key].name}</div>
                ))}
              </p>
            </div>
          </div>

          <div className={styles.hero3}>
            <strong>Border Countries:</strong>
          </div>
        </div>
      </div>
    </div>
  );
};

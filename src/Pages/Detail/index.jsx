import { BackBtn } from "../../Components/Back.component";
import styles from "./Detail.module.css";
import { Link, useParams } from "react-router-dom";
import { BorderCountry } from "../../Components/BorderCountries.component";

export const Detail = ({ data }) => {
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
    borders,
  } = countries;

  const borderCountries = borders?.map((border) => {
    if (borders !== undefined) {
      return data?.find((country) => country?.alpha3Code === border);
    }
  });

  const filtered = borderCountries?.filter((x) => {
    if (borderCountries !== undefined) {
      return x !== undefined;
    } else return "";
  });

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
              <div>
                <strong>Currencies: </strong>
                {Object.keys(currencies).map((key, i) => (
                  <div key={i}>{currencies[key].name.toString()}</div>
                ))}
              </div>
              <div>
                <strong>Languages: </strong>
                {Object.keys(languages).map((key, i) => (
                  <div key={i}>{languages[key].name}</div>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.hero3}>
            <strong>
              Border Countries:
              <div className={styles.borderGroup}>
                {filtered !== undefined
                  ? filtered?.map((filter) => (
                      <Link to={`/${filter.alpha3Code}`} key={filter.alpha3Code}>
                        <BorderCountry
                          name={filter.name}
                          border={borders}
                        />
                      </Link>
                    ))
                  : "N/A"}
              </div>
            </strong>
          </div>
        </div>
      </div>
    </div>
  );
};

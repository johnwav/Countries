import styles from "./Country.module.css";

export const Country = (props) => {
  const Name = props.name;
  const Flag = props.flag;

  return (
    <div className={styles.wrapper}>
      <div className={styles.flagWrapper}>
        <img className={styles.flag} src={Flag} />
      </div>
      <h1 className={styles.countryName}>{Name}</h1>
      <div>
        <div>
          <div>
            <strong>Population:</strong> 92382983923
          </div>
          <div>
            <strong>Region:</strong> Europe
          </div>
          <div>
            <strong>Capital:</strong> Berlin
          </div>
        </div>
      </div>
    </div>
  );
};

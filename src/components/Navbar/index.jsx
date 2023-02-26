import styles from "./Navbar.module.css";
import moon from '../../assets/moon-solid.svg'

export const Navbar = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.container}>
        <h1>Where in the world?</h1>
        <div className={styles.right}>
          <img src={moon} width={20}/>
          <span>Dark Mode</span>
        </div>
      </div>

      <div className={styles.line}></div>
    </div>
  );
};

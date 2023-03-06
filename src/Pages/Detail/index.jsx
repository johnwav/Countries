import { BackBtn } from "../../Components/Back.component";
import styles from "./Detail.module.css";

export const Detail = () => {
  return (
    <div className={styles.container}>
      <div className={styles.navigation}>
        <BackBtn />
      </div>
      <div className={styles.details}>
        <img></img>
        <div>
            <h1>Belgium</h1>
            
        </div>
      </div>
    </div>
  );
};

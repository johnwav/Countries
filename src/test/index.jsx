import { Navbar } from '../components/Navbar';
import styles from './test.module.css'

export const Test = () => {
  return (
    <div className={styles.container}>
      <h1>This is a test for componets</h1>

      <Navbar />
    </div>
  );
};

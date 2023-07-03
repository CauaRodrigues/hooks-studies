import { Link } from "react-router-dom";
import styles from "./style.module.css";

export const Home = () => {
  return (
    <>
      <h1>React Hooks</h1>

      <nav className={styles.menu}>
        <ul>
          <li className={styles.field}>
            <input type="checkbox" name="state" id="state" />
            <label htmlFor="state">
              <Link to="/state">useState</Link>
            </label>
          </li>

          <li className={styles.field}>
            <input type="checkbox" name="effect" id="effect" />
            <label htmlFor="effect">
              <Link to="/effect">useEffect</Link>
            </label>
          </li>

          <li className={styles.field}>
            <input type="checkbox" name="callback" id="callback" />
            <label htmlFor="callback">
              <Link to="/callback">useCallback</Link>
            </label>
          </li>
        </ul>
      </nav>
    </>
  );
};

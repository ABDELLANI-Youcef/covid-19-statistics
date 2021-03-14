import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => (
  <div className={styles.navbar}>
    <Link to="/">Home</Link>
    <h1>COVID-19 AROUND THE WORLD</h1>
    <span>Get the last numbers of cases, deaths, and  recovering</span>
  </div>
);

export default Navbar;

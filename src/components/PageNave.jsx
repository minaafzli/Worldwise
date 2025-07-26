import { NavLink } from "react-router-dom";
import styles from "./PageNav.module.css";
import Logo from "./logo";
function PageNave() {
  return (
    <nav className={styles.nav}>
      <Logo />
      <ul>
        <li>
          <NavLink to={"/Pricing"}>Pricing</NavLink>
        </li>
        <li>
          <NavLink to={"/Product"}>Products</NavLink>
        </li>
        <li>
          <NavLink to={"/Login"} className={styles.ctaLink}>
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNave;

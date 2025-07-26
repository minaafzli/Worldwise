import { NavLink } from "react-router-dom";
function PageNave() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/Pricing"}>Pricing</NavLink>
        </li>
        <li>
          <NavLink to={"/Products"}>Products</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNave;

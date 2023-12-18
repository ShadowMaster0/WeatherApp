import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <ol>
          <Link to="/HomePage">Home Page</Link>
        </ol>
        <ol>
          <Link to="/Today">Today Forecast</Link>
        </ol>
        <ol>
          <Link to="/Weekly">Weekly Forecast</Link>
        </ol>
        <ol>
          <Link to="/Monthly">Monthly Forecast</Link>
        </ol>
      </ul>
    </nav>
  );
};

export default Navbar;

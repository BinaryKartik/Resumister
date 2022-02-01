import "../Static/navbar.css";
import { Link } from "react-router-dom";

const navbar = () => {
  function open() {
    const navbarLinks = document.getElementsByClassName("navbar-links")[0];
    navbarLinks.classList.toggle("active");
  }

  return (
    <div className="topnav">
      <nav className="navbar">
        <div className="brand-title">Résumister</div>
        {/*eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
        <a href="#" onClick={open} className="toggle-button">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </a>
        <div className="navbar-links">
          <ul>
            <li>
              <Link className="active" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link to="/create">Start Now!</Link>
            </li>
            <li>
              <Link to="/feedback">Feedback</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default navbar;

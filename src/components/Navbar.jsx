import "../styles/navbar.css";
import { NavLink } from "react-router-dom";
import Logo from "../assets/logo.png";
import Logo2 from "../assets/logo2.png";
function Navbar() {
  return (
    <nav className="techgeek-navbar">
      <div className="techgeek-nav-left">
        <NavLink to="/" className="techgeek-nav-logo">
          <img
            src={Logo}
            className="techgeek-va-mid techgeek-logo-large"
            alt="Logo"
          />
          <img
            src={Logo2}
            className="techgeek-va-mid techgeek-logo-small"
            alt="Logo"
          />
        </NavLink>
      </div>
      <div className="techgeek-nav-btn">
        <NavLink className="techgeek-nav-login-btn">Login </NavLink>
        <NavLink className="techgeek-nav-signup-btn">Sign Up</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;

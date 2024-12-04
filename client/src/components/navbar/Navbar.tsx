import type React from "react";
import logo from "../../assets/images/round_logo.png";
import "./NavBar.css";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav>
      <div className="brand-container">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
        <h1>Coup de main Local</h1>
      </div>
      <ul>
        <li>
          <Link to="/">
            <button type="button">Accueil</button>
          </Link>
        </li>
        <li>
          <Link to="/directory">
            <button type="button">Annuaire</button>
          </Link>
        </li>
        <li>
          <Link to="/services">
            <button type="button">Annonces</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

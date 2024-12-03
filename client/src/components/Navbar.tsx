import type React from "react";
import logo from "../assets/images/round_logo.png";
import "./index.css"; // Assurez-vous d'importer le fichier CSS

const Navbar: React.FC = () => {
  return (
    <nav>
      <img src={logo} alt="Logo" />
      <h1>Coup de main Local</h1>
      <ul>
        <li>
          <button type="button">Annuaire</button>
        </li>
        <li>
          <button type="button">Annonces</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

import type React from "react";
import logo from "../assets/images/round_logo.png";
import "./index.css";

const Navbar: React.FC = () => {
  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        backgroundColor: "#9370DB",
        padding: "10px",
      }}
    >
      <img
        src={logo}
        alt="Logo"
        style={{ height: "125px", marginLeft: "10px", marginRight: "10px" }}
      />
      <h1 style={{ margin: 50, fontFamily: "Montserrat, sans-serif" }}>
        Coup de main Local
      </h1>
      <ul
        style={{
          listStyleType: "none",
          margin: 0,
          padding: 0,
          display: "flex",
          marginLeft: "auto",
        }}
      >
        <li style={{ marginRight: "10px" }}>
          <button
            type="button"
            style={{
              padding: "10px 20px",
              borderRadius: "5px",
              border: "none",
              backgroundColor: "#FFA07A", // Orange clair
              color: "white",
            }}
          >
            Annuaire
          </button>
        </li>
        <li style={{ marginRight: "10px" }}>
          <button
            type="button"
            style={{
              padding: "10px 20px",
              borderRadius: "5px",
              border: "none",
              backgroundColor: "#FFA07A", // Orange clair
              color: "white",
            }}
          >
            Annonces
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

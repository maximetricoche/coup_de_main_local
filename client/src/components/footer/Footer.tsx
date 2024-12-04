import type React from "react";
import "./Footer.css";
const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p>
        <a
          href="https://www.youtube.com/watch?v=OfFPtvX4xpQ&ab_channel=Diam'sofficiel"
          className="footer-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          ©
        </a>{" "}
        Coup de main local - 2024{" "}
      </p>
      <div className="footer-names">
        <p>
          Amandine Grard-Laurent,
          <br />
          Maxime Tricoche,
          <br />
          Mathieu Foucault,
          <br />
          Vincent Ching,
          <br />
          Marvin Calmo
        </p>
      </div>
    </footer>
  );
};

export default Footer;

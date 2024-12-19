import { Link } from "react-router-dom";
import image from "../../assets/images/404.svg";
import "./notFound.css";

export default function NotFound() {
  return (
    <div className="not-found-wrapper">
      <div className="not-found-container">
        <div className="button-container">
          <Link to="/">
            <button type="button">Retourner à l'accueil</button>
          </Link>
        </div>
        <img src={image} alt="404" className="not-found-images" />
      </div>
    </div>
  );
}

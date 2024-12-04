import { Link } from "react-router-dom";
import type { ServicesProps } from "../../types/type";
import "./ServicesCard.css";

export default function ServicesCard({
  name,
  prenom,
  categorie,
  image,
  type,
  description,
}: ServicesProps) {
  return (
    <Link to="/services" className="services-card-link">
      <div className="card-containerServices">
        <div className="card-image">
          <img src={image} alt={name} />
        </div>
        <div className="card-content">
          {categorie ? (
            <div className="card-content-tag">
              <code>{categorie}</code>
            </div>
          ) : (
            ""
          )}
          <div className="card-content-title">
            <h3>{type}</h3>
            <p>
              {prenom} {name}{" "}
            </p>
          </div>
          <div className="card-content-button">
            <p> {description}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

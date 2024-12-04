import { Link } from "react-router-dom";
import type { ServicesProps } from "../../types/type";
import "./ServicesCard.css";
import { Link } from "react-router-dom";
import type { Service } from "../../types/definitions";

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
      
function ServicesCard({ service }: { service: Service }) {
  return (
    <Link to="/services" className="service-card-link">
      <figure className="ServicesDisplayCard">
        <div className="ColumnServices">
          <div>
            <img
              className="ServicesImg"
              src={service.image}
              alt={service.nom}
            />
          </div>
          <div className="ServicesCategory">
            <div className="ServicesCategoryIcon1">
              <p>{service.categorie}</p>
            </div>
            <div className="ServicesCategoryIcon2">
              <p>{service.échange}</p>
            </div>
          </div>
        </div>

        <div className="ServicesDetails">
          <h1 className="ServicesTitle">
            {service.nom} {service.prenom}
          </h1>
          <p>{service.description}</p>
        </div>
      </figure>
    </Link>
  );
}

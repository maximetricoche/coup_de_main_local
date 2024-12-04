import "./ServicesCard.css";
import { Link } from "react-router-dom";
import type { Service } from "../../types/definitions";

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

export default ServicesCard;

import type { Service } from "../../types/definitions";
import "./ServicesCard.css";

function ServicesCard({ service }: { service: Service }) {
  return (
    <figure className="ServicesDisplayCard">
      <div className="ColumnServices">
        <img className="ServicesImg" src={service.image} alt={service.nom} />

        <div className="ServicesCategory">
          <div className="ServicesCategoryIcon1">
            <p>{service.categorie}</p>
          </div>
          <div className="ServicesCategoryIcon2">
            <p>{service.type}</p>
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
  );
}

export default ServicesCard;

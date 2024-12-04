import { useLoaderData } from "react-router-dom";
import "./ServicesDetails.css";

type serviceType = {
  id: number;
  nom: string;
  prenom: string;
  adresse: string;
  description: string;
  categorie: string;
  type: string;
  échange: string;
  image: string;
};

const ServicesDetails = () => {
  const data: serviceType = useLoaderData() as serviceType;
  return (
    <main className="services-details-wrapper">
      <section>
        <img src={data.image} alt={data.nom} className="image" />
      </section>

      <section className="informations">
        <div className="category-container-services">
          <div className="categorie-services">
            <span>{data.categorie}</span>
          </div>
          <div className="type-services">
            <span>{data.type}</span>
          </div>
          <div className="echange-services">
            <span>{data.échange}</span>
          </div>
        </div>

        <div className="description-container-services">
          <h2>
            {data.prenom} {data.nom}
          </h2>
          <p>{data.description}</p>
          <p>
            <strong>Adresse</strong>
            <span> {data.adresse}</span>
          </p>
        </div>
        <button type="button" className="cta-services">
          Contactez-moi
        </button>
      </section>
    </main>
  );
};

export default ServicesDetails;

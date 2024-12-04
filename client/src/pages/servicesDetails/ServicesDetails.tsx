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
            <h3>{data.type}</h3>
          </div>
          <div className="echange-services">
            <h3>{data.échange}</h3>
          </div>
        </div>

        <h2>
          {data.prenom} {data.nom} : {data.categorie}
        </h2>
        <p>{data.description}</p>
        <h4>Adresse : {data.adresse} </h4>
        <button type="button">Intéréssé ? Contactez-moi</button>
      </section>
    </main>
  );
};

export default ServicesDetails;

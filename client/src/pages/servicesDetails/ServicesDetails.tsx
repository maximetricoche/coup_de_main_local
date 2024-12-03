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
    <main className="wrapper">
      <section>
        <img src={data.image} alt={data.nom} className="image" />
      </section>
      <section className="informations">
        <h2>
          {data.prenom} {data.nom} : {data.categorie}
        </h2>
        <h3>Catégorie : {data.type}</h3>
        <p>{data.description}</p>
        <p>Type d'échange : {data.échange}</p>
        <h4>Adresse : {data.adresse} </h4>
        <button type="button">Intéréssé ? Contactez-moi</button>
      </section>
    </main>
  );
};

export default ServicesDetails;

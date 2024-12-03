import { useLoaderData } from "react-router-dom";
import "./DirectoryDetails.css";

type directoryType = {
  id: number;
  nom: string;
  adresse: string;
  tel: string;
  horaires_ouverture: string;
  categorie: string;
  image: string;
};

const DirectoryDetails = () => {
  const data: directoryType = useLoaderData() as directoryType;
  console.info(data);
  return (
    <main className="directory-details">
      <section>
        <img src={data.image} alt={data.nom} className="image" />
      </section>
      <section className="informations">
        <div className="categorie">
          <p>{data.categorie}</p>
        </div>
        <h2>{data.nom}</h2>
        <h3>Adresse : {data.adresse} </h3>
        <h3>Coordonnées téléphonique : {data.tel}</h3>
        <h3>Horaires d'ouverture : {data.horaires_ouverture}</h3>
      </section>
    </main>
  );
};

export default DirectoryDetails;

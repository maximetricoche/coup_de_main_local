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
        <div className="categorie-directory">
          <h3>{data.categorie}</h3>
        </div>
        <h2>{data.nom}</h2>
        <p>Adresse : {data.adresse} </p>
        <p>Coordonnées téléphonique : {data.tel}</p>
        <p>Horaires d'ouverture : {data.horaires_ouverture}</p>
      </section>
    </main>
  );
};

export default DirectoryDetails;

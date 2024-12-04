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
      <div className="categorie-directory">
        <span>{data.categorie}</span>
      </div>
      <section className="informations">
        <img
          src={data.image}
          alt={data.nom}
          className="image-directory-details"
        />
        <div className="categorie-directory-description">
          <div className="categorie-directory-mobile">
            <span>{data.categorie}</span>
          </div>
          <h2>{data.nom}</h2>
          <p>
            <strong>Adresse</strong> <span>{data.adresse}</span>
          </p>
          <p>
            <strong>Tel.</strong> <span>{data.tel}</span>
          </p>
          <p>
            <strong>Horaires</strong>
            <span>{data.horaires_ouverture}</span>
          </p>
        </div>
      </section>
    </main>
  );
};

export default DirectoryDetails;

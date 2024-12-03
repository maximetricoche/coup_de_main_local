import { useLoaderData } from "react-router-dom";
import "./DirectoryDetails.css";

const DirectoryDetails = () => {
  const data = useLoaderData();
  console.info(data);
  return (
    <div className="directory-details">
      <h2>Nom de l'entreprise :</h2>
      <h3>Adresse : </h3>
    </div>
  );
};

export default DirectoryDetails;

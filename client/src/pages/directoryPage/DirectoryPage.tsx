import { useLoaderData } from "react-router-dom";
import "./DirectoryPage.css";

const DirectoryPage = () => {
  const data = useLoaderData();
  console.info(data);
  return (
    <div className="directory-page">
      <h2>Annuaire</h2>
    </div>
  );
};

export default DirectoryPage;

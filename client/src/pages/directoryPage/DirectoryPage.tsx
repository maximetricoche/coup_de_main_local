import { Link, useLoaderData } from "react-router-dom";
import DirectoryCard from "../../components/directoryCard/DirectoryCard";
import type { DirectoryType } from "../../types/type";
import "./DirectoryPage.css";

const DirectoryPage = () => {
  const datas: DirectoryType[] = useLoaderData() as DirectoryType[];
  const categories: string[] = [...new Set(datas.map((d) => d.categorie))];

  return (
    <div className="wrapper">
      {categories.map((category) => (
        <div key={category} className="category-container">
          <h2>{category}</h2>
          <div className="category-card-container">
            {datas
              .filter((d) => d.categorie === category)
              .map((item) => (
                <div key={item.id}>
                  <Link to={`/directory/${item.id}`} className="link">
                    <DirectoryCard name={item.nom} image={item.image} />
                  </Link>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DirectoryPage;

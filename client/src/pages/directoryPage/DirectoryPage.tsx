import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import DirectoryCard from "../../components/directoryCard/DirectoryCard";
import FilterDirectory from "../../components/filterDirectory/FilterDirectory";
import type { DirectoryType } from "../../types/type";
import "./DirectoryPage.css";

const DirectoryPage = () => {
  const datas: DirectoryType[] = useLoaderData() as DirectoryType[];
  const categories: string[] = [...new Set(datas.map((d) => d.categorie))];
  const [currentCategory, setCurrentCategory] = useState<string>("");
  const [search, setSearch] = useState<string>("");

  const filteredCategory = currentCategory ? [currentCategory] : categories;

  return (
    <div className="wrapper">
      <FilterDirectory
        setCurrentCategory={setCurrentCategory}
        categories={categories}
        setSearch={setSearch}
        search={search}
      />
      {filteredCategory.map((category) => {
        const filteredItems = datas
          .filter((data) => data.categorie === category)
          .filter(
            (searchResult) =>
              searchResult.nom.toLowerCase().includes(search.toLowerCase()) ||
              searchResult.categorie
                .toLowerCase()
                .includes(search.toLowerCase()),
          );

        if (filteredItems.length === 0) return null;

        return (
          <div key={category} className="category-container">
            <h2>{category}</h2>
            <div className="category-card-container">
              {filteredItems.map((item) => (
                <div key={item.id}>
                  <Link to={`/directory/${item.id}`} className="link">
                    <DirectoryCard name={item.nom} image={item.image} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DirectoryPage;

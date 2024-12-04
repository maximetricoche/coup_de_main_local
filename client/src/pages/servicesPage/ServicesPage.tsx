import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import FilterServices from "../../components/filterServices/FilterServices";
import ServicesCard from "../../components/servicesCard/servicesCard";
import type { ServicesType } from "../../types/type";
import "./ServicesPage.css";

const ServicesPage = () => {
  const datas: ServicesType[] = useLoaderData() as ServicesType[];
  const categories: string[] = [...new Set(datas.map((d) => d.categorie))];
  const [currentCategory, setCurrentCategory] = useState<string>("");
  const [search, setSearch] = useState<string>("");

  const filteredCategory = currentCategory ? [currentCategory] : categories;

  return (
    <div className="wrapper">
      <FilterServices
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
              searchResult.type.toLowerCase().includes(search.toLowerCase()) ||
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
                    <ServicesCard
                      name={item.nom}
                      prenom={item.prenom}
                      image={item.image}
                      type={item.type}
                      description={item.description}
                    />
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

export default ServicesPage;

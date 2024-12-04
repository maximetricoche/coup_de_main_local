import type { FilterServicesProps } from "../../types/type";
import "./FilterServices.css";

export default function FilterServices({
  setCurrentCategory,
  categories,
  setSearch,
  search,
}: FilterServicesProps) {
  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentCategory(e.target.value);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div className="filter-services-container">
      <form className="filter-services">
        <select id="category-select" onChange={handleSelect}>
          <option value="">Toutes les catégories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </form>
      <form className="search-services">
        <input
          type="text"
          placeholder="Rechercher..."
          onChange={handleSearch}
          value={search}
        />
      </form>
    </div>
  );
}

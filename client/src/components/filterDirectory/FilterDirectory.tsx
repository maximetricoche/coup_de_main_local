import type { FilterDirectoryProps } from "../../types/type";
import "./FilterDirectory.css";

export default function FilterDirectory({
  setCurrentCategory,
  categories,
  setSearch,
  search,
}: FilterDirectoryProps) {
  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentCategory(e.target.value);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div className="filter-directory-container">
      <form className="filter-directory">
        <select id="category-select" onChange={handleSelect}>
          <option value="">Toutes les catégories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </form>
      <form className="search-directory">
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

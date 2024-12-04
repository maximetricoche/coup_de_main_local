import type { DirectoryProps } from "../../types/type";
import "./directoryCard.css";

export default function DirectoryCard({
  name,
  category,
  image,
}: DirectoryProps) {
  return (
    <div className="card-container">
      <div className="card-image">
        <img src={image} alt={name} />
      </div>
      <div className="card-content">
        {category ? (
          <div className="card-content-tag">
            <span>{category}</span>
          </div>
        ) : (
          ""
        )}
        <div className="card-content-title">
          <h3>{name}</h3>
        </div>
      </div>
    </div>
  );
}

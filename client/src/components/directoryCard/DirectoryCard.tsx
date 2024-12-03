import "./directoryCard.css";

export default function DirectoryCard() {
  return (
    <div className="card-container">
      <div className="card-image">
        <img src="" alt="directory" />
      </div>
      <div className="card-content">
        <div className="card-content-tag">
          <code>Category</code>
        </div>
        <div className="card-content-title">
          <h2>Directory Name</h2>
        </div>
      </div>
    </div>
  );
}

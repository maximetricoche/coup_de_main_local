import "./ServicesCard.css";

function ServicesCard({ service }) {
  return (
    <figure className="ServicesDisplayCard">
      <div className="ColumnServices">
        <div className="ServicesImg">
          <img src="" alt="Service" />
        </div>
        <div className="ServicesCategory">
          <div className="ServicesCategoryIcon1">
            <p>Categorie</p>
          </div>
          <div className="ServicesCategoryIcon2">
            <p>Echange</p>
          </div>
        </div>
      </div>

      <div className="ServicesDetails">
        <h1>Titre</h1>
        <p>Description</p>
      </div>
    </figure>
  );
}

export default ServicesCard;

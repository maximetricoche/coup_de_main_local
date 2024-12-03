import { useLoaderData } from "react-router-dom";
import "./ServicesPage.css";

const ServicesPage = () => {
  const data = useLoaderData();
  console.info(data);
  return (
    <div className="services-page">
      <h2>Annonces de Services</h2>
    </div>
  );
};

export default ServicesPage;

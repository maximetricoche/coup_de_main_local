import { Carousel } from "react-bootstrap";
import CategoryContainer from "../components/categoryContainer/CategoryContainer";
import ServicesContainer from "../components/servicesContainer/ServicesContainer";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="home-page">
      <Carousel>
        <h1>composants à rajouter</h1>
      </Carousel>
      <CategoryContainer />
      <ServicesContainer />
    </div>
  );
};

export default HomePage;

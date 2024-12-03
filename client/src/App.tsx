import ServicesCard from "./components/ServicesCard/ServicesCard";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

const App = () => {
  return (
     
   <div>
      <NavBar />
      <Outlet />
      <ServicesCard />
      <Footer />
    </div>
  );
};

export default App;

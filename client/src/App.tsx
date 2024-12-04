import { Outlet } from "react-router-dom";
import Footer from "./components/footer/Footer";
import NavBar from "./components/navbar/Navbar";
import "./App.css";

const App = () => {
  return (
    <div className="app-container">
      <NavBar />
      <div className="main-content">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default App;

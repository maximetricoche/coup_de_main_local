import { useLoaderData } from "react-router-dom";
import Slider from "react-slick";
import DirectoryCard from "../../components/directoryCard/DirectoryCard";

import type { Service } from "../../types/definitions";
import type { DirectoryType } from "../../types/type";
import "../../assets/images/entraide-locale.jpg";

import "./HomePage.css";
import bannerImage from "../../assets/images/entraide-locale.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./HomePage.css";

const HomePage = () => {
  const { directories, services } = useLoaderData() as {
    directories: DirectoryType[];
    services: Service[];
  };

  if (!directories || !services) {
    return <div>No data...</div>;
  }

  const renderDirectories = () => {
    return directories.map((directory) => (
      <div className="card-container" key={directory.id}>
        <DirectoryCard
          name={directory.nom}
          category={directory.categorie}
          image={directory.image}
        />
      </div>
    ));
  };

  const renderServices = () => {
    return services.map((service) => (
      <div className="card-container" key={service.id} />
    ));
  };

  const isMobile = window.innerWidth < 720;

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: isMobile ? 1 : 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 1000,
    centerMode: !isMobile,
    centerPadding: "0",
    cssEase: "ease-in-out",
    vertical: false,
    verticalSwiping: false,
    responsive: [
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          vertical: true,
          verticalSwiping: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
    ],
  };

  return (
    <div className="home-page">
      <h2>Répertoire</h2>
      <Slider {...settings}>{renderDirectories()}</Slider>
      <h2>Services</h2>
      ""
      <div>
        <img className="banner" src={bannerImage} alt="entraide" />
      </div>
      <h2 className="homePageDirectoryTitle">Répertoire</h2>
      <Slider className="sliderStyle" {...settings}>
        {renderDirectories()}
      </Slider>

      <h2 className="homePageServicesTitle">Services</h2>
      <Slider className="sliderStyle" {...settings}>
        {renderServices()}
      </Slider>
    </div>
  );
};

export default HomePage;

import { useState } from "react";
import {
  FaCube, FaMobileAlt, FaCode, FaFileImage,
  FaBullhorn, FaBezierCurve, FaPencilRuler, FaSearch
} from "react-icons/fa";
import "../assets/css/services.css";

const servicesData = [
  { title: "Web Design", icon: <FaCube /> },
  { title: "Web Application", icon: <FaMobileAlt /> },
  { title: "Web Development", icon: <FaCode /> },
  { title: "Banner Design", icon: <FaFileImage /> },
  { title: "Branding", icon: <FaBullhorn /> },
  { title: "Icon Design", icon: <FaBezierCurve /> },
  { title: "Graphic Design", icon: <FaPencilRuler /> },
  { title: "SEO", icon: <FaSearch /> },
];

const Services = () => {
  // Default null taaki mouse hatne par koi bhi card active na rahe
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="services-section" id="services">
      <div className="container">
        {/* Headline Section Added */}
        <div className="services-header">
          <span className="sub-title">I AM GREAT AT</span>
          <h2 className="main-title">We do awesome services for our clients</h2>
          <p className="description">
            Far far away, behind the word mountains, far from the countries 
            Vokalia and Consonantia
          </p>
        </div>

        <div className="services-grid">
          {servicesData.map((item, index) => (
            <div
              key={index}
              className={`service-card ${activeIndex === index ? "active" : ""}`}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <div className="icon-wrapper">
                <div className="icon-circle">{item.icon}</div>
              </div>
              <h3>{item.title}</h3>
              <p>
                A small river named Duden flows by their place and supplies.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
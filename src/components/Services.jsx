import { useState } from "react";
import {
  FaCode,
  FaCogs,
  FaLaptopCode,
  FaShoppingCart,
  FaTools,
} from "react-icons/fa";
import "../assets/css/services.css";

const servicesData = [
  {
    title: "Full-Stack Web Development",
    icon: <FaLaptopCode />,
    desc: "End-to-end web development using modern, scalable technologies,from frontend to backend solutions.",
  },
  {
    title: "CMS & Platform Customization",
    icon: <FaCogs />,
    desc: "Custom WordPress and CMS solutions including themes, plugins, and platform customization tailored to your business needs.",
  },
  {
    title: "Landing Page Development",
    icon: <FaCode />,
    desc: "High-converting landing pages using Webflow & Unbounce,focused on performance and conversions.",
  },
  {
    title: "E-Commerce Development",
    icon: <FaShoppingCart />,
    desc: "Optimized e-commerce stores built with WordPress and Shopify,focused on performance and conversions.",
  },
  {
    title: "Website Maintenance & Support",
    icon: <FaTools />,
    desc: "Ongoing updates, bug fixes, security monitoring,and reliable long-term technical support.",
  },
];

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="services-section" id="services">
      <div className="container">
        {/* ===== HEADER ===== */}
        <div className="services-header">
          <span className="sub-title">I AM GREAT AT</span>
          <h2 className="main-title">
            Building scalable & high-performance web solutions
          </h2>
          <p className="description">
            I help businesses build, optimize and maintain powerful web
            experiences — from full-stack development to ongoing support.
          </p>
        </div>

        {/* ===== SERVICES GRID ===== */}
        <div className="services-grid">
          {servicesData.map((item, index) => (
            <div
              key={index}
              className={`service-card ${
                activeIndex === index ? "active" : ""
              }`}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <div className="icon-wrapper">
                <div className="icon-circle">{item.icon}</div>
              </div>

              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

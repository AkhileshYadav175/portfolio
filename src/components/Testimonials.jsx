import { useEffect, useRef, useState } from "react";
import "../assets/css/testimonials.css";

/* =========================
   REAL REVIEWS (ANONYMIZED)
========================= */
const testimonials = [
  {
    id: 1,
    rating: 5.0,
    text: "Great job. Fast, reliable, and delivered exactly what was needed.",
    name: "Verified Client",
    role: "Custom HTML Development",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    rating: 5.0,
    text: "Extremely helpful, friendly, and resourceful. He handled multiple backend issues perfectly and explored the best solutions for our project. Highly recommended.",
    name: "Verified Client",
    role: "WordPress Backend Development",
    img: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    id: 3,
    rating: 5.0,
    text: "Fantastic experience once again. Reliable, professional, and easy to work with.",
    name: "Returning Client",
    role: "Ongoing Development Work",
    img: "https://randomuser.me/api/portraits/men/65.jpg",
  },
  {
    id: 4,
    rating: 4.9,
    text: "Completed the work exactly as requested. Extra effort was put in to overcome challenges and ensure everything worked perfectly.",
    name: "Long-term Client",
    role: "WordPress Plugin Customization",
    img: "https://randomuser.me/api/portraits/men/75.jpg",
  },
];

/* 👇 infinite loop ke liye duplicate */
const loopData = [...testimonials, ...testimonials.slice(0, 3)];

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const trackRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  /* RESPONSIVE */
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /* AUTO SLIDE */
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  /* INFINITE LOOP FIX */
  useEffect(() => {
    if (index === testimonials.length) {
      setTimeout(() => {
        if (trackRef.current) {
          trackRef.current.style.transition = "none";
          setIndex(0);
          setTimeout(() => {
            if (trackRef.current) {
              trackRef.current.style.transition = "transform 0.9s ease";
            }
          }, 50);
        }
      }, 900);
    }
  }, [index]);

  const shiftVal = isMobile ? index * 100 : index * 33.33;

  return (
    <section className="testimonials-section" id="testimonials">
      <span className="testi-tag">TESTIMONIALS</span>

      <h2 className="testi-title">What clients say about my work</h2>

      <p className="testi-desc">
        Feedback from clients I’ve worked with on WordPress and full-stack
        development, including CMS customization, frontend & backend solutions,
        performance optimization, SEO, and long-term website maintenance.
      </p>

      <div className="testi-slider">
        <div
          ref={trackRef}
          className="testi-track"
          style={{ transform: `translateX(-${shiftVal}%)` }}
        >
          {loopData.map((item, i) => (
            <div className="testi-box" key={i}>
              <span className="quote-icon">“</span>

              {/* ⭐ Rating */}
              <div className="rating">⭐ {item.rating} / 5.0</div>

              <p className="testi-text">{item.text}</p>

              <div className="client-info">
                {/* <img
                  src={item.img}
                  alt={item.name}
                  className="client-img"
                /> */}
                <div className="client-details">
                  <h4 className="client-name">{item.name}</h4>
                  <span className="client-role">{item.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="testi-dots">
        {testimonials.map((_, i) => (
          <span
            key={i}
            className={`testi-dot ${
              index % testimonials.length === i ? "active" : ""
            }`}
            onClick={() => setIndex(i)}
          ></span>
        ))}
      </div>

      {/* Transparency note */}
      <small className="testi-note">
        Client names have been anonymized to respect privacy and platform policies.
      </small>
    </section>
  );
};

export default Testimonials;

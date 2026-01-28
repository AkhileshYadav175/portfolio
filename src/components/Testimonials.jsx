import { useEffect, useRef, useState } from "react";
import "../assets/css/testimonials.css";

const testimonials = [
  {
    id: 1,
    text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    name: "Roger Scott",
    role: "Marketing Manager",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    name: "Roger Scott",
    role: "Marketing Manager",
    img: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    id: 3,
    text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    name: "Roger Scott",
    role: "Marketing Manager",
    img: "https://randomuser.me/api/portraits/men/65.jpg",
  },
  {
    id: 4,
    text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    name: "Roger Scott",
    role: "Marketing Manager",
    img: "https://randomuser.me/api/portraits/men/75.jpg",
  },
];

const loopData = [...testimonials, ...testimonials.slice(0, 3)];

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const trackRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Resize listener to update slider behavior
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (index === testimonials.length) {
      setTimeout(() => {
        if (trackRef.current) {
          trackRef.current.style.transition = "none";
          setIndex(0);
          setTimeout(() => {
            if (trackRef.current) trackRef.current.style.transition = "transform 0.9s ease";
          }, 50);
        }
      }, 900);
    }
  }, [index]);

  // Mobile par 100% aur Desktop par 33.33% shift hoga
  const shiftVal = isMobile ? index * 100 : index * 33.33;

  return (
    <section className="testimonials-section">
      <span className="testi-tag">TESTIMONIES</span>
      <h2 className="testi-title">What client says about?</h2>
      <p className="testi-desc">
        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia
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
              <p className="testi-text">{item.text}</p>
              <div className="client-info">
                <img src={item.img} alt={item.name} className="client-img" />
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
            className={`testi-dot ${index % testimonials.length === i ? "active" : ""}`}
            onClick={() => setIndex(i)}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
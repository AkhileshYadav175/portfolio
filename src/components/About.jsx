import "../assets/css/about.css";
import aboutImage from "../assets/images/about.png";
import { FaMusic, FaPlane, FaFilm, FaFootballBall } from "react-icons/fa";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        
        {/* LEFT IMAGE */}
        <div className="about-image">
          <img src={aboutImage} alt="about" />
        </div>

        {/* RIGHT CONTENT */}
        <div className="about-content">
          <span className="about-subtitle">MY INTRO</span>
          <h2 className="about-title">About Me</h2>

          <p className="about-text">
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia. It is a paradisematic country, in which
            roasted parts of sentences fly into your mouth.
          </p>

          <ul className="about-info">
            <li><strong>Name:</strong> Clyde Nowitzki</li>
            <li><strong>Date of birth:</strong> January 01, 1990</li>
            <li><strong>Address:</strong> San Francisco CA 97987 USA</li>
            <li><strong>Zip code:</strong> 1000</li>
            <li><strong>Email:</strong> clydenowitzki@gmail.com</li>
            <li><strong>Phone:</strong> +1-2234-5678-9-0</li>
          </ul>

          {/* INTERESTS */}
          <div className="about-interests">
            <div><FaMusic /> Music</div>
            <div><FaPlane /> Travel</div>
            <div><FaFilm /> Movie</div>
            <div><FaFootballBall /> Sports</div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;

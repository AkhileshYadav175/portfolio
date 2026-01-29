import "../assets/css/about.css";
import aboutImage from "../assets/images/about.png";
import { FaPaintBrush, FaCode, FaRocket, FaBolt } from "react-icons/fa";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        
        {/* LEFT IMAGE */}
        <div className="about-image">
          <img src={aboutImage} alt="About Daljeet Singh" />
        </div>

        {/* RIGHT CONTENT */}
        <div className="about-content">
          <span className="about-subtitle">MY INTRO</span>
          <h2 className="about-title">About Me</h2>

          <p className="about-text">
            I am a Full Stack Web Developer with over 7+ years of professional
            experience in designing and developing high-quality websites and web
            applications.
            <br /><br />
            I specialize in WordPress, Shopify, Webflow, and custom front-end
            development using HTML, CSS, JavaScript, React, and PHP. My focus is
            always on clean code, performance, mobile responsiveness, and
            user-friendly design.
            <br /><br />
            I have worked with startups, agencies, and business owners to turn
            ideas into scalable digital solutions. I believe in long-term
            collaboration, clear communication, and delivering work that helps
            businesses grow.
          </p>

          {/* INFO LIST */}
          <ul className="about-info">
            <li><strong>Name:</strong> Daljeet Singh</li>
            <li><strong>Address:</strong> Chandigarh, India</li>
            <li><strong>Experience:</strong> 7+ Years Professional</li>
            <li><strong>Email:</strong> daljeetsingh241@gmail.com</li>
            <li><strong>Phone:</strong> +91 9996727653 / +91 9034527653</li>
          </ul>

          {/* INTERESTS / EXPERTISE */}
          <div className="about-interests">
            <div><FaPaintBrush /> UI / UX Design</div>
            <div><FaCode /> Web Development</div>
            <div><FaRocket /> Learning New Technologies</div>
            <div><FaBolt /> Performance Optimization</div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;

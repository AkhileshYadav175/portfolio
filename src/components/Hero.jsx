import "../assets/css/hero.css";
import heroImg from "../assets/images/hero.png";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-container">

        {/* LEFT */}
        <div className="hero-content">
          <span className="hero-subtitle">WE DESIGN & BUILD BRANDS</span>

          <h1 className="hero-title">
            Hi, I am <span>Clyde</span><br />
            This is my favorite work.
          </h1>

          <div className="hero-buttons">
            <button className="btn-primary">Hire me</button>
            <button className="btn-outline">Download CV</button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="hero-image">
          <img src={heroImg} alt="Hero" />
        </div>

      </div>
    </section>
  );
};

export default Hero;

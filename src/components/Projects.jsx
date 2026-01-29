import "../assets/css/project.css";
import authorImg from "../assets/images/author.png";


const Project = () => {
  return (
    <div className="main-project-container" id="projects">
      {/* --- CONTACT CTA --- */}
      <section className="contact-cta-section">
        <div className="contact-container">
          <div className="contact-wrapper">
            <div className="contact-text-content">
              <h2 className="contact-heading">Have a project in mind? Let’s build it together.</h2>
              <p className="contact-description">
                I help businesses and startups build fast, scalable, and conversion-focused websites — from full-stack development to ongoing maintenance and support.
              </p>
              <button className="contact-btn">Let’s Talk</button>
            </div>
            <div className="contact-image-box">
              <img src={authorImg} alt="Author" />
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default Project;
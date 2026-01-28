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
              <h2 className="contact-heading">Have a project on your mind.</h2>
              <p className="contact-description">
                A small river named Duden flows by their place and supplies it with the necessary regelialia.
              </p>
              <button className="contact-btn">Contact me</button>
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
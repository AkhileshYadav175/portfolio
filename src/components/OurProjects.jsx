import "../assets/css/ourprojects.css";

import work1 from "../assets/images/work-1.jpg";
import work2 from "../assets/images/work-2.jpg";
import work3 from "../assets/images/work-3.jpg";
import work4 from "../assets/images/work-4.jpg";
import work5 from "../assets/images/work-5.jpg";
import work6 from "../assets/images/work-6.jpg";
import work7 from "../assets/images/work-7.jpg";
import work8 from "../assets/images/work-8.jpg";

const projects = [
  { id: 1, title: "Business Analytics Dashboard", img: work1 },
  { id: 2, title: "Custom Web Application for Teams", img: work2 },
  { id: 3, title: "Market Research & Reporting Tool", img: work3 },
  { id: 4, title: "Creative Thinking", img: work4 },
  { id: 5, title: "Social Media", img: work5 },
  { id: 6, title: "Marketing Strategy", img: work6 },
  { id: 7, title: "Startup Idea", img: work7 },
  { id: 8, title: "Digital Network", img: work8 },
];

const OurProject = () => {
  return (
    <section className="projects-list-section" id="projects">
      <div className="projects-head">
        <span>ACCOMPLISHMENTS</span>
        <h2>Our Projects</h2>
        <p>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((item) => (
          <div className="project-card" key={item.id}>
            <img src={item.img} alt={item.title} />
            <div className="project-overlay">
              <h3>{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurProject;

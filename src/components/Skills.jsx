import "../assets/css/skills.css";

const skills = [
  { name: "CSS", value: 95 },
  { name: "HTML", value: 98 },
  { name: "jQuery", value: 68 },
  { name: "Photoshop", value: 92 },
  { name: "WordPress", value: 83 },
  { name: "SEO", value: 95 },
  { name: "React", value: 85 },
  { name: "JavaScript", value: 90 },
];

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-header">
        <span className="skills-subtitle">SKILLS</span>
        <h2>My Skills</h2>
        <p>
          I help businesses and startups build fast, secure, and scalable websites using modern technologies with a strong focus on performance, user experience, and long-term reliability.

        </p>
      </div>

      <div className="skills-grid">
        {skills.map((skill, i) => (
          <div className="skill-card" key={i}>
            <h4>{skill.name}</h4>

            <div
              className="circle"
              style={{
                background: `conic-gradient(
                  #b1b493 ${skill.value * 3.6}deg,
                  #eee 0deg
                )`,
              }}
            >
              <span>{skill.value}%</span>
            </div>

            <div className="stats">
              <div>
                <strong>28%</strong>
                <span>Last week</span>
              </div>
              <div className="line"></div>
              <div>
                <strong>60%</strong>
                <span>Last month</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

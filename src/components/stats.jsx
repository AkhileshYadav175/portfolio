import { useEffect, useState } from "react";
import { GiDiscGolfBag } from "react-icons/gi";
import { FaUsers, FaCoffee, FaChartLine } from "react-icons/fa";
import "../assets/css/stats.css";

const statsData = [
  {
    icon: <GiDiscGolfBag />,
    number: 750,
    label: "PROJECT COMPLETE",
  },
  {
    icon: <FaUsers />,
    number: 568,
    label: "HAPPY CLIENTS",
  },
  {
    icon: <FaCoffee />,
    number: 478,
    label: "CUPS OF COFFEE",
  },
  {
    icon: <FaChartLine />,
    number: 780,
    label: "YEARS EXPERIENCED",
  },
];

const Stats = () => {
  const [counts, setCounts] = useState(statsData.map(() => 0));

  useEffect(() => {
    const duration = 2000;
    const interval = 20;
    const steps = duration / interval;
    let step = 0;

    const timer = setInterval(() => {
      step++;

      setCounts(
        statsData.map((item) =>
          Math.min(Math.floor((item.number / steps) * step), item.number)
        )
      );

      if (step >= steps) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="skill-stats" id="stats">
      <div className="stats-container">
        {statsData.map((item, index) => (
          <div className="stat-item" key={index}>
            <div className="stat-icon">{item.icon}</div>

            <div className="stat-content">
              <h3 className="stat-number">{counts[index]}</h3>
              <span className="stat-label">{item.label}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;

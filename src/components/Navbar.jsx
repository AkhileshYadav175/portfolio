import { useState } from "react";
import "../assets/css/navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { name: "HOME", link: "#home" },
    { name: "ABOUT", link: "#about" },
    { name: "SKILLS", link: "#skills" },
    { name: "SERVICES", link: "#services" },
    { name: "PROJECTS", link: "#projects" },
    { name: "BLOG", link: "#blog" },
    { name: "CONTACT", link: "#contact" },
  ];

  return (
    <header className="header">
      <div className="header-inner">
        <div className="logo">Akhil</div>

        {/* Hamburger Icon */}
        <div
          className={`hamburger ${open ? "open" : ""}`}
          onClick={() => setOpen(!open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Desktop & Mobile Nav */}
        <nav className={`nav ${open ? "show" : ""}`}>
          <ul className="menu">
            {menuItems.map((item) => (
              <li key={item.name}>
                <a href={item.link} onClick={() => setOpen(false)}>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
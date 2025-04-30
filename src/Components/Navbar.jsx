import React, { useState, useEffect } from "react";

function Navbar({ scrollToSection }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  const navItems = [
    { label: "Home", section: "home" },
    { label: "About", section: "about" },
    { label: "Skills", section: "skills" },
    { label: "Contact", section: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 120);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="logo-container">
        <img className="logo" src="/logo.png" alt="Kyla Logo" />
      </div>

      <div className="hamburger" onClick={toggleSidebar}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <div className={`sidebar ${isSidebarOpen ? "active" : ""}`}>
        <div className="close-btn" onClick={closeSidebar}>
          ×
        </div>
        <ul className="sidebar-links">
          {navItems.map((item) => (
            <li
              key={item.section}
              onClick={() => {
                scrollToSection(item.section);
                closeSidebar();
              }}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </div>

      <ul className="navlinks">
        {navItems.map((item) => (
          <li key={item.section} onClick={() => scrollToSection(item.section)}>
            {item.label}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;

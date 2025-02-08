import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const navLinks = [
  { name: "HOME", path: "#", active: true },
  { name: "LINK", path: "#" },
  { name: "DROPDOWN", dropdown: ["Action", "Another action", "Something else here"] },
];

const Navbar = () => {
  const [scrollDirection, setScrollDirection] = useState(null);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }

      setIsScrolled(currentScrollY > 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.nav
      className="navbar navbar-expand-lg fixed-top py-3 px-5"
      initial={{ opacity: 1, y: 0 }}
      animate={scrollDirection === "down" ? { opacity: 0, y: -50 } : { opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      style={{
        backgroundColor: "transparent", // No foggy effect
       }}
    >
      <div className="container-fluid">
        <div className="d-flex align-items-center w-100">
          <a className="navbar-brand mx-4" href="#" style={{ zIndex: 10, fontSize:"29px" }}>
            BOSSWEAR
          </a>
          <button
            className="navbar-toggler ms-auto"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        <div
          className="collapse navbar-collapse p-2 shadow-lg"
          id="navbarScroll"
          style={{
            borderRadius: "21px",
            backgroundColor: "white",
            width: "100%",
          }}
        >
          <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
            {navLinks.map((link, index) =>
              link.dropdown ? (
                <li key={index} className="nav-item dropdown mx-3">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                    {link.name}
                  </a>
                  <ul className="dropdown-menu">
                    {link.dropdown.map((item, i) => (
                      <motion.li key={i} whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
                        <a className="btn dropdown-item px-4 py-2 btn-outline-dark rounded-pill" href="#">
                          {item}
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </li>
              ) : (
                <motion.li key={index} className="nav-item mx-3" whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
                  <a className={`nav-link ${link.active ? "active" : ""}`} href={link.path}>
                    {link.name}
                  </a>
                </motion.li>
              )
            )}
          </ul>
          <form className="d-flex mx-3">
            <input className="form-control me-2" type="search" placeholder="Search" />
            <motion.button className="btn btn-outline-success" type="submit" whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
              Search
            </motion.button>
          </form>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;

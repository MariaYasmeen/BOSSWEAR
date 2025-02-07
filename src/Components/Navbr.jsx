import React from "react";

const navLinks = [
  { name: "HOME", path: "#", active: true },
  { name: "LINK", path: "#" },
  { name: "DROPDOWN", dropdown: ["Action", "Another action", "Something else here"] },
 ];

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg py-4 px-4 bg-transparent">
      <div className="container-fluid">
        <a className="navbar-brand mx-4" href="#">BOSSWEAR</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
            {navLinks.map((link, index) => (
              link.dropdown ? (
                <li key={index} className="nav-item dropdown mx-3">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                    {link.name}
                  </a>
                  <ul className="dropdown-menu">
                    {link.dropdown.map((item, i) => (
                      <li key={i}>
                        <a className="dropdown-item" href="#">{item}</a>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li key={index} className="nav-item mx-3">
                  <a className={`nav-link ${link.active ? "active" : ""} ${link.disabled ? "disabled" : ""}`} href={link.path}>
                    {link.name}
                  </a>
                </li>
              )
            ))}
          </ul>
          <form className="d-flex mx-3">
            <input className="form-control me-2" type="search" placeholder="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

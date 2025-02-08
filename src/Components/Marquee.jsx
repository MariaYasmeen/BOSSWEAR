import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Components.css"; // Import CSS for styling

const Marquee = () => {
  const [scrollDirection, setScrollDirection] = useState("left");

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let timeout;

    const handleScroll = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        if (window.scrollY > lastScrollY) {
          setScrollDirection("left");  
        } else {
          setScrollDirection("right");  
        }
        lastScrollY = window.scrollY;
      }, 300);  
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="marquee-container">
           <hr className="line" />  
      <div className={`marquee ${scrollDirection}`}>
        <span>WE ARE BOSSWEAR ✦ WE ARE BOSSWEAR ✦ </span>
        <span>WE ARE BOSSWEAR ✦ WE ARE BOSSWEAR ✦ </span>
      </div>
      <hr className="line" />  
    </div>
  );
};

export default Marquee;

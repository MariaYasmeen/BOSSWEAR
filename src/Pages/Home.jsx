import React from "react";
import Navbar from "../Components/Navbr";
import Slideshow from "../Components/Slideshow";
import About from "./About"; 
import Cards from "../Components/Cards";
import Marquee from "../Components/Marquee";

const Home = () => {
  return (
    <>
    <Navbar />
    <Slideshow/> 
    <Marquee />
    <Cards />
    <About />
    </>
  )
}

export default Home;

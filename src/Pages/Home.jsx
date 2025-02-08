import React from "react";
import Navbar from "../Components/Navbr";
import Slideshow from "../Components/Slideshow";
import About from "./About"; 
import Cards from "../Components/Cards";

const Home = () => {
  return (
    <>
    <Navbar />
    <Slideshow/> 
    <Cards />
    <About />
    </>
  )
}

export default Home;

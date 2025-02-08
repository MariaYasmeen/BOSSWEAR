import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Cards = () => {
  return (
    <div className="px-4 bg-black py-4">
      <div className="row g-3">
        {/* Large Vertical Card */}
        <div className="col-lg-3 col-md-6">
          <div className="card h-100">
            <img
              src="/aa.png"
              className="card-img-top"
              alt="Vertical Image"
            />
            <div className="card-body">
              <h5 className="card-title">Where fashion meets elegance—premium styles crafted for the modern man.</h5>
              <p className="card-text">
              Unleash your style potential with top-tier menswear for every occasion.
              </p>
            </div>
          </div>
        </div>

        {/* Square Text Card */}
        <div className="col-lg-3 col-md-6">
          <div className="card p-3 bg-light  h-100">
            <blockquote className="blockquote mb-0">
               <h3 className="h3css">Refined Fashion for the  <cite>Modern Gentleman.</cite></h3>
               <p style={{fontSize: "15px", paddingBottom:"3px"}}>"Inspiration comes from within yourself."</p>

            </blockquote>
            <img
              src="/bb.png"
              className="card-img-top"
              alt="Vertical Image"
            />
          </div>
        </div>

        {/* Wide Image Card */}
        <div className="col-lg-6 col-md-12">
          <div className="card">
            <img
              src="/A.png"
              className="card-img-top"
              alt="Wide Image"
            />
            <div className="card-body">
              <h5 className="card-title">Confidence starts with great fashion—shop classic and contemporary menswear.</h5>
              <p className="card-text">Discover men’s fashion that speaks confidence.</p>
            </div>
          </div>
        </div>

        {/* Highlighted Quote Card */}
        <div className="col-lg-4 col-md-6">
          <div className="card bg-light p-3  h-60">
            <blockquote className="blockquote mb-0">
              <h3 style={{padding:"12px"}}>Upgrade your wardrobe with <cite> premium fashion!</cite> Shop stylish, trendy, and sophisticated menswear online – <cite> elegance delivered to your doorstep.</cite> </h3>
              <h4 style={{padding:"12px"}}>Redefine your style with premium menswear—shop timeless fashion online now!<cite> modern gentlemen!</cite> </h4>

            </blockquote>
          </div>
        </div>

        {/* Small Image Card */}
        <div className="col-lg-2 col-md-4">
          <div className="card">
            <img
              src="/6.png"
              className="card-img-top"
              alt="Small Image"
            />
          </div>
        </div>

        {/* Another Vertical Image Card */}
        <div className="col-lg-3 col-md-6">
          <div className="card h-100">
            <img
              src=" /7.png"
              className="card-img-top"
              alt="Tall Image"
            />
            <div className="card-body">
              <h5 className="card-title">Shop contemporary menswear.</h5>
            </div>
          </div>
        </div>

        {/* Standard Text Card */}
        <div className="col-lg-3 col-md-6">
          <div className="card p-3 bg-light h-100">
            <h5 className="h3css">Dress sharp, live bold! Explore trendy and <cite> sophisticated outfits</cite>  for men.</h5>
 
          </div>
        </div>

        {/* Full-width Image Card */}
        <div className="col-12">
          <div className="card">
            <img
              src="/3.png"
              className="card-img-top"
              alt="Full Width Image"
            />
 
          </div>
        </div>
      </div>
    </div>
  );
};

export default  Cards;

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Cards = () => {
  return (
    <div className="px-4 bg-black py-5 " style={{ borderRadius: "50px 50px 0 0"}}>
      <div className="row g-3">
        {/* Large Vertical Card */}
        <motion.div className="col-lg-3 col-md-6" variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <div className="card h-100" style={{border:"none"}}>
            <img src="/aa.png" className="card-img-top" alt="Vertical Image" />
            <div className="card-body">
              <h5 className="card-title">Where fashion meets elegance—premium styles crafted for the modern man.</h5>
              <p className="card-text">Unleash your style potential with top-tier menswear for every occasion.</p>
              <a className="btn px-4 py-2 btn-outline-dark rounded-pill" href="#">SHOP NOW</a>
            </div>
          </div>
        </motion.div>

        {/* Square Text Card */}
        <motion.div className="col-lg-3 col-md-6" variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <div className="card p-3 bg-light h-100">
            <blockquote className="blockquote mb-0">
              <h3 className="h3css">Refined Fashion for the <cite>Modern Gentleman.</cite></h3>
              <p style={{fontSize: "15px", paddingBottom:"3px"}}>
                "Inspiration comes from within yourself."
              </p>
            </blockquote>
            <img src="/bb.png" className="card-img-top" alt="Vertical Image" />
          </div>
        </motion.div>

        {/* Wide Image Card */}
        <motion.div className="col-lg-6 col-md-12" variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <div className="card" style={{border:"none"}}>
            <img src="/A.png" className="card-img-top" alt="Wide Image" />
            <div className="card-body">
              <h5 className="card-title">Confidence starts with great fashion—shop classic and contemporary menswear.</h5>
              <a className="btn px-5 py-2 btn-outline-dark rounded-pill" href="#">QUICK VIEW</a>
            </div>
          </div>
        </motion.div>

        {/* Highlighted Quote Card */}
        <motion.div className="col-lg-4 col-md-6" variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <div className="card bg-light p-3 h-60">
            <blockquote className="blockquote mb-0">
              <h3 style={{padding:"12px"}}>Upgrade your wardrobe with <cite> premium fashion!</cite> Shop stylish, trendy, and sophisticated menswear online – <cite> elegance delivered to your doorstep.</cite> </h3>
              <h4 style={{padding:"12px"}}>Redefine your style with premium.</h4>
              <a className="btn px-4 py-2 btn-outline-dark rounded-pill" href="#">TOP COLLECTIONS</a>
            </blockquote>
          </div>
        </motion.div>

        {/* Small Image Card */}
        <motion.div className="col-lg-2 col-md-4" variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <div className="card">
            <img src="/6.png" className="card-img-top" alt="Small Image" />
          </div>
        </motion.div>

        {/* Another Vertical Image Card */}
        <motion.div className="col-lg-3 col-md-6" variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <div className="card h-100" style={{border:"none"}}>
            <img src="/7.png" className="card-img-top" alt="Tall Image" />
            <div className="card-body">
              <h5 className="card-title">Shop contemporary menswear.</h5>
            </div>
          </div>
        </motion.div>

        {/* Standard Text Card */}
        <motion.div className="col-lg-3 col-md-6" variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <div className="card p-3 bg-light h-100">
            <h5 className="h3css">Dress sharp, live bold! Explore trendy and <cite> sophisticated outfits</cite> for men.</h5>
          </div>
        </motion.div>

        {/* Full-width Image Card */}
        <motion.div className="col-12" variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <div className="card">
            <img src="/3.png" className="card-img-top" alt="Full Width Image" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Cards;

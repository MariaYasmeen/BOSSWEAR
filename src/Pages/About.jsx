import React from "react";
import { motion } from "framer-motion";

const images = [
  "/ban1.png",
  "/ban2.png",
  "/ban3.png",
  "/ban4.png",
  "/ban5.png",
  "/ban6.png",
  "/ban7.png",
  "/ban8.png",
];
const Posterimages = ["/img1.png", "/img2.png", "/img3.png"];
const posterImages = ["/img6.png", "/img4.png", "/img8.png"];

const blogPosts = [
  { title: "Formal Ware"  },
  { title: "Business Casual Wear"  },
  { title: "Casual Wear" },
  { title: "Ethnic & Traditional Wear"  },
  { title: "Party & Streetwear"  },,
  { title: "Sports & Activewear"  },
];

const featuredPosts = [
  {
    category: "NEW ARRIVALS",
    categoryClass: "text-primary-emphasis",
    title: "MEN'S CASUAL WEAR", 
    description: "Discover our latest collection, now available online and in stores, featuring premium designs to elevate your wardrobe.",
    image: "/img4.png",
  },
  {
    category: "NEW ARRIVALS",
    categoryClass: "text-success-emphasis",
    title: "PARTY & STREATWEAR", 
    description: "Step into the world of refined fashion with our latest arrivals, designed for those who appreciate quality and elegance.",
    image: "/img5.png",
  },
];

const About = () => {
  return (
    <>
      <main className="p-3">
        <motion.div 
          className="p-4 p-md-5 py-10 mb-4 rounded bg-black text-white"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="col-lg-10 px-0">
            <h1 className="display-4">Luxury suits.</h1>
            <h1 className="display-4">Elevate your wardrobe, own the look.</h1>
            <p className="my-3">
              Welcome to BOSSWEAR, your ultimate destination for trendy and high-quality fashion. We specialize in stylish and comfortable clothing that blends sophistication with everyday wear. Whether you're looking for casual essentials or statement pieces, BOSSWEAR offers a collection that keeps you ahead of the fashion game. Our mission is to provide premium apparel that reflects confidence, style, and individuality. Shop with us and dress like a boss!
            </p>
            <a className="btn px-5 py-2 btn-outline-light rounded-pill" href="#">SHOP NOW</a>
          </div>
        </motion.div>

        <div className="row justify-content-center text-center g-4">
          {Posterimages.map((src, index) => (
            <motion.div
              key={index}
              className="col-md-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <img className="featurette-image img-fluid mx-auto" width="500" height="500" src={src} alt={`Image ${index + 1}`} />
            </motion.div>
          ))}
        </div>

        <div className="row mb-2 py-2">
          {featuredPosts.map((post, index) => (
            <motion.div
              key={index}
              className="col-md-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div className="col p-4 d-flex flex-column position-static">
                  <strong className={`d-inline-block mb-2 ${post.categoryClass}`}>{post.category}</strong>
                  <h3 className="mb-0">{post.title}</h3>
                  <div className="mb-1 text-body-secondary">{post.date}</div>
                  <p className="mb-auto">{post.description}</p>
                  <a className="btn px-4 py-2 btn-outline-dark rounded-pill" href="#">NEW ARRIVALS</a>
                </div>
                <div className="col-md-4">
                  <img className="featurette-image img-fluid mx-auto" width="250" height="250" src={post.image} alt={post.title} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
        className="col-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="card">
          <motion.img
            src="/2.png"
            className="card-img-top"
            alt="Full Width Image"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </motion.div>

      <div className="row g-5 py-4">
        <div className="col-md-8">


          <article className="blog-post">
            <motion.h2
              className="display-5 link-body-emphasis mb-1 px-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              EXPERIENCE FASHION LIKE NEVER BEFORE.
            </motion.h2>
            <div  className="display-5 link-body-emphasis mb-1 px-4"
            >   <motion.a
            className="btn py-2 px-4 btn-outline-dark rounded-pill "
            href="#"
          >
            SEE NEW COLLECTIONS
          </motion.a></div>
          
            <hr />
            
            <div className="row justify-content-center text-center g-4">
              {posterImages.map((src, index) => (
                <motion.div 
                  key={index} 
                  className="col-md-4"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <img
                    className="featurette-image img-fluid mx-auto"
                    width="250"
                    height="250"
                    src={src}
                    alt={`Poster Image ${index + 1}`}
                  />
                </motion.div>
              ))}
            </div>
            
            <div className="row">
              {images.map((src, index) => (
                <motion.div 
                  key={index} 
                  className="col-12 py-1"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="card">
                    <img src={src} className="card-img-top" alt={`Image ${index + 1}`} />
                  </div>
                </motion.div>
              ))}
            </div>
          </article>
        </div>

        <div className="col-md-4">
          <div className="position-sticky" style={{ top: "2rem" }}>
            <motion.div 
              className="p-4 mb-3 bg-body-tertiary rounded"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h4 className="fst-italic">Happening Now</h4>
              <p className="mb-0">Get 50% OFF On all Products this Valentien's Day ! Happy Shopping for Loved Ones!</p>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
              <h4 className="fst-italic">RECENT OUTS</h4>
              <ul className="list-unstyled">
                {blogPosts.map((post, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  > <a className="btn px-5 py-2 btn-outline-dark rounded-pill" href="#">{post.title}</a>
                     <hr />
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div 
        className="p-4 p-md-5 py-10 mb-4 rounded bg-black text-white"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
      >
        <div className="col-lg-10 px-0">
          <h1 className="display-4">Luxury suits.</h1>
          <h1 className="display-4">Elevate your wardrobe, own the look.</h1>
          <p className="my-3">
            Welcome to BOSSWEAR, your ultimate destination for trendy and high-quality fashion.
          </p>
          <motion.a
            className="btn px-5 py-2 btn-outline-light rounded-pill"
            href="#"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            SHOP NOW
          </motion.a>
        </div>
      </motion.div>

      </main>
    </>
  );
};

export default About;

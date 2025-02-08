import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Cards = () => {
  return (
    <div className="container py-4">
      <div className="row g-3">
        {/* Large Vertical Card */}
        <div className="col-lg-3 col-md-6">
          <div className="card h-100">
            <img
              src="/6.jpg"
              className="card-img-top"
              alt="Vertical Image"
            />
            <div className="card-body">
              <h5 className="card-title">Vertical Card Someone famous inSomeone famous inSomeone famous in</h5>
              <p className="card-text">
                A taller card with more content inside. Ideal for detailed
                descriptions.
              </p>
            </div>
          </div>
        </div>

        {/* Square Text Card */}
        <div className="col-lg-3 col-md-6">
          <div className="card p-3 bg-dark h-100">
            <blockquote className="blockquote mb-0">
              <p>"Inspiration comes from within yourself."</p>
              <footer className="blockquote-footer">
                Someone famous in Someone famous inSomeone famous inSomeone famous inSomeone famous inSomeone famous inSomeone famous inSomeone famous in <cite>Source Title</cite>
              </footer>
            </blockquote>
          </div>
        </div>

        {/* Wide Image Card */}
        <div className="col-lg-6 col-md-12">
          <div className="card">
            <img
              src="/a.png"
              className="card-img-top"
              alt="Wide Image"
            />
            <div className="card-body">
              <h5 className="card-title">Wide Image Card</h5>
              <p className="card-text">A wide card for better UI balance.</p>
            </div>
          </div>
        </div>

        {/* Highlighted Quote Card */}
        <div className="col-lg-4 col-md-6">
          <div className="card bg-primary p-3 text-white h-60">
            <blockquote className="blockquote mb-0">
              <p>"Success is not Someone famous inSomeone famous inSomeone famous inSomeone famous inSomeone famous inSomeone famous inSomeone famous inSomeone famous inSomeone famous inSomeone famous inSomeone famous in final, failure is not fatal."</p>
              <footer className="blockquote-footer text-white">
                Someone famous in <cite>Source Title</cite>
              </footer>
            </blockquote>
          </div>
        </div>

        {/* Small Image Card */}
        <div className="col-lg-2 col-md-4">
          <div className="card">
            <img
              src="/6.jpg"
              className="card-img-top"
              alt="Small Image"
            />
          </div>
        </div>

        {/* Another Vertical Image Card */}
        <div className="col-lg-3 col-md-6">
          <div className="card h-100">
            <img
              src=" /7.jpg"
              className="card-img-top"
              alt="Tall Image"
            />
            <div className="card-body">
              <h5 className="card-title">Another Tall Card</h5>
            </div>
          </div>
        </div>

        {/* Standard Text Card */}
        <div className="col-lg-3 col-md-6">
          <div className="card p-3 bg-dark h-100">
            <h5 className="card-title">Simple Text Card</h5>
            <p className="card-text">
              A small text card to balance the layout.
            </p>
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
            <div className="card-body">
              <h5 className="card-title">Full Width Image</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default  Cards;

import React from "react";
import down from "../image/down.png";
import bg_img from "../image/bg__img1.png";
import "../style/hero.css";
function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div
          className="hero__content"
          style={{ backgroundImage: `url(${bg_img})` }}
        >
          <div className="content">
            <h2>
              Hey, I’m Alex Spencer and I love building beautiful websites
            </h2>
            <button>
              {" "}
              <img src={down} alt="" />
              ABOUT ME
            </button>{" "}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

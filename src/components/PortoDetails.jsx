import React from "react";
import "../style/portoDetails.css";
import SwiperPorto from "./SwiperPorto";
function PortoDetails({ bg_img, title, card_img, card_img2 }) {
  return (
    <section className="porto">
      <div className="container">
        <div
          className="porto_image"
          style={{ backgroundImage: `url(${bg_img})` }}
        ></div>
        <div className="porto__wrapper">
          <div className="porto__cards">
            <h4>{title}</h4>
            <p>
              This project required me to build a fully responsive landing page
              to the designs provided. I used HTML5, along with CSS Grid and
              JavaScript for the areas that required interactivity, such as the
              testimonial slider.
            </p>
            <h5>Interaction Design / Front End Development</h5>
            <span>HTML / CSS / JS</span>
            <button>VISIT WEBSITE</button>
          </div>
          <div className="porto__cards2">
            <h4>Project Background</h4>
            <p>
              This project was a front-end challenge from Frontend Mentor. It’s
              a platform that enables you to practice building websites to a
              design and project brief. Each challenge includes mobile and
              desktop designs to show how the website should look at different
              screen sizes. Creating these projects has helped me refine my
              workflow and solve real-world coding problems. I’ve learned
              something new with each project, helping me to improve and adapt
              my style.
            </p>
            <h4>Static Previews</h4>
            <img className="cardImg" src={card_img} alt="" />
            <img className="cardImg2" src={card_img2} alt="" />
          </div>
        </div>
        <SwiperPorto/>
      </div>
    </section>
  );
}

export default PortoDetails;

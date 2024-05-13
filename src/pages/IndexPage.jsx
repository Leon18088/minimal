import React from "react";
import DubleCard from "../components/DubleCard";
import { NavLink } from "react-router-dom";
import card_img from "../image/card_img.png";
import card_img2 from "../image/blue.png";
import card_img3 from "../image/kulrang.png";
import card_img4 from "../image/aqua.png";
import { useLocation } from "react-router-dom";

function IndexPage() {
  const location = useLocation();

  const reverce =
    location.pathname === "/somepath" ? "duble__wrapper2" : "duble__wrapper";
  return (
    <main>
      <DubleCard
        wrapper__name={`duble__wrapper ${reverce}`}
        card_img={card_img}
        title="Manage"
        text="This project required me to build a fully responsive landing page
              to the designs provided. I used HTML5, along with CSS Grid and
              JavaScript for the areas that required interactivity, such as the
              testimonial slider."
        btn_text={<NavLink to="/manage">VIEW PROJECT</NavLink>}
      />
      <DubleCard
        card_img={card_img2}
        title="Bookmark"
        text="This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the features section."
        btn_text={<NavLink to="/bookmark">VIEW PROJECT</NavLink>}
        wrapper__name={`duble__wrapper2 ${reverce}`}
      />
      <DubleCard
        wrapper__name={`duble__wrapper ${reverce}`}
        card_img={card_img3}
        title="Insure"
        text="TThis was a small project which mostly consisted of HTML and CSS. I built a fully-responsive landing page. The only JavaScript this project required was to enable the toggling of the mobile navigation."
        btn_text={<NavLink to="/insure">VIEW PROJECT</NavLink>}
      />
      <DubleCard
        card_img={card_img4}
        title="Fylo"
        text="This project was built in pure HTML and CSS. I had mobile and desktop designs to work to and built it so that it was fully-responsive. I took a mobile-first approach and used modern CSS like Flexbox and Grid for layout purposes."
        btn_text={<NavLink to="/fylo">VIEW PROJECT</NavLink>}
        wrapper__name={`duble__wrapper2 ${reverce}`}
      />
    </main>
  );
}

export default IndexPage;

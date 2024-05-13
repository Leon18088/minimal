import React from "react";
import "../style/duble.css";
function DubleCard({ wrapper__name, card_img, title, text, btn_text }) {
  return (
    <section className="dubleCard">
      <div className="container">
        <div className={wrapper__name}>
          <img src={card_img} alt="" />
          <div className="duble__item">
            <h4>{title}</h4>
            <p>{text}</p>

            <button>{btn_text}</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DubleCard;

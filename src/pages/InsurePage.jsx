import React from "react";
import PortoDetails from "../components/PortoDetails";
import bg3 from "../image/bg_img4.png";
import card_img3 from "../image/card_img3.png";
import card_img_next from "../image/kulrang2.png";
function InsurePage() {
  return (
    <main>
      <PortoDetails
        bg_img={bg3}
        title="Insure"
        card_img={card_img3}
        card_img2={card_img_next}
      />
    </main>
  );
}

export default InsurePage;

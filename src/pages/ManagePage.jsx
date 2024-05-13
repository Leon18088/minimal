import React from "react";
import PortoDetails from "../components/PortoDetails";
import bg__img2 from "../image/bg_img2.png";
import card_img from "../image/Bitmap.png";
import pink2 from "../image/pink.png";

function ManagePage() {
  return (
    <main>
      <PortoDetails
        bg_img={bg__img2}
        title="Manage"
        card_img={card_img}
        card_img2={pink2}
      />
    </main>
  );
}

export default ManagePage;

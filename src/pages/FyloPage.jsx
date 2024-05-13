import React from "react";
import PortoDetails from "../components/PortoDetails";
import bg_img4 from "../image/bg_img5.png";
import card_img4 from "../image/card_img4.jpg";
import aqua2 from "../image/aqua2.jpg";
function FyloPage() {
  return (
    <main>
      <PortoDetails
        bg_img={bg_img4}
        title="Fylo"
        card_img={card_img4}
        card_img2={aqua2}
      />
    </main>
  );
}

export default FyloPage;

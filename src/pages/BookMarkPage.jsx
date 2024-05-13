import React from "react";
import PortoDetails from "../components/PortoDetails";
import bg_ing3 from "../image/bg_ing3.png";
import car1 from "../image/card_img2.png";
import car2 from "../image/blue2.png";
function BookMarkPage() {
  return (
    <main>
      <PortoDetails
        bg_img={bg_ing3}
        title="Bookmark"
        card_img={car1}
        card_img2={car2}
      />
    </main>
  );
}

export default BookMarkPage;

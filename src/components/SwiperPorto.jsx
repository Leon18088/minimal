import React from "react";
import "../style/swiperPorto.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { NavLink } from "react-router-dom";
function SwiperPorto() {
  return (
    <div className="My__swiper">
      <>
        <Swiper
          navigation={true}
          loop={true}
          modules={[Autoplay, Navigation]}
          slidesPerView={2}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          className="mySwiper"
        >
          <span></span>
          <SwiperSlide>
            <NavLink to="/manage">Manage</NavLink>
            <p>Previous Project</p>
          </SwiperSlide>
          <SwiperSlide>
            <NavLink to="/bookmark">Bookmark</NavLink>
            <p>Previous Project</p>
          </SwiperSlide>
          <SwiperSlide>
            <NavLink to="/fylo">Fylo</NavLink>
            <p>Previous Project</p>
          </SwiperSlide>
          <SwiperSlide>
            <NavLink to="/insure">Insure</NavLink>
            <p>Previous Project</p>
          </SwiperSlide>
        </Swiper>
      </>
    </div>
  );
}

export default SwiperPorto;

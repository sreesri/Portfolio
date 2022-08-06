import React from "react";
import "./Testimonials.css";
import AVATAR1 from "../../assets/avatar1.jpg";
import AVATAR2 from "../../assets/avatar2.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

function Testimonials() {
  return (
    <section id="Testimonials">
      <h5>Hear what others say</h5>
      <h2>Testimonials</h2>

      <Swiper
        pagination={{ clickable: true }}
        spaceBetween={50}
        slidesPerView={1}
        modules={[Pagination]}
        className="container testimonial__container"
      >
        <SwiperSlide className="testimonial__card">
          <img className="testimonial_avatar" src={AVATAR1} alt="" />
          <h4>Ernest</h4>
          <small>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial__card">
          <img className="testimonial_avatar" src={AVATAR2} alt="" />
          <h4>Ernest</h4>
          <small>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </small>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default Testimonials;

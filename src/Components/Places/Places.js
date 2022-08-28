import React from "react";
import "./Places.css";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "./london.jpg";
import img2 from "./R (1).jpg";
import img3 from "./R (2).jpg";
import img4 from "./alaska.jpg";
import img5 from "./france-paris-eiffel-tower.jpg";
import img6 from "./1200px-Colosseo_2020 .jpg";
import img7 from "./bali.jpg";
import img8 from "./maldives-travel-tips-cover (1).jpg";
import img9 from "./Sydney.jpg";
import Typical from "react-typical";
SwiperCore.use([EffectCoverflow, Pagination]);
const Places = () => {
  return (
    <div style={{ marginTop: "70px" }}>
      <Typical
        steps={["Our", 1000, "Best Places", 2000]}
        loop={Infinity}
        wrapper="h2"
      />
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={img1} alt="london-img" />
          <p>London</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="greece img" />
          <p>Greece</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="turkey img" />
          <p>Turkey</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="alaska img" />
          <p>Alaska,USA</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} alt="paris img" />
          <p>Paris,France</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img6} alt="rome img" />
          <p>Rome,Italy</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img7} alt="bali-img" />
          <p>Bali,Indonesia</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img8} alt="maldives-img" />
          <p>Maldives</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img9} alt="sydney-img" />
          <p>Sydney,Australia</p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Places;

import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import One from "../assets/2000.jpg";
import Two from "../assets/2004.jpg";
import Three from "../assets/2005.jpg";
import Four from "../assets/2006.jpg";
import Five from "../assets/2007.jpg";
import Six from "../assets/2008.jpg";
import Seven from "../assets/2009.jpg";
import Eight from "../assets/img-one.jpeg";
import Nine from "../assets/img-seven.jpeg";
import Ten from "../assets/img-six.jpeg";
import Eleven from "../assets/img-two.jpeg";

function Carousel() {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);

  const settings1 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: nav2,
  };

  const settings2 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    centerMode: true,
    focusOnSelect: true,
    asNavFor: nav1,
  };

  return (
    <div className="w-full sm:w-3/4 md:w-1/2 lg:w-1/3 mx-auto mb-12">
      <Slider {...settings1} ref={(slider) => setNav1(slider)} className="pb-2">
        <div>
          <img
            src={One}
            alt=""
            className="md:h-[550px] h-[400px]  w-full object-cover"
          />
        </div>
        <div>
          <img
            src={Two}
            alt=""
            className="md:h-[550px] h-[400px]  w-full object-cover"
          />
        </div>
        <div>
          <img
            src={Three}
            alt=""
            className="md:h-[550px] h-[400px]  w-full object-cover"
          />
        </div>
        <div>
          <img
            src={Four}
            alt=""
            className="md:h-[550px] h-[400px]  w-full object-cover"
          />
        </div>
        <div>
          <img
            src={Five}
            alt=""
            className="md:h-[550px] h-[400px]  w-full object-cover"
          />
        </div>
        <div>
          <img
            src={Six}
            alt=""
            className="md:h-[550px] h-[400px]  w-full object-cover"
          />
        </div>
        <div>
          <img
            src={Seven}
            alt=""
            className="md:h-[550px] h-[400px]  w-full object-cover"
          />
        </div>
        <div>
          <img
            src={Eight}
            alt=""
            className="md:h-[550px] h-[400px]  w-full object-cover"
          />
        </div>
        <div>
          <img
            src={Nine}
            alt=""
            className="md:h-[550px] h-[400px]  w-full object-cover"
          />
        </div>
        <div>
          <img
            src={Ten}
            alt=""
            className="md:h-[550px] h-[400px]  w-full object-cover"
          />
        </div>
        <div>
          <img
            src={Eleven}
            alt=""
            className="md:h-[550px] h-[400px]  w-full object-cover"
          />
        </div>
      </Slider>
      <Slider {...settings2} ref={(slider) => setNav2(slider)}>
        <div>
          <img
            src={One}
            alt=""
            className="md:h-[175px] h-[100px]  w-full hover:cursor-pointer  object-cover "
          />
        </div>
        <div>
          <img
            src={Two}
            alt=""
            className="md:h-[175px] h-[100px] w-full  hover:cursor-pointer object-cover"
          />
        </div>
        <div>
          <img
            src={Three}
            alt=""
            className="md:h-[175px] h-[100px] w-full  hover:cursor-pointer object-cover"
          />
        </div>
        <div>
          <img
            src={Four}
            alt=""
            className="md:h-[175px] h-[100px] w-full  hover:cursor-pointer object-cover"
          />
        </div>
        <div>
          <img
            src={Five}
            alt=""
            className="md:h-[175px] h-[100px] w-full  hover:cursor-pointer object-cover"
          />
        </div>
        <div>
          <img
            src={Six}
            alt=""
            className="md:h-[175px] h-[100px] w-full  hover:cursor-pointer object-cover"
          />
        </div>
        <div>
          <img
            src={Seven}
            alt=""
            className="md:h-[175px] h-[100px] w-full  hover:cursor-pointer object-cover"
          />
        </div>
        <div>
          <img
            src={Eight}
            alt=""
            className="md:h-[175px] h-[100px] w-full  hover:cursor-pointer object-cover"
          />
        </div>
        <div>
          <img
            src={Nine}
            alt=""
            className="md:h-[175px] h-[100px] w-full  hover:cursor-pointer object-cover"
          />
        </div>
        <div>
          <img
            src={Ten}
            alt=""
            className="md:h-[175px] h-[100px] w-full  hover:cursor-pointer object-cover"
          />
        </div>
        <div>
          <img
            src={Eleven}
            alt=""
            className="md:h-[175px] h-[100px] w-full  hover:cursor-pointer object-cover"
          />
        </div>
      </Slider>
    </div>
  );
}

export default Carousel;

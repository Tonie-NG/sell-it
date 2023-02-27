import Slider from "infinite-react-carousel";
import React from "react";
import "./Slide.scss";

function Slide({ children, slidesToShow, arrowsScroll }) {
  return (
    <div className="slider">
      <div className="container">
        <Slider slidesToShow={slidesToShow} arrowsScroll={arrowsScroll}>
          {children}
        </Slider>
      </div>
    </div>
  );
}

export default Slide;

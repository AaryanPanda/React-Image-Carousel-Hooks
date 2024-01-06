import React, { useEffect, useLayoutEffect, useState } from "react";
import "./carousel.css";
import { images } from "../data/carouselData";

// you can research - how to use material ui
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";


// complete the function below:
function Carousel() {
  const [imageIndex, setImageIndex] = useState(0);

  const handleBackward = () => {
    setImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };
  const handleForward = () => {
    setImageIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div id="carousel-container">
      <div id="backward" onClick={handleBackward}>
        <ArrowBackIosIcon sx={{ color: "white" }} />
      </div>

      <div id="carousel" key={imageIndex}>
        <div id="title">{images[imageIndex].title}</div>
        <div id="subtitle">{images[imageIndex].subtitle}</div>
        <img id="image" src={images[imageIndex].img} alt="" />
      </div>

      <div id="forward">
        <ArrowForwardIosIcon sx={{ color: "white" }} onClick={handleForward} />
      </div>
    </div>
  );
}

export default Carousel;
import React from "react";
import HeroSlider from "react-slick";

//components
import Poster from "../Poster/Poster.component";

//config
import PosterCarouselSettings from "../config/PosterCarousel.config";
import PremierImages from "../config/TempPosters.config";

const PosterSlider = (props) => {
  return (
    <>
      <div className="flex flex-col items-start my-2">
        <h3
          className={` text-2xl font-bold ${
            props.isDark ? "text-white" : "text-gray-800"
          }`}
        >
          {props.title}
        </h3>
        <p
          className={`text-sm  ${
            props.isDark ? "text-white" : "text-gray-800"
          }`}
        >
          {props.subtitle}
        </p>
      </div>
      <HeroSlider {...PosterCarouselSettings}>
        {props.images.map((image) => (
          <Poster {...image} isDark={props.isDark} />
        ))}
      </HeroSlider>
    </>
  );
};

export default PosterSlider;

import React from "react";

import Carousel from "react-material-ui-carousel";

import projects from "./projects";
import CarouselItem from "./CarouselItem";

const carouselStyle = {
  width: { xs: "70%" },
};

const ProjectsCarousel = () => {
  return (
    <Carousel fullHeightHover={false} sx={carouselStyle}>
      {projects.map((item, i) => (
        <CarouselItem key={i} item={item} />
      ))}
    </Carousel>
  );
};

export default ProjectsCarousel;

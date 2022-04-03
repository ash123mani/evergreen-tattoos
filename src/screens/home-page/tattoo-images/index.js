import React from "react";
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";
import Slider from "react-slick";

import { ImageWrapper } from './styles'

const TattoImages = ({ showCases }) => {
  console.log("showCases", showCases)

  return showCases.map((image) => {
    return (
      <ImageWrapper>
      <GatsbyImage
        image={image.gatsbyImageData}
        className="yo-image"
        imgStyle={{ height: "100vh" }}
      />
      </ImageWrapper>
    )
  })
};



const TattooImages2 = () => {
  const images = [
    "../../../images/hp-banner.jpeg",
    "../../../images/home-page-banner.jpg"
  ]

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Slider {...settings}>
      {images.map((image) => {
        return (
          <TattoImages src={image} key={image} />
        )
      })}
    </Slider>
  )
}

export default TattoImages

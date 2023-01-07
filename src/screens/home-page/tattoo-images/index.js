import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

import { ImagesContainer, ImageWrapper } from "./styles"

const TattoImages = ({ showCases }) => {
  return (
    <ImagesContainer>
      {showCases.map((image) => {
        return (
          <ImageWrapper>
            <GatsbyImage
              image={image.gatsbyImageData}
              className="yo-image"
              imgStyle={{ height: "100vh" }}
            />
          </ImageWrapper>
        )
      })}
    </ImagesContainer>
  )
  // return showCases.map((image) => {
  //   return (
  //     <ImageWrapper>
  //     <GatsbyImage
  //       image={image.gatsbyImageData}
  //       className="yo-image"
  //       imgStyle={{ height: "100vh" }}
  //     />
  //     </ImageWrapper>
  //   )
  // })
}

export default TattoImages

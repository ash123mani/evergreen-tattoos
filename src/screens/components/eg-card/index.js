import React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { string, boolean } from "prop-types"

import { EGCardContainer, Title } from "./styles"

const EGCard = ({ title, image, globTheme, asLink, link }) => {
  const renderContainer = () => {
    return (
      <EGCardContainer globTheme={globTheme}>
        <GatsbyImage
          placeholder="blurred"
          layout="fixed"
          image={image.gatsbyImageData}
          width={400}
          height={400}
          loading="eager"
          transformOptions={{ fit: "contain" }}
          imgStyle={{
            borderRadius: "4px",
          }}
          style={{
            flex: "1",
          }}
        />
        <Title>{title}</Title>
      </EGCardContainer>
    )
  }

  if (asLink && link) {
    return <Link to={link}>{renderContainer()}</Link>
  }

  return renderContainer()
}

EGCard.propTypes = {
  title: string,
  asLink: boolean,
  link: string
}

EGCard.defaultProps = {
  title: "",
  asLink: false,
  link: ''
}

export default EGCard

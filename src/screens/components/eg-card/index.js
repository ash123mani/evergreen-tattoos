import React from 'react'
import { GatsbyImage } from "gatsby-plugin-image";
import { string } from 'prop-types'

import { EGCardContainer, Title  } from './styles'

const EGCard = ({ title, image, globTheme }) => {
  return (
    <EGCardContainer globTheme={globTheme}>
      <GatsbyImage
        placeholder="blurred"
        layout="fixed"
        image={image.gatsbyImageData}
        width={400}
        height={400}
        loading="eager"
        transformOptions={
          { fit: "contain" }
        }
        imgStyle={{
          borderRadius: "4px",
        }}
        style={{
          flex: "1"
        }}
      />
      <Title>
        {title}
      </Title>
    </EGCardContainer>
  )
}

EGCard.propTypes = {
  title: string
}

EGCard.defaultProps = {
  title: ''
}

export default EGCard

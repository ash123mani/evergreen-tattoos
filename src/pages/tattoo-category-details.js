import React, { Fragment } from "react"
import { graphql } from "gatsby"

import TattooCategoryDetails from "../screens/tattoo-category-details"

const TattoCategoryDetails = ({ pageContext, data }) => {
  const { slug, categoryName } = pageContext
  const {
    contentfulTattooCategoryDetails: { description: { description }, tattooCategoryImages },
  } = data

  return (
    <Fragment>
      <title>{categoryName}</title>
      <TattooCategoryDetails categoryName={categoryName} slug={slug} description={description} tattooCategoryImages={tattooCategoryImages} />
    </Fragment>
  )
}

export const query = graphql`
  query CategoryDetails($categoryName: String!) {
    contentfulTattooCategoryDetails(categoryName: { eq: $categoryName }) {
      description {
        description
      }
      tattooCategoryImages {
        gatsbyImageData
      }
    }
  }
`

export default TattoCategoryDetails

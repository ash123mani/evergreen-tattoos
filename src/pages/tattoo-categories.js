import React, { Fragment } from 'react'
import { graphql } from 'gatsby'

import TattooCategoriesPage from '../screens/tattoo-categories'

const TattooCategories = ({ data }) => {
  const { allContentfulTattooCategories: { nodes = []} } = data
  return (
    <Fragment>
      <title>Tattoo Catgeories</title>
      <TattooCategoriesPage
        pageData={nodes}
      />
    </Fragment>
  )
}

export const query = graphql`
  query TattooCategories {
    allContentfulTattooCategories {
      nodes {
        id
        categoryName
        categoryImage {
          gatsbyImageData
        }
      }
    }
  }
`

export default TattooCategories

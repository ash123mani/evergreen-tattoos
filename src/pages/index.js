import React, { Fragment } from 'react'
import { graphql } from 'gatsby'

import HomePage from '../screens/home-page'

const IndexPage = ({ data }) => {
  const { contentfulHomePage } = data

  return (
    <Fragment>
      <title>Home Page</title>
      <HomePage 
        pageData={contentfulHomePage} 
      />
    </Fragment>
  )
}

export const query = graphql`
  query Index {
    contentfulHomePage {
      title
      subTitle
      showCases {
        gatsbyImageData
      }
    }
  }
`

export default IndexPage

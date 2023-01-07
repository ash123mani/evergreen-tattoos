import React from "react"

import { Main } from "./styles"
import CategoryDetails from "./category-details"
import CategoryListing from "./category-listing"

const TattooCategoryDetails = ({ categoryName, description, tattooCategoryImages, slug }) => {
  return (
    <Main>
      <CategoryDetails categoryName={categoryName} description={description} />
      <CategoryListing tattooCategoryImages={tattooCategoryImages} />
    </Main>
  )
}

export default TattooCategoryDetails

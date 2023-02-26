import React from "react"

import CategoryDetails from "./category-details"
import CategoryListing from "./category-listing"
import Main from "../components/main";

const TattooCategoryDetails = ({ categoryName, description, tattooCategoryImages, slug }) => {
  return (
    <Main>
      <CategoryDetails categoryName={categoryName} description={description} />
      <CategoryListing tattooCategoryImages={tattooCategoryImages} />
    </Main>
  )
}

export default TattooCategoryDetails

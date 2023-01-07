import React from "react"

import { DetailsContainer } from "./styles"
import Title from "../../components/title"

const CategoryDetails = ({ categoryName, description }) => {
  return (
    <DetailsContainer>
      <Title
        type="no-border"
        title={categoryName}
        css={{ textAlign: "center" }}
      />
      <Title
        type="no-border"
        category="subtitle"
        title={description}
        css={{ textAlign: "center" }}
      />
    </DetailsContainer>
  )
}

export default CategoryDetails

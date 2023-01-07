import React from "react";

import EGCard from "../../components/eg-card";
import { CategoryCards } from "./styles";

const CategoryListing = ({ tattooCategoryImages }) => {
    return (
        <CategoryCards>
          {tattooCategoryImages.map((image) => {
            // const { categoryName, categoryImage, id } = category
            return  <EGCard  image={image}  />
          })}
        </CategoryCards>
   );
  };
  
  export default CategoryListing;
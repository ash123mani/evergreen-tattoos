import React from "react";

import EGCard from "../../components/eg-card";
import { CategoryCards } from "./styles";

const CategoryListing = ({ tattooCategoryImages }) => {
    return (
        <CategoryCards>
          {tattooCategoryImages.map((image) => {
            console.log("image", image)
            const { description } = image
            // const { categoryName, categoryImage, id } = category
            return  <EGCard  image={image}  description={description} />
          })}
        </CategoryCards>
   );
  };
  
  export default CategoryListing;
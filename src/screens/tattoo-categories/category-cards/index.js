import React from "react";

import EGCard from "../../components/eg-card";
import { CategoryCards } from "./styles";

const TattooCategoriesPage = ({ pageData }) => {
  return (
      <CategoryCards>
        {pageData.map((category) => {
          const { categoryName, categoryImage, id } = category
          return  <EGCard title={categoryName} image={categoryImage} key={id} />
        })}
      </CategoryCards>
 );
};

export default TattooCategoriesPage;

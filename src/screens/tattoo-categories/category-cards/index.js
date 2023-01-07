import React from "react";

import EGCard from "../../components/eg-card";
import kebabCase from "../../../utils/kebab-case"
import { CategoryCards } from "./styles";

const TattooCategoriesPage = ({ pageData }) => {
  return (
      <CategoryCards>
        {pageData.map((category) => {
          const { categoryName, categoryImage, id } = category;
          const to = `/tattoo-category-details/${kebabCase(categoryName)}`;
          
          return  <EGCard title={categoryName} image={categoryImage} key={id} link={to} asLink />
        })}
      </CategoryCards>
 );
};

export default TattooCategoriesPage;

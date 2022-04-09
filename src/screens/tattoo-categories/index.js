import React from "react";

import LandingSection from "./landing-section";
import TattooCategories from "./category-cards";
import { Main } from "./styles";

const TattooCategoriesPage = ({ pageData }) => {
  return (
    <Main>
      <LandingSection />
      <TattooCategories
        pageData={pageData} 
      />
    </Main>
  );
};

export default TattooCategoriesPage;

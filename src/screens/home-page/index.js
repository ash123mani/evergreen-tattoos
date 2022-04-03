import React from "react";

import Title from "../components/title";
import TattoImages from "./tattoo-images";
import ExploreButton from "./explore-button";
import { Main, Bottom } from "./styles";

const HomePage = ({ pageData }) => {
  const { title, subTitle, showCases } = pageData;
  return (
    <Main>
      <TattoImages showCases={showCases} />
      <Bottom>
        <Title type="no-border" title={title} />
        <Title
          type="no-border"
          category="subtitle"
          title="We are a team of Award winning tattoo artist to help you get a perfect creative custom tattoo which is uniquely designed based on your ideas, values and beliefs. Aliens tattoo is the brand people trust, we are recognised as one of the best tattoo studio in Mumbai / India."
        />
        <ExploreButton  style={{marginTop: "20px"}}/>
      </Bottom>
    </Main>
  );
};

export default HomePage;

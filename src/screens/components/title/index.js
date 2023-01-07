import React, { Fragment } from "react";
import { string, oneOf } from "prop-types";

import { Heading } from "./styles";

const Title = ({ title, as, type, category, ...rest }) => {
  return (
    <Heading as={type==="subtitle" ? "h2" : as} type={type} category={category} {...rest}>
      {title}
    </Heading>
  );
};

Title.propTypes = {
  title: string.isRequired,
  as: string,
  type: oneOf(["no-border", "top", "bottom"]),
  category: oneOf(["title", "subtitle"]),
};

Title.defaultProps = {
  as: "h1",
  type: "top",
  category: "title",
};

export default Title;

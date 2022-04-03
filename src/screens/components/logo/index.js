import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { css } from 'styled-components'

import { Link } from "gatsby";

const csss = css`
  /* filter: invert(100%); */
`

const Logo = () => {
  return (
    <Link to="/">
      <StaticImage
        placeholder="blurred"
        layout="fixed"
        src="../../../images/eg-logo.jpg"
        alt="EverGreen Tattoo logo"
        height={180}
        loading="eager"
        transformOptions={
          { fit: "contain" }
        }
        style={{
          // filter: 'invert(100%)'
        }}
      />
    </Link>
  );
};

export default Logo;

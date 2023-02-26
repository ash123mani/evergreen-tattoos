import styled from "styled-components";
import { Link } from "gatsby";

import { mediaQueries } from '../../../utils/responsive'

export const Explore = styled(Link)`
  padding: 8px 12px;
  border: 1px solid #fff;
  font-size: 28px;
  border-radius: 2px;
  color: #fff;
  width: 300px;

  &:hover {
    color: #fff;
    background-color: #000000b8;
  }

  @media ${mediaQueries['large-down']} {
    font-size: 20px;
  };
`;

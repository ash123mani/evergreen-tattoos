import styled, { css } from 'styled-components'
import { Link } from 'gatsby'

import { mediaQueries } from '../../../utils/responsive'

export const Nav = styled.nav`
  position: fixed;
  display: inline-flex;
  flex-direction: row;
  padding: 16px 80px;
  bottom: 0;
  justify-content: space-between;
  align-items: center;
  z-index: 10;
  width: 100vw;
  border-radius: 4px 4px 0px 0px;
  border-top: 1px solid grey;
  a:first-child {
    margin-bottom: auto;
  };

  @media ${mediaQueries['medium-down']} {
    padding: 12px 4px;
  };
`

export const NavLink = styled(Link)`
  padding: 12px;
  font-size: 32px;
  font-weight: 400;
  color: white;

  @media ${mediaQueries['large-down']} {
    padding: 8px 16px;
    font-size: 20px;
  };
`

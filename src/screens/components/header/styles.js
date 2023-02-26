import styled, { css } from 'styled-components'
import { Link } from 'gatsby'

import { mediaQueries } from '../../../utils/responsive'

export const Nav = styled.nav`
  /* height: calc(100vh - 40px); */
  position: fixed;
  display: inline-flex;
  flex-direction: row;
  padding: 16px 80px;
  bottom: 0;
  justify-content: space-between;
  align-items: center;
  background: #3e3a3a38;
  z-index: 10;
  /* background-color: white; */
  width: 100vw;
  border-radius: 18px 18px 0px 0px;
  background: repeating-radial-gradient(#182831, transparent 100px);
    /* height: 100vh; */
  /* border-left: 1px solid #000000bd;
  border-right: 1px solid #000000bd; */
  a:first-child {
    margin-bottom: auto;
  };

  @media ${mediaQueries['large-down']} {
    padding: 80px 40px;
  };

  @media ${mediaQueries['medium-down']} {
    padding: 80px 4px;
  };
`

export const NavLink = styled(Link)`
  padding: 12px;
  font-size: 32px;
  font-weight: 400;
  /* margin-bottom: auto; */
  font-weight: 700;
  color: white;
`

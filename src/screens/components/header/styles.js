import styled, { css } from 'styled-components'
import { Link } from 'gatsby'

export const Nav = styled.nav`
  height: calc(100vh - 40px);
  position: sticky;
  display: inline-flex;
  flex-direction: column;
  padding: 40px 80px;
  top: 0px;
  justify-content: space-between;
  align-items: center;
  /* border-left: 1px solid #000000bd;
  border-right: 1px solid #000000bd; */
  a:first-child {
    margin-bottom: auto;
  };
`

export const NavLink = styled(Link)`
  padding: 12px;
  font-size: 32px;
  font-weight: 400;
  margin-bottom: auto;
  font-weight: 700;
  color: #08151d;
`

import styled from 'styled-components'

import { mediaQueries } from '../../utils/responsive'

export const Main = styled.main`
  width: 100%;
  background-color: var(--eg-medium-black);
  display: inline-flex;
  min-height: 100vh;
  overflow: auto;
  /* display: grid;
  grid-template-columns: repeat(auto-fill, minmax(50%, 50%));
  gap: 40px;
  grid-template-columns: 50% 50%; */
    /* grid-auto-flow: row; */

  @media ${mediaQueries['large-down']} {
    flex-direction: column-reverse;
    padding: 120px 40px;
  }
`

export const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 300px;
  padding: 0 20px;
  text-align: center;
`

import styled from 'styled-components'

import { mediaQueries } from '../../../utils/responsive'

export const Wrapper = styled.div`
  /* padding: 0px 12%; */
  display: flex;
  position: relative;
  flex-direction: column;

  @media ${mediaQueries['large-down']} {
    /* flex-direction: column; */
  }
`

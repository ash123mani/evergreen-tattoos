import styled, { css } from 'styled-components'

import { mediaQueries } from '../../../utils/responsive'


export const EGCardContainer = styled.div`
  /* padding: 12px 12px; */
  border-radius: 4px;
  border: 1px solid #ffffff87;
  max-width: 432px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
  ${containerStyles};
`

export const Title = styled.h3`
  font-size: 32px;
  color: var(--eg-dark-white);
  text-align: center;
  padding: 24px 0 12px;
  ${titleStyles};

  @media ${mediaQueries['medium-down']} {
    font-size: 24px;
  };
`

export const Description = styled.h4`
  font-size: 20px;
  padding: 24px 12px 12px;
  color: #ffffff87;
  text-align: center;
  font-weight: 400;
  border-top: 1px solid #ffffff87;
`

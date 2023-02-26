import styled, { css } from 'styled-components'

import { mediaQueries } from '../../../utils/responsive'

export const imgStyle = css`
  filter: invert;
`

export const ImagesContainer = styled.div`
  display: flex;

  @media ${mediaQueries['large-down']} {
    flex-direction: column-reverse;
    padding: 60px 12px;
    row-gap: 40px;
  }
`

export const ImageWrapper = styled.div`
  @media ${mediaQueries['xlarge-up']} {
    & .yo-image {
    height: 100vh;
    width: 200px;
    filter: grayscale(1);
    border-right: 1px solid var(--eg-dark-black);
    transition: all 0.2s linear;

    &:hover {
      width: 100%;
      filter: grayscale(0);
    }
  }
  }
`

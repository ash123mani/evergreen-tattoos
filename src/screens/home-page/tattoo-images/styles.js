import styled, { css } from 'styled-components'

export const imgStyle = css`
  filter: invert;
`

export const ImageWrapper = styled.div`
  & .yo-image {
    height: 100vh;
    width: 200px;
    filter: grayscale(1);
    border-right: 2px solid var(--eg-dark-white);
    transition: all 0.3s linear;

    &:hover {
      width: 100%;
      filter: grayscale(0);
    }
  }
`

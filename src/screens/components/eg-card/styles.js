import styled, { css } from 'styled-components'

const theme = window !== undefined && window.localStorage.getItem('theme');

const containerStyles = css`
  background-color: ${({ globTheme }) => {
    if(theme === 'light' || globTheme === 'light') {
      return 'var(--eg-dark-white)'
    }
  }};
`

const titleStyles = css`
  color: ${({ globTheme }) => {
    if(theme === 'light' || globTheme === 'light') {
      return 'var(--eg-dark-black)'
    }
  }};
`

export const EGCardContainer = styled.div`
  /* padding: 12px 12px; */
  border-radius: 4px;
  border: 1px solid #ffffff87;
  max-width: 432px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* background: var(--eg-dark-black); */
  margin: 0 auto;
  ${containerStyles};
  /* box-shadow: 0 5px 50px rgba(0, 0, 0, 0.85); */
`

export const Title = styled.h3`
  font-size: 32px;
  color: var(--eg-dark-white);
  text-align: center;
  padding: 24px 0 12px;
  ${titleStyles};
`

export const Description = styled.h4`
  font-size: 20px;
  padding: 24px 12px 12px;
  color: var(--eg-dark-white);
  text-align: center;
  font-weight: 400;
`

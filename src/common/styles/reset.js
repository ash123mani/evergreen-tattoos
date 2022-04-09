import { createGlobalStyle } from 'styled-components'

// https://perishablepress.com/a-killer-collection-of-global-css-reset-styles/
// http://html5doctor.com/html-5-reset-stylesheet/
// https://dev.to/hankchizljaw/a-modern-css-reset-6p3

const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    border: 0;
    box-sizing: border-box;
  }

  *::before,
  *::after {
    box-sizing: border-box;
  }

  &::selection {
    color: var(--eg-dark-white);
    background-color: var(--eg-dark-black);
  }

  html, body {
    font-size: 100%;
  }

  body {
    font-family: 'Nunito';
    line-height: 1.4;
    color: #0000008a;
  }

  a {
    text-decoration: none;
    color: #551a8b;

    &:hover {
      color: #00c;
    }
  }

  ul, ol {
  padding-left: 0;
  list-style-position: outside;
}
`

export default GlobalStyles

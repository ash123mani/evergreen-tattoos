import styled from 'styled-components'

export const Main = styled.main`
  width: 100%;
  background-color: var(--eg-medium-black);
  display: inline-flex;
  height: 100vh;
  /* display: grid;
  grid-template-columns: repeat(auto-fill, minmax(50%, 50%));
  gap: 40px;
  grid-template-columns: 50% 50%; */
    /* grid-auto-flow: row; */
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

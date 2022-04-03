import styled, { css } from "styled-components";

export const Heading = styled.h1`
  font-size: 48px;
  margin-bottom: 24px;
  border-top: 1px solid #000000bd;
  border-bottom: 1px solid #000000bd;
  color: #fff;

  ${({ type }) => {
    return (
      type === "no-border" &&
      css`
        border: none;
      `
    );
  }};

  ${({ category }) => {
    return (
      category === "subtitle" &&
      css`
        font-size: 22px;
        font-weight: 500;
      `
    );
  }}
`;

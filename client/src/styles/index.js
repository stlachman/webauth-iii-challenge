import styled, { css, createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%;
  }
  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }
 
  *, *:before, *:after {
    box-sizing: inherit;
  }
  p {
    font-size: 1.6rem;
  }
  li {
    font-size: 1.5rem;
  }
`;

export const Container = styled.div`
  margin: 4rem auto 0;
  max-width: 1200px;
  ${props =>
    props.textCenter &&
    css`
      text-align: center;
    `};
`;

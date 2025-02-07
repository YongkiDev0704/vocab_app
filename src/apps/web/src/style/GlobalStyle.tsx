import { createGlobalStyle } from 'styled-components';

export const MAX_WIDTH = 701;

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;     
  }

  body {
    font-family: 'Arial', sans-serif;
    background-color: #f9f9f9;
    color: #333;
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

`;

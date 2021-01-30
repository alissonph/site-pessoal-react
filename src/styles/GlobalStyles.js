import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *, input, button{
    font-family: 'Roboto', sans-serif;
  }

  html {
    /* a cada 1rem será considera 10px */
    font-size: 62.5%;
  }

  body {
    color: #a4a5a6;
  }

  a{
    text-decoration: none;
    color: inherit;
  }

  a:hover{
    color: #e0a80d;
  }

  @media screen and (max-width: 425px){
    html {
      font-size: 50%;
    }
  }
`;
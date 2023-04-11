import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
  }

  body {
    font-family: 'Inter', sans-serif;
    color: ${(props) => props.theme.brown}
  }

  input, textarea, button {
    font-family: 'Inter', sans-serif;
  }

  .container {
    width: 100%;
    max-width: 1150px;
    margin: 0 auto;
    padding: 0 16px;
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
  }
`;

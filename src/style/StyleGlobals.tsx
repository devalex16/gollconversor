import {createGlobalStyle} from 'styled-components';

const CSSReset = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  :root {
    font-size: 62.5%;
  }

  html, body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    width: 100vw;
    background: #161B22;
    font-size: 1.6rem;
    font-family: sans-serif;
  }

`;

export default CSSReset;
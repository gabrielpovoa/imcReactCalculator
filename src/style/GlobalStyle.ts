import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        margin:0;
        padding: 0;
        box-sizing: border-box;
        transition: all .3s linear;
        outline: none;
        border: none;
    }
    html {
        font-size: 62.5%;
        overflow-x: hidden;
    }
    body {
        background-color: #121212;
        font-family: 'Arial', sans-serif
    }
`;

export default GlobalStyles
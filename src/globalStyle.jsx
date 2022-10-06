import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle `
    :root{
        --dark-blue: #102b3e;
        --green-100: #8ab7b7;
        --green-300: #1ec69f;
        --gray-100: #cdd8e1;
        --gray-300: #657886;
    }

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: sans-serif;
    }
`
export default GlobalStyle;
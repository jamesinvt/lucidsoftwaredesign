import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *, *:before, *:after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    html {
        box-sizing: border-box;
        scroll-behavior: smooth;
        font-size: 100%;
        
    }
    body {
         font-family: 'Lato', sans-serif;
         font-size: 16px;
         background: ${(props) => props.theme.colors.background};
         color: ${(props) => props.theme.colors.onBackground};
    }
    a {
        text-decoration: none; 
    }
`


export default GlobalStyle;
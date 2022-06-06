import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`html, body {
    font-family: "Helvetica Neue", --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    padding:0;
    box-sizing: border-box;
    background-color: #fff;

    

    .container-fluid{
        padding: 0px 100px 0px;
        display: flex;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
    }

    cursor: none;
}`;

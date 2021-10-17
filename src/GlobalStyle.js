import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        --light: #232227;
        --dark: #0c0b10;
        --white: #e0e0e0;
    }

    *, *::before, *::after{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html{
        font-family: 'Open Sans',sans-serif;
        font-size: 62.5%;
    }
    body{
        background-color: var(--dark);
    }

    /* responsiveness... */

    @media screen and (max-width: 998px) {
        html{
            font-size: 55%;
        }
    }

    @media screen and (max-width: 768px) {
        html{
            font-size: 45%;
        }
    }

`;
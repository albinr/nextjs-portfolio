import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    html {
        box-sizing: border-box;
        width: 100%;
        scroll-behavior: smooth;
    }
    body {
        padding: 0;
        margin: 0;
        width: 100%;
        min-height: 100%;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    *,
    *:before,
    *:after {
        box-sizing: inherit;
    }
    html {
    scrollbar-width: thin;
    scrollbar-color: var(--dark-slate) var(--navy);
    }
    ::-webkit-scrollbar {
        width: 12px;
    }
    ::-webkit-scrollbar-track {
        background: var(--navy);
    }
    ::-webkit-scrollbar-thumb {
        background-color: var(--dark-slate);
        border: 3px solid var(--navy);
        border-radius: 10px;
    }
    h1, h2, h3, h4, h5, h6{
        padding: 0;
        margin: 0;
    }
`;

export default GlobalStyles;
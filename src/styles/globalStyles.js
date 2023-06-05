import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {
        --color-primary: #FD377E;
        --color-primary-2: #E34981;
        --color-Secondary: #03B898;
        --grey-1: #F8F9FA;
        --grey-2: #E9ECEF;
        --grey-Example: #868E96;
        --grey-3: #868E96;
        --gray-Texts: #343A40;
        --grey-4: #212529;
        --grey-5: rgba(0, 0, 0, 0.2);
        
    }

    #root {
        font-family: "Nunito", sans-serif;
    }

`;

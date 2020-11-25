import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        width: 100%;
        background-color: #121212;
        font-family: 'Anton', sans-serif;
    }

    .container {
        width: 80%;
        margin: 0 auto;
    }

    .gallery-item-1 {
        grid-row: 1 / span 2;
        grid-column: 1 / span 2;
    }

    .gallery-item-2 {
        grid-row: 1 / span 4;
        grid-column: 3 / span 4;
    }
    
    .gallery-item-3 {
        grid-row: 1 / span 3;
        grid-column: 7 / span 1;
    }
    
    .gallery-item-4 {
        grid-row: 1 / span 3;
        grid-column: 8 / span 3;
    }
    
    .gallery-item-5 {
        grid-row: 3 / span 5;
        grid-column: 1 / span 2;
    }
    
    .gallery-item-6 {
        grid-row: 5 / span 1;
        grid-column: 3 / span 3;
    }
    
    .gallery-item-7 {
        grid-row: 6 / span 2;
        grid-column: 3 / span 3;
    }
    
    .gallery-item-8 {
        grid-row: 5 / span 3;
        grid-column: 6 / span 3;
    }
    
    .gallery-item-9 {
        grid-row: 4 / span 4;
        grid-column: 9 / span 2;
    }
    
    .gallery-item-10 {
        grid-row: 4 / span 1;
        grid-column: 7 / span 2;
    }

    .link-detalle {
        width: 100%;
        height: 100%;
    }

    .no-decoration {
        text-decoration: none;
    }
`;

export default GlobalStyle;
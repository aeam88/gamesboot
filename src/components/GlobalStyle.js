import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        height: 100%;

        &::-webkit-scrollbar {
            width: 0.5rem;
        }

        &::-webkit-scrollbar-thumb {
            background-color: #B0A9FF;
        }
        
        &::scrollbar-width {
            width: thin;
        }

        &::scrollbar-color {
            background-color: #B0A9FF;
        }
    }

    body {
        width: 100%;
        height: 100%;
        background-color: #121212;
        font-family: 'Anton', sans-serif;
    }

    .container {
        width: 80%;
        margin: 0 auto;
    }

    .cargando-principales-container {
        width: 100%;
        height: 60vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .cargando-principales {
        color: white;
        font-size: 20px;
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

    .estrellas-busqueda {
        margin-left: 0 !important;

        img {
            margin-bottom: 0.5em;
            width: 22px;
            height: 22px;
        }
    }

    .busca-img {
        width: 215px;
        height: 121px;
        object-fit: cover;
    }


    @media (max-width: 1300px) {
        .container {
            width: 85%;
        }

        .star-destacado {
            width: 28px !important;
            height: 28px !important;
        }
    }

    @media (max-width: 1100px) {
        #lupa-buscar {
            width: 30px;
            height: 30px;
        }
    }

    @media (max-width: 1024px) {
        .gallery-item-1 {
            grid-row: 1 / span 3;
            grid-column: 1 / span 5;
        }
    
        .gallery-item-2 {
            grid-row: 1 / span 3;
            grid-column: 6 / span 5;
        }
        
        .gallery-item-3 {
            grid-row: 4 / span 3;
            grid-column: 1 / span 5;
        }
        
        .gallery-item-4 {
            grid-row: 4 / span 3;
            grid-column: 6 / span 5;
        }
        
        .gallery-item-5 {
            grid-row: 7 / span 3;
            grid-column: 1 / span 5;
        }
        
        .gallery-item-6 {
            grid-row: 7 / span 3;
            grid-column: 6 / span 5;
        }
        
        .gallery-item-7 {
            grid-row: 10 / span 3;
            grid-column: 1 / span 5;
        }
        
        .gallery-item-8 {
            grid-row: 10 / span 3;
            grid-column: 6 / span 5;
        }
        
        .gallery-item-9 {
            grid-row: 13 / span 3;
            grid-column: 1 / span 5;
        }
        
        .gallery-item-10 {
            grid-row: 13 / span 3;
            grid-column: 6 / span 5;
        }
    }


    @media (max-width: 876px) {
        .container {
            width: 90%;
        }
    }

    @media (max-width: 767px) {
        #main-logotipo {
            width: 80%;
        }

        #lupa-svg {
            width: 80%;
        }

        #close-svg {
            width: 60%;
        }

        #lupa-buscar {
            width: 25px;
            height: 25px;
            bottom: 22px;
        }

        .busca-img {
            width: 187px;
            height: 105px;
        }
    }

    @media (max-width: 600px) {
        .gallery-item-1 {
            grid-row: 1 / span 4;
            grid-column: 1 / span 10;
        }
    
        .gallery-item-2 {
            grid-row: 5 / span 4;
            grid-column: 1 / span 10;
        }
        
        .gallery-item-3 {
            grid-row: 9 / span 4;
            grid-column: 1 / span 10;
        }
        
        .gallery-item-4 {
            grid-row: 13 / span 4;
            grid-column: 1 / span 10;
        }
        
        .gallery-item-5 {
            grid-row: 17 / span 4;
            grid-column: 1 / span 10;
        }
        
        .gallery-item-6 {
            grid-row: 21 / span 4;
            grid-column: 1 / span 10;
        }
        
        .gallery-item-7 {
            grid-row: 25 / span 4;
            grid-column: 1 / span 10;
        }
        
        .gallery-item-8 {
            grid-row: 29 / span 4;
            grid-column: 1 / span 10;
        }
        
        .gallery-item-9 {
            grid-row: 33 / span 4;
            grid-column: 1 / span 10;
        }
        
        .gallery-item-10 {
            grid-row: 37 / span 4;
            grid-column: 1 / span 10;
        }

        .busca-img {
            width: 150px;
            height: 84px;
        }

        .estrellas-busqueda img {
            width: 18px;
            height: 18px;
        }

        .estrellas-detalle {
            width: 20px;
            height: 20px;
        }
    }

    @media (max-width: 400px) {
        .busca-img {
            width: 111px;
            height: 62px;
        }

        .estrellas-busqueda img {
            margin-bottom: 0.2em;
        }
    }
`;

export default GlobalStyle;
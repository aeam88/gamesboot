import React from 'react';
import {Link} from 'react-router-dom';

import styled from 'styled-components';

import starFull from '../assets/starFull.svg';
import starEmpty from '../assets/starEmpty.svg';

import playstation from '../assets/playstation.svg';
import steam from '../assets/steam.svg';
import xbox from '../assets/xbox.svg';
import nintendo from '../assets/nintendo.svg';
import apple from '../assets/apple.svg';
import gamepad from '../assets/gamepad.svg';


const CardResultado = ({juego, setIsSearching}) => {

    const getStars = () => {
        const stars = [];
        const rating = Math.floor(juego.rating);

        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                stars.push(<img alt="star" key={i} src={starFull} />); 
            } else {
                stars.push(<img alt="star" key={i} src={starEmpty} />);
            }
        }

        return stars;
    }

    const getPlatform = (platform) => {
        switch (platform) {
            case "PlayStation 4":
                return playstation;
            case "PlayStation 2":
            case "PlayStation 3":
                return playstation;    
            case "Xbox One":
                return xbox;
            case "Xbox":
            case "Xbox 360":
                return xbox;    
            case "PC":
                return steam;
            case "GameCube":
                return nintendo;    
            case "Nintendo Switch":
                return nintendo;
            case "IOS":
                return apple;
            default:
                return gamepad;                
        }
    }

    const CloseBusqueda = () => {
        setIsSearching(false);
    }

    return (
        <Link to={`/game/${juego.id}`} onClick={() => CloseBusqueda()} className="no-decoration">
            <CardResult>
                <LeftSide>
                    <img className="busca-img" src={juego.background_image} alt={juego.name} />
                    <div>
                        <h2>{juego.name}</h2>
                        <div className="estrellas-busqueda">
                            {getStars()}
                        </div>
                        <p>{juego.released}</p>
                    </div>
                </LeftSide>
                <Consolas>
                    {juego.platforms.map(data => (
                        <img key={data.platform.id} src={getPlatform(data.platform.name)} alt="name" />
                    ))}
                </Consolas>
            </CardResult>
        </Link>
    );
}

const CardResult = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5em;
    padding: 0.3em;
    background-color: transparent;
    transition: background-color 0.4s ease;

    :hover {
        background-color: rgba(176, 169, 255, 0.17);
    }

    @media (max-width: 767px) {
        margin-bottom: 0.8em;
    }
`;

const LeftSide = styled.div`
    display: flex;
    align-items: center;

    div {
        margin-left: 2em;
        h2 {
            color: #C4C4C4;
            font-weight: normal;
            text-transform: uppercase;
        }

        p {
            width: 120px;
            padding: 0.3em 1.5em;
            background-color: #B0A9FF;
            font-family: 'Open Sans', sans-serif;
            font-size: 0.9em;
            color: #FFFFFF;
        }

        @media (max-width: 767px) {
            h2 {
                font-size: 1.2em;
            }

            p {
                width: 110px;
                padding: 0.2em 1.2em;
            }
        }

        @media (max-width: 600px) {
            margin-left: 1em;
            h2 {
                font-size: 1em;
            }

            p {
                width: 100px;
                padding: 0.1em 1em;
                font-size: 0.8em;
            }
        }

        @media (max-width: 400px) {
            margin-left: 0.6em;
            h2 {
                font-size: 0.9em;
            }

            p {
                width: 90px;
                padding: 0.05em 0.6em;
                font-size: 0.7em;
            }
        }
    }
`;

const Consolas = styled.div`
    img {
        width: 25px;
        height: 25px;
        margin-left: 0.5em;
    }

    @media (max-width: 600px) {
        img {
            width: 20px;
            height: 20px;
        }
    }

    @media (max-width: 500px) {
        display: none;
    }
`;

export default CardResultado;
import React from 'react';
import {Link} from 'react-router-dom';

import styled from 'styled-components';

import valorantImg from '../assets/valorantMini.png';

const CardResultado = () => {
    return (
        <Link to="/" className="no-decoration">
            <CardResult>
                <LeftSide>
                    <img src={valorantImg} alt="Imagen" />
                    <div>
                        <h2>Valorant</h2>
                        <h4>Estrellas</h4>
                        <p>20 / 20 /2019</p>
                    </div>
                </LeftSide>
                <div>
                    <h3>ICONS CONSOLE</h3>
                </div>
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

    :hover {
        background-color: rgba(176, 169, 255, 0.17);
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
            padding: 0.3em 1.5em;
            background-color: #B0A9FF;
            font-family: 'Open Sans', sans-serif;
            font-size: 0.9em;
            color: #FFFFFF;
        }
    }
`;

export default CardResultado;
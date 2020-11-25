import React from 'react';
import {Link} from 'react-router-dom';

import styled from 'styled-components';

import starFull from '../assets/starFull.svg';
import starEmpty from '../assets/starEmpty.svg';

const CardDestacado = ({game}) => {

    const id = game.id;


    const getStars = () => {
        const stars = [];
        const rating = Math.floor(game.rating);

        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                stars.push(<img alt="star" key={i} src={starFull} />); 
            } else {
                stars.push(<img alt="star" key={i} src={starEmpty} />);
            }
        }

        return stars;
    }

    return (
        <DestacadoItem key={game.id}>
            <Link to={`/game/${id}`} className="link-detalle">
            <img src={game.background_image} alt="Imagen" className="dest-img" />
            <InfoDestacado>
                <h3>{game.name}</h3>
                <div>
                    {getStars()}
                </div>
            </InfoDestacado>
            </Link>
        </DestacadoItem>
    );
}

const InfoDestacado = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: absolute;
    top: 30%;
    left: 50%;
    opacity: 0;
    transform: translate(-50%, -50%);
    transition: all 0.5s ease;

    h3 {
        color: #ffffff;
        font-weight: normal;
    }

    div {
        img {
            width: 36px;
            height: 36px;
        }
    }
`;

const DestacadoItem = styled.figure`
    width: 24.94%;
    position: relative;
    

    &::before {
        content: '';
        width: 0;   
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background-color: rgba(0, 0, 0, 0.7);
        transition: width 0.5s ease;
    }

    &:hover::before {
        width: 100%;
    }

    &:hover ${InfoDestacado} {
        opacity: 1;
        top: 50%;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

export default CardDestacado;
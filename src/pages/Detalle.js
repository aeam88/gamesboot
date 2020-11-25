import React from 'react';

import styled from 'styled-components';

import Buscador from '../components/Buscador';

import {useDispatch, useSelector} from 'react-redux';
import {loadDetail} from '../actions/detailAction';

import {useParams} from 'react-router-dom';

import starFull from '../assets/starFull.svg';
import starEmpty from '../assets/starEmpty.svg';

const Detalle = ({isSearching, setIsSearching}) => {

    const {id} = useParams();

    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(loadDetail(id));
    }, [dispatch, id]);

    const {screen, game} = useSelector((state) => state.detail);

    const imgMostrar = screen.results.slice(1, 3);
    // const textoDescr1 = game.description.replace("<p>", "");
    // const textoDescr = textoDescr1.replace("</p>", "");


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
        <>
            <ContenedorImg>
                <img src={game.background_image} alt={game.name} />
            </ContenedorImg>
            <div className="container">
                <ContentTitNew>
                    <h2>{game.name}</h2>
                </ContentTitNew>
                <ContentDescription>
                    <p>{game.description}</p>
                </ContentDescription>
                <ContentImg>
                    {imgMostrar.map((image) => (
                        <div key={image.id}>
                            <img src={image.image} alt={game.name} />
                        </div>
                    ))}
                </ContentImg>
                <Puntuacion>
                    <h3>Puntuación</h3>
                    <div>
                        {getStars()}
                    </div>
                    <h4>{game.rating} / 5</h4>
                </Puntuacion>
            </div>
            {isSearching && (
                <Buscador />
            )}
        </>
    );
}

const ContenedorImg = styled.div`
    width: 100%;

    img {
        width: 100%;
        height: 62vh;
        object-fit: cover;
    }
`;

const ContentTitNew = styled.div`
    width: 40%;
    margin: 0 auto;

    h2 {
        text-align: center;
        text-transform: uppercase;
        padding: 2em;
        color: #C4C4C4;
        font-weight: normal;
        font-size: 2.2em;
        position: relative;

        ::before {
            content: '';
            position: absolute;
            top: 50%;
            left: -70px;
            width: 40%;
            height: 1px;
            background-color: #C4C4C4;
        }

        ::after {
            content: '';
            position: absolute;
            top: 50%;
            right: -70px;
            width: 40%;
            height: 1px;
            background-color: #C4C4C4;
        }
    }
`;

const ContentDescription = styled.div`
    width: 100%;

    p {
        color: #C4C4C4;
        font-family: 'Open Sans', sans-serif;
        line-height: 30px;
        text-align: center;
    }
`;

const ContentImg = styled.div`
    width: 100%;
    margin: 7em 0 5em 0;
    display: flex;
    justify-content: space-between;
    
    div {
        width: 25vw;
        position: relative;

        ::before {
            content: '';
            width: 25vw;
            height: 20vh;
            position: absolute;
            top: -10px;
            left: -10px;
            background-color: #B0A9FF;
        }

        img {
            width: 25vw;
            position: relative;
        }
    }
`;

const Puntuacion = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    h3 {
        text-transform: uppercase;
        padding: 2em 0 0.5em 0;
        color: #C4C4C4;
        font-weight: normal;
        font-size: 1.8em;
    }

    h4 {
        text-transform: uppercase;
        padding: 0.9em 0 1.2em 0;
        color: #C4C4C4;
        font-weight: normal;
        font-size: 1.4em;
    }

    div {
        img {
            margin: 0 .3em;
        }
    }
`;

export default Detalle;
import React from 'react';

import styled from 'styled-components';

import Buscador from '../components/Buscador';

import {useDispatch, useSelector} from 'react-redux';
import {loadDetail} from '../actions/detailAction';

import {useParams} from 'react-router-dom';

import starFull from '../assets/starFull.svg';
import starEmpty from '../assets/starEmpty.svg';

import {motion} from 'framer-motion';

const Detalle = ({isSearching, setIsSearching}) => {

    const imageAnim = {
        hidden: {opacity: 0},
        show: {opacity: 1, transition: {duration: 1}}
    }

    const textoAnim = {
        hidden: {opacity: 0, y: 200},
        show: {opacity: 1, y: 0, transition: {duration: 1}}
    }

    const {id} = useParams();

    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(loadDetail(id));
    }, [dispatch, id]);

    const {screen, game} = useSelector((state) => state.detail);

    const imgMostrar = screen.results.slice(1, 3);
    const textoDescr1 = game.description;


    const re = /<p>/g;
    const re2 = /<\/p>/g;

    let textoDescr2;
    
    if (textoDescr1 !== undefined) {
        const textoDescr = textoDescr1.replace(re, "");
        textoDescr2 = textoDescr.replace(re2, "");
    }


    const getStars = () => {
        const stars = [];
        const rating = Math.floor(game.rating);

        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                stars.push(<img alt="star" key={i} src={starFull} className="estrellas-detalle" />); 
            } else {
                stars.push(<img alt="star" key={i} src={starEmpty} className="estrellas-detalle" />);
            }
        }

        return stars;
    }

    return (
        <>
            <ContenedorImg variants={imageAnim} initial="hidden" animate="show">
                <img src={game.background_image} alt={game.name} />
            </ContenedorImg>
            <motion.div className="container" variants={textoAnim} initial="hidden" animate="show">
                <ContentTitNew>
                    <h2>{game.name}</h2>
                </ContentTitNew>
                <ContentDescription>
                    <p>{textoDescr2}</p>
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
            </motion.div>
            {isSearching && (
                <Buscador setIsSearching={setIsSearching} isSearching={isSearching} />
            )}
        </>
    );
}

const ContenedorImg = styled(motion.div)`
    width: 100%;
    border: none;

    img {
        width: 100%;
        height: 62vh;
        border: none;
        object-fit: cover;
    }

    @media (max-width: 1024px) {
        img {
            height: 55vh;
        }
    }
`;

const ContentTitNew = styled.div`
    width: 40%;
    margin: 0 auto;

    h2 {
        overflow:hidden;
        text-align: center;
        text-transform: uppercase;
        padding: 2em;
        color: #C4C4C4;
        font-weight: normal;
        font-size: 2.2em;
        position: relative;
        
        ::before,
        ::after {
        background-color: #C4C4C4;
        content: "";
        display: inline-block;
        height: 1px;
        position: relative;
        vertical-align: middle;
        width: 50%;
        }

        ::before {
        right: 0.5em;
        margin-left: -50%;
        }

        ::after {
        left: 0.5em;
        margin-right: -50%;
        }
    }

    @media (max-width: 1024px) {
        width: 60%;
    }

    @media (max-width: 767px) {
        h2 {
            font-size: 2em;
        }
    }

    @media (max-width: 600px) {
        width: 100%;
        h2 {
            font-size: 1.6em;
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

        @media (max-width: 767px) {
            font-size: 0.9em;
        }
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

        @media (max-width: 1024px) {
            width: 30vw;
            img {
                width: 30vw;
            }

            ::before {
                width: 30vw;
            }
        }
    }

    @media (max-width: 900px) {
        flex-direction: column;

        div {
            width: 100%;
            margin-bottom: 2em;
            img {
                width: 100%;
            }

            ::before {
                width: 80%;
                height: 30vh;
            }
        }
        
    }

    @media (max-width: 600px) {
        div {
            ::before {
                height: 20vh;
            }
        }
    }

    @media (max-width: 450px) {
        div {
            ::before {
                height: 10vh;
            }
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

    @media (max-width: 600px) {
        h3 {
            font-size: 1.5em;
        }
    
        h4 {
            text-transform: uppercase;
            padding: 0.9em 0 1.2em 0;
            color: #C4C4C4;
            font-weight: normal;
            font-size: 1.1em;
        }
    }
`;

export default Detalle;
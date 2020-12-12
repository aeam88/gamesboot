import React from 'react';

import {useDispatch, useSelector} from 'react-redux';
import {loadGames} from '../actions/gamesAction';

import CardDestacado from '../components/CardDestacado';
import CardNews from '../components/CardNews';
import Buscador from '../components/Buscador';

import {motion} from 'framer-motion';
import styled from 'styled-components';


const Home = ({isSearching, setIsSearching}) => {

    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(loadGames());
    }, [dispatch]);

    const {popular, newGames} = useSelector((state) => state.games);

    return (
        <>
        <Principales>
            {popular.length === 0 && (
                <div className="cargando-principales-container">
                    <p className="cargando-principales">Cargando...</p>
                </div>
            )}
            {popular.map((game) => (
                <CardDestacado key={game.id} game={game} />
            ))}
        </Principales>
        <NewGames>
            <div className="container">
                <ContentTitNew>
                    <h2>New Games</h2>
                </ContentTitNew>
                <ContentNew>
                    {newGames.map((ngame, index) => (
                        <CardNews key={ngame.id} ngame={ngame} index={index} />
                    ))}
                </ContentNew>
            </div>
        </NewGames>
        {isSearching && (
            <Buscador setIsSearching={setIsSearching} isSearching={isSearching} />
        )}
        </>
    );
}

const Principales = styled(motion.section)`
    width: 100%;
    height: 60vh;
    display: flex;
    justify-content: space-between;


    @media (max-width: 1300px) {
        height: 50vh;
    }

    @media (max-width: 1100px) {
        height: 40vh;
    }

    @media (max-width: 1024px) {
        flex-wrap: wrap;
        height: auto;
    }

`;

const NewGames = styled.section`
    width: 100%;
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

    @media (max-width: 876px) {
        h2 {
            font-size: 2em;
        }
    }

    @media (max-width: 767px) {
        h2 {
            font-size: 1.5em;
        }
    }

    @media (max-width: 600px) {
        h2 {
            padding: 2em 1em;
        }
    }

    @media (max-width: 450px) {
        h2 {
            padding: 2em 0.5em;
            font-size: 1.2em;
        }
    }
`;

const ContentNew = styled.div`
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(7, 5vw);
    grid-gap: 6px;

    figure {
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
        }
    }

    @media (max-width: 1024px) {
        grid-template-rows: repeat(15, 10vw);
    }

    @media (max-width: 600px) {
        grid-template-rows: repeat(40, 10vw);
    }
`;

export default Home;
import React from 'react';

import {useDispatch, useSelector} from 'react-redux';
import {loadGames} from '../actions/gamesAction';

import CardDestacado from '../components/CardDestacado';
import CardNews from '../components/CardNews';
import Buscador from '../components/Buscador';

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
            <Buscador />
        )}
        </>
    );
}

const Principales = styled.section`
    width: 100%;
    height: 60vh;
    display: flex;
    justify-content: space-between;
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
`;

export default Home;
import React from 'react';

import {fetchSearch, clearSearch} from '../actions/gamesAction';
import {useDispatch, useSelector} from 'react-redux';

import CardResultado from './CardResultado';

import {motion} from 'framer-motion';
import styled from 'styled-components';

const Buscador = ({setIsSearching, isSearching}) => {

    const buscarAnim = {
        hidden: {y: 1000},
        show: {y: 0, transition: {duration: 0.6, ease: 'easeInOut'}}
    }

    const dispatch = useDispatch();
    const [textInput, setTextInput] = React.useState('');

    const inputHandler = (e) => {
        setTextInput(e.target.value);
    }

    const submitSearch = (e) => {
        e.preventDefault();
        if (textInput !== '') {
            dispatch(fetchSearch(textInput));
        }
    }

    const {searched} = useSelector((state) => state.games);

    React.useEffect(() => {
        if (isSearching) {
            dispatch(clearSearch());
        }
    }, [dispatch, isSearching]);

    return (
        <Buscar variants={buscarAnim} initial="hidden" animate="show">
            <ContainerBuscar>
                <ContentBuecar>
                    <form onSubmit={submitSearch}>
                        <input type="text" value={textInput} onChange={inputHandler} name="busqueda" placeholder="BUSCAR JUEGOS..." />
                        <svg id="lupa-buscar" width="36" height="36" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M46.7131 43.944L33.06 30.2908C35.6496 27.0938 37.2084 23.0294 37.2084 18.6042C37.2084 8.34591 28.8625 0 18.6041 0C8.34582 0 0 8.34591 0 18.6042C0 28.8626 8.34591 37.2085 18.6042 37.2085C23.0294 37.2085 27.0938 35.6496 30.2908 33.0601L43.944 46.7132C44.3265 47.0956 44.9463 47.0956 45.3288 46.7132L46.7132 45.3287C47.0956 44.9463 47.0956 44.3263 46.7131 43.944ZM18.6042 33.2918C10.5051 33.2918 3.9167 26.7034 3.9167 18.6042C3.9167 10.5051 10.5051 3.91671 18.6042 3.91671C26.7034 3.91671 33.2918 10.5051 33.2918 18.6042C33.2918 26.7034 26.7034 33.2918 18.6042 33.2918Z" fill="#C4C4C4"/>
                        </svg>
                    </form>
                </ContentBuecar>
                <ContentResultados>
                {searched.length !== 0 ? (
                searched.map((juego) => (
                    <CardResultado key={juego.id} juego={juego} setIsSearching={setIsSearching} />
                ))
                ) : (<SinResultado>No hay resultados aún</SinResultado>) }
                    
                </ContentResultados>
            </ContainerBuscar>
        </Buscar>
    );
}

const Buscar = styled(motion.div)`
    width: 100%;
    height: 1800px;
    position: absolute;
    top: 80px;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.9);

    @media (max-width: 1024px) {
        height: 2420px;
    }

    @media (max-width: 767px) {
        top: 70px;
    }

    @media (max-width: 600px) {
        height: 3350px;
        background-color: rgba(0, 0, 0, 0.95);
    }
`;

const ContainerBuscar = styled.div`
    width: 75%;
    margin: 0 auto;


    @media (max-width: 1100px) {
        width: 90%;
    }
`;

const ContentBuecar = styled.div`
    width: 100%;
    display: flex;
    flex.direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 6em;

    form {

        width: 85%;
        position: relative;

        input {
            width: 100%;
            height: 80px;
            background-color: transparent;
            padding: 10px 20px;
            box-sizing: border-box;
            border-bottom: 1px solid #C4C4C4;
            border-top: 1px solid transparent;
            border-left: 1px solid transparent;
            border-right: 1px solid transparent;
            outline: none;
            font-size: 2.2em;
            font-family: 'Anton', sans-serif;
            color: #FFFFFF;
            margin-top: 1.5em;
        }

        svg {
            position: absolute;
            right: 0;
            bottom: 16px;
        }
    }

    @media (max-width: 1100px) {
        margin-top: 4em;
    }

    @media (max-width: 767px) {

        margin-top: 2em;

        form {
            width: 100%;

            input {
                font-size: 1.8em;
            }

            input[type="text"]::-webkit-input-placeholder {
                font-size: 0.8em;
            }
        }
    }

    @media (max-width: 500px) {
        margin-top: 2em;
        input {
            font-size: 1.4em;
            margin-top: 0.5em;
        }
    }
`;

const ContentResultados = styled.div`
    width: 85%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    margin-top: 2em;

    @media (max-width: 767px) {
        width: 100%;
    }

`;

const SinResultado = styled.div`
    text-align: center;
    font-size: 1.4em;
    color: #474747;
    text-transform: uppercase;

    @media (max-width: 600px) {
        font-size: 1em;
    }
    
`;

export default Buscador;
import React from 'react';

import {fetchSearch} from '../actions/gamesAction';
import {useDispatch} from 'react-redux';

import CardResultado from './CardResultado';

import styled from 'styled-components';

const Buscador = () => {

    const dispatch = useDispatch();
    const [textInput, setTextInput] = React.useState('');

    const inputHandler = (e) => {
        setTextInput(e.target.value);
    }

    const submitSearch = (e) => {
        e.preventDefault();
        dispatch(fetchSearch(textInput));
    }

    return (
        <Buscar>
            <ContainerBuscar>
                <ContentBuecar>
                    <form onSubmit={submitSearch}>
                        <input type="text" value={textInput} onChange={inputHandler} name="busqueda" placeholder="BUSCAR JUEGOS..." />
                        <svg width="36" height="36" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M46.7131 43.944L33.06 30.2908C35.6496 27.0938 37.2084 23.0294 37.2084 18.6042C37.2084 8.34591 28.8625 0 18.6041 0C8.34582 0 0 8.34591 0 18.6042C0 28.8626 8.34591 37.2085 18.6042 37.2085C23.0294 37.2085 27.0938 35.6496 30.2908 33.0601L43.944 46.7132C44.3265 47.0956 44.9463 47.0956 45.3288 46.7132L46.7132 45.3287C47.0956 44.9463 47.0956 44.3263 46.7131 43.944ZM18.6042 33.2918C10.5051 33.2918 3.9167 26.7034 3.9167 18.6042C3.9167 10.5051 10.5051 3.91671 18.6042 3.91671C26.7034 3.91671 33.2918 10.5051 33.2918 18.6042C33.2918 26.7034 26.7034 33.2918 18.6042 33.2918Z" fill="#C4C4C4"/>
                        </svg>
                    </form>
                </ContentBuecar>
                <ContentResultados>
                    <CardResultado />
                </ContentResultados>
            </ContainerBuscar>
        </Buscar>
    );
}

const Buscar = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 80px;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.85);
`;

const ContainerBuscar = styled.div`
    width: 75%;
    margin: 0 auto;
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
`;

const ContentResultados = styled.div`
    width: 85%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    margin-top: 2em;

`;

export default Buscador;
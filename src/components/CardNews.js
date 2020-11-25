import React from 'react';
import {Link} from 'react-router-dom';

import styled from 'styled-components';

import iconLink from '../assets/iconLink.svg';

const CardNews = ({ngame, index}) => {
    return (
        <GalleryItem className={`gallery-item-${index + 1}`}>
            <Link to={`/game/${ngame.id}`} className="link-detalle">
                <img src={ngame.background_image} alt="Imagen" className="gallery-img" />
                <InfoGItem>
                    <img alt="icon" src={iconLink} />
                </InfoGItem>
            </Link>
        </GalleryItem>
    );
}

const InfoGItem = styled.div`
    width: 40px;
    height: 40px;
    background-color: #B0A9FF;
    border-radius: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    position: absolute;
    top: 30%;
    left: 50%;
    opacity: 0;
    transform: translate(-50%, -50%);
    transition: all 0.5s ease;


    img {
        width: 20px !important;
        height: 20px !important;
        margin-bottom: 2px;
        margin-left: 2px;
    }
`;

const GalleryItem = styled.figure`
    position: relative;

    &::before {
        content: '';
        width: 100%;
        height: 0;   
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background-color: rgba(0, 0, 0, 0.6);
        transition: height 0.5s ease;
    }

    &:hover::before {
        height: 100%;
    }

    &:hover ${InfoGItem} {
        opacity: 1;
        top: 50%;
    }
`;

export default CardNews;
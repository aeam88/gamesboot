import React from 'react';
import {Link} from 'react-router-dom';

import styled from 'styled-components';

const Header = ({isSearching, setIsSearching}) => {
    return (
        <MainHeader>
        <div className="container">
            <ContetHeader>
                <div className="logo">
                    <Link to="/">
                        <svg id="main-logotipo" width="40" height="43" viewBox="0 0 50 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 0H23.2759V16.3793H0V0Z" fill="#B0A9FF"/>
                            <path d="M0 36.2069H23.2759V52.5862H0V36.2069Z" fill="#B0A9FF"/>
                            <rect y="18.1035" width="14.9425" height="16.3793" fill="#B0A9FF"/>
                            <rect id="left-eye" x="19.2529" y="25.5747" width="4.02299" height="8.90805" fill="#B0A9FF"/>
                            <path d="M50 0H26.4368V16.3793H50V0Z" fill="#B0A9FF"/>
                            <path d="M50 36.2069H26.4368V52.5862H50V36.2069Z" fill="#B0A9FF"/>
                            <rect width="14.9425" height="16.3793" transform="matrix(-1 0 0 1 50 18.1035)" fill="#B0A9FF"/>
                            <rect id="right-eye" x="26.2529" y="25.5747" width="4.31035" height="8.90805" fill="#B0A9FF"/>
                        </svg>                            
                    </Link>
                </div>
                <Lupa>
                    <div onClick={() => setIsSearching(!isSearching)}>
                        {!isSearching ? (
                            <svg id="lupa-svg" width="22" height="22" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M25.8413 24.3094L18.2885 16.7566C19.721 14.9881 20.5834 12.7397 20.5834 10.2917C20.5834 4.61689 15.9665 0 10.2917 0C4.61684 0 0 4.61689 0 10.2917C0 15.9665 4.61689 20.5834 10.2917 20.5834C12.7397 20.5834 14.9881 19.721 16.7566 18.2885L24.3094 25.8414C24.521 26.0529 24.8639 26.0529 25.0755 25.8414L25.8414 25.0755C26.0529 24.8639 26.0529 24.5209 25.8413 24.3094ZM10.2917 18.4167C5.81132 18.4167 2.16669 14.7721 2.16669 10.2917C2.16669 5.81132 5.81132 2.16669 10.2917 2.16669C14.7721 2.16669 18.4167 5.81132 18.4167 10.2917C18.4167 14.7721 14.7721 18.4167 10.2917 18.4167Z" fill="#B0A9FF"/>
                            </svg>
                        ) : (
                            <svg id="close-svg" width="18" height="18" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M26 2.6L23.4 0L13 10.4L2.6 0L0 2.6L10.4 13L0 23.4L2.6 26L13 15.6L23.4 26L26 23.4L15.6 13L26 2.6Z" fill="#B0A9FF"/>
                            </svg>
                        )} 
                    </div>
                </Lupa>
            </ContetHeader>
        </div>
    </MainHeader>
    );
}

const MainHeader = styled.header`
    width: 100%;
    height: 80px;
    background-color: #343434;

    @media (max-width: 767px) {
        height: 70px;
    }
`;

const ContetHeader = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 767px) {
        height: 70px;
    }
`;

const Lupa = styled.div`
    div {
        cursor: pointer;
    }
`;

export default Header;
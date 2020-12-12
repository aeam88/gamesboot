import React from 'react';
import {Link} from 'react-router-dom';

import {motion} from 'framer-motion';
import styled from 'styled-components';

const Footer = () => {

    const logoAnim = {
        hidden: {opacity: 0, y: 100},
        show: {opacity: 1, y: 0, transition: {duration: 1}}
    }

    return (
        <MainFooter>
            <div className="container">
                <ContentFooter variants={logoAnim} initial="hidden" animate="show">
                    <Link to="/">
                        <svg width="40" height="43" viewBox="0 0 50 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 0H23.2759V16.3793H0V0Z" fill="#545454"/>
                            <path d="M0 36.2069H23.2759V52.5862H0V36.2069Z" fill="#545454"/>
                            <rect y="18.1035" width="14.9425" height="16.3793" fill="#545454"/>
                            <rect x="19.2529" y="25.5747" width="4.02299" height="8.90805" fill="#545454"/>
                            <path d="M50 0H26.4368V16.3793H50V0Z" fill="#545454"/>
                            <path d="M50 36.2069H26.4368V52.5862H50V36.2069Z" fill="#545454"/>
                            <rect width="14.9425" height="16.3793" transform="matrix(-1 0 0 1 50 18.1035)" fill="#545454"/>
                            <rect width="4.31035" height="8.90805" transform="matrix(-1 0 0 1 30.7471 25.5747)" fill="#545454"/>
                        </svg>
                    </Link>
                    <p>GamesBoot 2020</p>
                </ContentFooter>
            </div>
        </MainFooter>
    );
}

const MainFooter = styled.footer`
    width: 100%;
    height: 170px;
    margin: 5em 0;
`;

const ContentFooter = styled(motion.div)`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p {
        text-transform: uppercase;
        color: #C4C4C4;
        margin-top: 10px;
    }
`;

export default Footer;
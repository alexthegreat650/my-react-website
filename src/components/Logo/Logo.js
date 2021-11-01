import React from 'react';
import styled from 'styled-components';
import myCharacter from '../../images/caricature.jpg';
import { Link } from 'react-router-dom';
import NavMenu from '../NavMenu/NavMenu';
import { NavLink } from 'react-router-dom';
import './Logo.css';


const LogoContainer = styled.div`
    justify-content: space-between;
    flex-direction: row;
    height: 80px;
    width: 100%;
    padding: 1rem 2 rem;
    background: black;
    margin: 0;
    padding: 0;
    background-color: #000022;
`;

const LogoImage = styled.div`
    display: flex;
    width: 75px;
    height: 75px;
    position: relative;
    top: 5px;
    left: 5px;
`;

const NavMenuArea = styled.div`
    display: flex;
    position: relative;
    bottom: 45px;

    li {
        display: inline-block;
    }

    a {
        color: #fff;
        text-decoration: none;
        font-size: 1.5rem;
        padding: 0 1rem;
        height: 100%;
        cursor: pointer;
        letter-spacing: 1.75px;
        text-transform: uppercase;
        margin-left: 80rem;
    }

    a:hover {
        opacity: 0.3;
        transition: fill 0.25s;
    }

    @media screen and (max-width: 768px) {
        display: none;
    }
`;




function Logo() {
    return (
        <div>
            <LogoContainer>
                    <Link to='/'>
                    <LogoImage>
                        <img src={myCharacter} style={{ borderRadius: 90, cursor: 'pointer' }} alt='logo'></img>
                    </LogoImage>
                    </Link>
                    <NavMenuArea>
                        <ul>
                            <li><NavLink to='/contact'>Contact</NavLink></li>
                        </ul>
                    </NavMenuArea>
            </LogoContainer>
        </div>
    )
}

export default Logo

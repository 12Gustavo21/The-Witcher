import styled from "styled-components";

import Background from "./assets/Background.png";
import Witcher from "./assets/Witcher.png";

export const Body = styled.body`
    background: url(${Background}) center center no-repeat;
    background-size: cover;
    width: 100%;
    height: 100vh;
`;

export const Header = styled.header`
    width: 100%;
    height: 15vh;
    position: absolute;
`;

export const HeaderContainer = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    @media only screen and (max-width: 900px) {
        padding: 2rem;
        justify-content: space-between;
    }
`;

export const HeaderBoxUm = styled.section`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 5rem;
    gap: 2.5rem;

    @media only screen and (max-width: 1240px) {
        padding-left: 0;
    }
`;

export const Logo = styled.img`
    width: 3rem;
    height: 5rem;
`;

export const ProjetoVermelho = styled.h1`
    font: normal normal normal 1rem/1.5rem Montserrat;
    letter-spacing: 0.0375rem;
    color: #ffffff;
    text-transform: uppercase;
    font-weight: 300;
    user-select: none;

    @media only screen and (max-width: 615px) {
        font-size: 0.9rem;
    }

    @media only screen and (max-width: 575px) {
        display: none;
    }
`;

export const HeaderBoxDois = styled.section`
    width: 40%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    @media only screen and (max-width: 900px) {
        display: none;
    }
`;

export const List = styled.ul`
    display: flex;
    justify-content: space-around;
    align-items: center;
    list-style: none;
    gap: 2.5rem;
`;

export const Item = styled.li`
    font: normal normal normal 1rem/1.5rem Montserrat;
    letter-spacing: 0.0375rem;
    text-transform: uppercase;
    font-weight: 300;
    transition: 350ms ease-in-out;

    a {
        text-decoration: none;
        color: #ffffff;
    }

    &::after {
        content: "";
        display: block;
        border-bottom: 0.0625rem solid #ffffff;
        transform: scaleX(0);
        transform-origin: right;
        transition: transform 250ms ease-in-out;
    }

    &:hover::after {
        transform: scaleX(1);
        transform-origin: left;
    }

    &:hover {
        cursor: pointer;
        font-weight: bold;
    }
`;

export const Main = styled.main`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

export const MainContainer = styled.section`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: column;
`;

export const MainBoxUm = styled.section`
    background: url(${Witcher}) center center no-repeat;
    background-size: contain;
    width: 70%;
    height: 95%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media only screen and (max-width: 1240px) {
        height: 80vh;
    }

    @media only screen and (max-width: 465px) {
        height: 70vh;
    }
`;

export const MainBoxDois = styled.section`
    position: absolute;
    width: 100%;
    height: 75%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
`;

export const PrincipalBox = styled.section`
    width: 100%;
    height: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1.5rem;
    padding-left: 1rem;

    @media only screen and (max-width: 425px){
        gap: .5rem;
        align-items: flex-start;
    }
`;

export const LogoPrincipal = styled.img`
    width: 20rem;
    height: 10rem;
    object-fit: contain;

    @media only screen and (max-width: 425px){
        width: 15rem;
        height: 10rem;
    }
`;

export const Botao = styled.button`
    width: 15rem;
    height: 2.8rem;
    border: none;
    border-radius: .5rem;
    text-transform: uppercase;
    color: #ffffff;
    font-weight: bold;
    background: linear-gradient(180deg, rgba(220, 39, 39, 1), rgba(168, 9, 9, 1));
    cursor: pointer;
    overflow: hidden;
    transform: translate(0);
    transition: 1s ease-in-out;

    &::before {
        content: "";
        position: absolute;
        background: #ffffff;
        width: 0.5rem;
        top: 0;
        left: -2rem;
        bottom: 0;
        transform: rotate(-16deg);
        filter: blur(0.375rem);
    }

    &:hover::before {
        left: calc(100% + 2rem);
        transition: 1s;
    }

    &:hover {
        border-radius: 1rem;
    }

    @media only screen and (max-width: 465px) {
        width: 12rem;
        height: 2.5rem;
    }
`;

export const Referencia = styled.section`
    position: absolute;
    top: 92%;
    right: 63%;
    width: 35%;

    h1,
    a {
        font: normal normal 600 0.6375rem/1.1875rem Montserrat;
        letter-spacing: .0281rem;
        color: #ffffff;
    }

    @media only screen and (max-width: 900px) {
        display: none;
    }
`;

import styled from "styled-components";
import Background from "../img/Background.png"

export const Body = styled.body`
    background: url(${Background}) center center no-repeat;
    background-size: cover;
    width: 100%;
    height: 100vh;
`;

export const Header = styled.header`
    width: 100%;
    height: 20vh;
`;

export const HeaderContainer = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

export const HeaderBoxUm = styled.section`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 5rem;
    gap: 2.5rem;
`;

export const Logo = styled.img`
    width: 3rem;
    height: 5rem;
`;

export const ProjetoVermelho = styled.h1`
    font: normal normal normal 1rem/1.5rem Montserrat;
    letter-spacing: .0375rem;
    color: #ffffff;
    text-transform: uppercase;
    font-weight: 300;
`;

export const HeaderBoxDois = styled.section`
    width: 40%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
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
    letter-spacing: .0375rem;
    color: #ffffff;
    text-transform: uppercase;
    font-weight: 300;
    transition: 1s ease-in-out;
    
    &:hover {
        cursor: pointer;
        font-weight: bold;
    }
`;
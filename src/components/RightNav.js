import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
    display: none;
    list-style: none;
    z-index: 2;

    @media (max-width: 900px) {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        flex-flow: column nowrap;
        background: linear-gradient(180deg, rgba(220, 39, 39, 0.9), rgba(168, 9, 9, 0.9));
        position: fixed;
        transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
        top: 0;
        right: 0;
        height: 100vh;
        width: 18.75rem;
        padding-top: 3.5rem;
        transition: transform 0.3s ease-in-out;
    }
`;

const Li = styled.li`
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

const RightNav = ({ open }) => {
    return (
        <Ul open={open}>
            <Li><a href="https://www.tecmundo.com.br/minha-serie/158074-the-witcher-conheca-o-universo-deste-novo-sucesso-da-netflix.htm?msclkid=3267e4a5c1bc11eca6a6538c410b05ac" target="_blank" rel="noopener noreferrer" title="Universo">Universo</a></Li>
            <Li> <a href="https://entretenimento.uol.com.br/noticias/redacao/2019/12/21/conheca-os-personagens-e-elenco-de-the-witcher.htm?msclkid=dd065fe5c1bc11eca312bdeb103b2b8e" target="_blank" rel="noopener noreferrer" title="Atores">Atores</a></Li>
            <Li> <a href="https://www.netflix.com/br/Title/80189685?msclkid=ce7c3fdbc1bb11ec8ecb308064c4f1d2" target="_blank" rel="noopener noreferrer" title="Temporadas na Netflix">Temporadas</a></Li>
            <Li> <a href="https://steamcommunity.com/app/292030?l=brazilian&msclkid=c3be0db3c1bd11ec858a791bdf4f032d" target="_blank" rel="noopener noreferrer" title="Comunidade na STEAM">Comunidades</a></Li>
        </Ul>
    )
}

export default RightNav;
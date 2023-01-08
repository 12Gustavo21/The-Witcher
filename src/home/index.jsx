import React from "react";
import Logo from "../img/Witcher-Simbol.png";
import * as S from "./style";

export default function index() {
    return (
        <>
            <S.Body>
                <S.Header>
                    <S.HeaderContainer>
                        <S.HeaderBoxUm>
                            <figure>
                                <S.Logo src={Logo} alt="Logo of The Witcher" />
                            </figure>
                            <section>
                                <S.ProjetoVermelho>Projeto Vermelho</S.ProjetoVermelho>
                            </section>
                        </S.HeaderBoxUm>
                        <S.HeaderBoxDois>
                            <S.List>
                                <S.Item>Universo</S.Item>
                                <S.Item>Atores</S.Item>
                                <S.Item>Temporadas</S.Item>
                                <S.Item>Comunidades</S.Item>
                            </S.List>
                        </S.HeaderBoxDois>
                    </S.HeaderContainer>
                </S.Header>
                <main></main>
                <footer>
                    <h1>
                        Layout produzido por Vai na Web para fins exclusivamente
                        educacionais. Referência: <a href="https://cutt.ly/gjP0Ba6" target="_blank" rel="noopener noreferrer">https://cutt.ly/gjP0Ba6</a>
                    </h1>
                </footer>
            </S.Body>
        </>
    );
}

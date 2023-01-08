import React from "react";
import Logo from "../assets/Witcher-Simbol.png";
import LogoPrincipal from "../assets/The-Witcher-Logo.png";
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
                                <S.Item><a href="https://www.tecmundo.com.br/minha-serie/158074-the-witcher-conheca-o-universo-deste-novo-sucesso-da-netflix.htm?msclkid=3267e4a5c1bc11eca6a6538c410b05ac" target="_blank" rel="noopener noreferrer" title="Universo">Universo</a></S.Item>
                                <S.Item> <a href="https://entretenimento.uol.com.br/noticias/redacao/2019/12/21/conheca-os-personagens-e-elenco-de-the-witcher.htm?msclkid=dd065fe5c1bc11eca312bdeb103b2b8e" target="_blank" rel="noopener noreferrer" title="Atores">Atores</a></S.Item>
                                <S.Item> <a href="https://www.netflix.com/br/Title/80189685?msclkid=ce7c3fdbc1bb11ec8ecb308064c4f1d2" target="_blank" rel="noopener noreferrer" title="Temporadas na Netflix">Temporadas</a></S.Item>
                                <S.Item> <a href="https://steamcommunity.com/app/292030?l=brazilian&msclkid=c3be0db3c1bd11ec858a791bdf4f032d" target="_blank" rel="noopener noreferrer" title="Comunidade na STEAM">Comunidades</a></S.Item>
                            </S.List>
                        </S.HeaderBoxDois>
                    </S.HeaderContainer>
                </S.Header>
                <S.Main>
                    <S.MainContainer>
                        <S.MainBoxUm></S.MainBoxUm>
                        <S.MainBoxDois>
                            <S.PrincipalBox>
                                <S.LogoPrincipal src={LogoPrincipal} alt="Logo Principal da série" />
                                <a href="https://www.netflix.com/br/Title/80189685?msclkid=ce7c3fdbc1bb11ec8ecb308064c4f1d2" target="_blank" rel="noopener noreferrer" title="Assistir na Netflix"><S.Botao>Assistir Agora</S.Botao></a>
                            </S.PrincipalBox>
                        </S.MainBoxDois>
                        <S.Referencia>
                            <h1>
                                Layout produzido por Vai na Web para fins exclusivamente
                                educacionais. Referência:{" "}
                                <a
                                    href="https://cutt.ly/gjP0Ba6"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    https://cutt.ly/gjP0Ba6
                                </a>
                            </h1>
                        </S.Referencia>
                    </S.MainContainer>
                </S.Main>
            </S.Body>
        </>
    );
}

/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import styled from 'styled-components';

import Titulo from "../Titulo";
import Conta from "../Conta";
import Extrato from "../Extrato";


//ATENÇAO!!! Notamos que estamos com duas const com o mesmo nome Container, e nesse caso vamos mudar a segunda
// para uma função anônima e mudar a exportação dela também.
const Container = styled.div`
  background-color: ${({theme}) => theme.body};
  min-height: 90vh;
  padding: 0px 15vw;
`;

const Conteudo = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: ${({theme}) => theme.text};

  @media (max-width: 800px) {
      flex-direction: column;
  }
`;

// VER EMBAIXO COMO ERA ANTES
export default () => {
  return (
    <Container>
      <Titulo>Olá Fulano!</Titulo>
      <Conteudo>
        <Conta />
        <Extrato />
      </Conteudo>
    </Container>
  );
};


/* ANTES ESTAVA ASSIM

const Container = () => {
  return (
    <div className="container">
      <Titulo>Olá Fulano!</Titulo>
      <section className="conteudo">
        <Conta />
      </section>
    </div>
  );
};

export default Container;

*/

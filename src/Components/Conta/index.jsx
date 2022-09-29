import React, { useState } from "react";
import styled from 'styled-components';

import privado from "../../assets/images/privado.svg";
import olho_icone from "../../assets/images/olho.svg";
import dinheiro from "../../assets/images/dinheiro.svg";

import { Icone, Box, Botao, Detalhe, Saldo, IconeTema } from "../UI";

// NESSE ARQUIVO VOU TROCAR <img className="imagem-icone" POR <Icone

// Alem disso tem outra questão, o ícone que eu importei é utilizado duas vezes, só que na segunda vez,
// dentro do button, ele recebe uma estilização extra, então pra isso nós vamos criar um novo Icone herdando
// o Icone anterior e acrescentando essa estilização extra de margin.
// Para isso, eu nao uso styled.tagHTML, mas sim styled(componente que vou herdar).

const IconeMargin = styled(Icone)`
  marginTop: "2px"
`

const Conta = () => {
  const [toggleState, untoggle] = useState(true);

  const toggleHandler = () => {
    untoggle((toggleState) => !toggleState);
  };

  return (
    <Box>
      <h2>Conta</h2>
      <div style={{ fontSize: "26px", padding: "20px 0" }}>
        Saldo disponível{" "}
        <span>
          <IconeTema src={dinheiro} alt="Ícone Saldo" />
        </span>
        {toggleState ? (
          <Saldo>
            <Detalhe>R$</Detalhe> 0,00{" "}
          </Saldo>
        ) : null}
      </div>

      <Botao onClick={toggleHandler}>
        <IconeMargin
          src={toggleState ? privado : olho_icone}
          alt="Privacidade do Saldo"
        />
      </Botao>
    </Box>
  );
};

export default Conta;


/* COMO ERA TODO O RETURN

  return(

    <Box>
      <h2>Conta</h2>
      <div style={{ fontSize: "26px", padding: "20px 0" }}>
        Saldo disponível{" "}
        <span>
          <Icone src={dinheiro} alt="Ícone Saldo" />
        </span>
        {toggleState ? (
          <div className="saldo">
            <span className="detalhe">R$</span> 0,00{" "}
          </div>
        ) : null}
      </div>

      <button className="btn" onClick={toggleHandler}>
        <img
          style={{ marginTop: "2px" }}
          className="imagem-icone"
          src={toggleState ? privado : olho_icone}
          alt="Privacidade do Saldo"
        />
      </button>
    </Box>
  )

*/

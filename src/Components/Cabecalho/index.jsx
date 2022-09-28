import React from "react";
import bank_logo from "../../assets/images/bank_logo.svg";
import styled from "styled-components";
import { corPrimaria } from "../UI/variaveis";


//Os botoes são muito parecidos e por isso eu vou utilizar props só no que eu quiser diferenciar
//Eu chamei a props primary dentro da primeira tag <BtnCabecalho> na linha 43 
const BtnCabecalho = styled.a`
  text-align: center;
  border-radius: 3px;
  padding: 5px 20px;
  margin: 0 10px;
  font-weight: 600;
  border: 2px solid white;

  background: ${(props) => (props.primary ? "white" : corPrimaria)};
  color: ${(props) => (props.primary ? corPrimaria : "white")};
  
`

const StyledHeader = styled.nav`
  background-color: ${corPrimaria};
  display: flex;
  justify-content: space-between;
  padding: 0 15vw;
  height: 10vh;
  align-items: center;
`

const Logo = styled.img`
  height: 50px;
  width: 50px;
`


const Cabecalho = () => {
  return (
    //<div className="cabecalho"> TIREI A DIV E TROQUEI PELO STYLEDHEADER
    <StyledHeader>
      <Logo src={bank_logo} alt="Logo Smart Bank" />
      <div>
        <BtnCabecalho primary href="https://google.com">Ajuda</BtnCabecalho>
        <BtnCabecalho href="https://google.com">Sair</BtnCabecalho>
      </div>
    </StyledHeader>  
    //</div>
  );
};

export default Cabecalho;

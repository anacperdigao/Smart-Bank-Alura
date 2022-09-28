import React from "react";

import Cabecalho from "./Components/Cabecalho";
import Container from "./Components/Container";

import { GlobalStyle } from "./Components/GlobalStyle";
//Tenho que importar o GlobalStyle e tenho que chamar ele no inicio do código na linha 12

function App() {
  return (
    <>
      <GlobalStyle />
      <Cabecalho />
      <Container />
    </>
  );
}

export default App;

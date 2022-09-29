import React from "react";
import { useState } from 'react';
import {ThemeProvider} from 'styled-components'; //Vou envolver todo o App com o ThemeProvider
import {temaClaro, temaEscuro} from './Components/UI/temas'

import Cabecalho from "./Components/Cabecalho";
import Container from "./Components/Container";

import { GlobalStyle } from "./Components/GlobalStyle";
import { BtnTema } from "./Components/UI";
import SwitcherTema from "./Components/SwitcherTema";

//Tenho que importar o GlobalStyle e tenho que chamar ele no inicio do código na linha 12

function App() {

  const [tema, setTema] = useState(true);

  const toggleTema = () => {
    setTema((tema) => !tema);
  }

  return (
  
    <ThemeProvider theme={tema ? temaClaro : temaEscuro}>
      <GlobalStyle />
      <BtnTema onClick={toggleTema}>
        <SwitcherTema tema={tema} />
      </BtnTema>
      <Cabecalho />
      <Container />
    </ThemeProvider>
  );
}

export default App;

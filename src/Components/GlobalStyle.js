//Como é um arquivo global, nós vamos usar ele no App.js então tem que ir importar ele lá

import {createGlobalStyle} from 'styled-components'


export const GlobalStyle = createGlobalStyle`
* {  
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
  margin: 0;
  padding: 0;
  text-decoration: none;
  color: grey;
}
`;

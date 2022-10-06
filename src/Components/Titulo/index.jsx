//import React from "react";
import styled from 'styled-components';


const Titulo = styled.h1`
  color: ${({theme}) => theme.text};
  padding: 25px 0;
`;

//Por padrão, o styled-component já entende que a tag vai receber um children

//const Titulo = ({ children }) => {
//  return <h1 className="titulo">{children}</h1>;
//};

export default Titulo;

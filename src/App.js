import React from 'react';
import Filtros from './Components/Filtros';
import Produtos from './Components/CardProduto';
import Carrinho from './Components/Carrinho';
import OrdemProduto from './Components/OrdemProduto';
import styled from "styled-components"


export default class App extends React.Component {
  render() {
  return (
    <div>
      <OrdemProduto/>
      <Filtros/>
      <Produtos/>
      <Carrinho/>
    </div>
  );
}
}


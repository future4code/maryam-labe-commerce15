import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';

const Bloco1 = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  padding: 16px;
  gap:8px;
  height: 400px
`
const Bloco2 = styled.div`
  border: 1px solid black;
  padding: 8px;
`
const Label1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 8px;
  `

  const Produtos = styled.div`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    padding: 0px 16px;
    height: 30px
  `

  const IncluirProdutos = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    padding: 16px;
  `

  const SubIncluirProdutos = styled.div`
    border: 1px solid black;
    display: flex;
    flex-direction: column;
  `

  const Produtos2 = styled.div`
    display: flex;
    flex-direction: column;
    padding: 16px;
  `

  const Carrinho = styled.div`
    border: 1px solid black;
    padding: 8px;
  `

  const Carrinho2 = styled.div` 
    display: grid;
    gap: 8px;
  `

  const Carrinho3 = styled.div` 
    display: grid;
    grid-auto-flow: column;
    gap: 4px;
    -webkit-box-align: center;
    align-items: center;
  `

export class App extends React.Component {

  render () {
    return (
      <Bloco1>
        <Bloco2>
          <h3>Filtros</h3>

    <Label1>
      Valor mínimo:
      <input type="number" value="100"></input>
    </Label1>

    <Label1>
      Valor máximo:
      <input type="number" value="1000"></input>
    </Label1>

    <label>
      Busca por nome:
      <input type="text" value="Produto"></input>
      </label>

    </Bloco2>

    <div>
      <Produtos>
        <p>
          Quantidade de Produtos:
          2
        </p>
        <label>
        Ordenação:
        <select>
        <option value="CRESCENTE">Crescente</option>
        <option value="DECRESCENTE">Decrescente</option>
        </select>
        </label>
      </Produtos>

      <IncluirProdutos>

      <SubIncluirProdutos>
        <img src="https://picsum.photos/id/1/200/300"></img>

        <Produtos2>
        <p>
        Produto 1
        </p>
        <p>
        R$ 2.000,00
        </p>
        <button>Adicionar ao carrinho</button>
        </Produtos2>
      </SubIncluirProdutos>

      <SubIncluirProdutos>
        <img src="https://picsum.photos/id/1/200/300"></img>

          <Produtos2>
          <p>
            Produto 2
          </p>

          <p>
            R$ 3.000,00
          </p>
          <button>Adicionar ao carrinho</button>

          </Produtos2>
      </SubIncluirProdutos>
      </IncluirProdutos>
    </div>

    <Carrinho>
      <h3>Carrinho:</h3>

      <Carrinho2>
        <Carrinho3>
            <p>
              1x
            </p>
          <p>Produto 1</p>

          <button>Remover</button>

        </Carrinho3>

          <Carrinho3>
              <p>
                1x
              </p>
            <p>Produto 2</p>

        <button>Remover</button>

        </Carrinho3>

        <Carrinho3>
              <p>
                1x 
              </p>
            <p> Produto 3</p>

        <button> Remover</button>

        </Carrinho3>

        </Carrinho2>
          <p>
            Valor total: R$ 5.000,00
          </p>

        </Carrinho>

        </Bloco1>

    )}}
    

    export default App


















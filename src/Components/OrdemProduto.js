import React from 'react';
import styled from "styled-components"



const Estoque = styled.div`
border: 1px solid black;
padding: 4px;
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
`

class OrdemProduto extends React.Component {
    render () {
        return ( 
        <Estoque>
        <h3> Quantidade de produtos:</h3>
        <label> Ordenação 
            <select>
                <option value = "CRESCENTE"> CRESCENTE</option>
                <option value = "DECRESCENTE"> DECRESCENTE</option>
            </select> 
        </label>
        </Estoque>
        )
    }
}

export default OrdemProduto
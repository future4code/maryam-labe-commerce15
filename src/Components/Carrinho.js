import React from 'react';
import styled from "styled-components"



const Cart = styled.div`
border: 1px solid black;
padding: 4px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

class Carrinho extends React.Component {
    render () {
        return ( 
        <Cart>
        <h3> Carrinho </h3>
        <button>Remover</button>
        </Cart>
        )
    }
}

export default Carrinho
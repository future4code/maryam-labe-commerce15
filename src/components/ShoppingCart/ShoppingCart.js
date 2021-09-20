import React from 'react'
import { ShoppingCartItem } from './ShoppingCartItem'
import styled from 'styled-components';

const ShoppingCartContainer = styled.div`
  border: 5px solid white;
  padding: 8px;
  h2 {
      border: 2px solid black;
  }
`;

const CartListContainer = styled.div`
  display: grid;
  gap: 8px;
`

export class ShoppingCart extends React.Component {
  getTotalValue = () => {
    let totalValue = 0

    for(let product of this.props.productsInCart) {
      totalValue += product.price * product.quantity
    }

    return totalValue
  }

  render() {
    return <ShoppingCartContainer>
      <h3>Carrinho:</h3>
      <CartListContainer>
        {this.props.productsInCart.map((product) => {
          return <ShoppingCartItem 
                    cartItem={product} 
                    onRemoveProductFromCart={this.props.onRemoveProductFromCart}
                  />
        })}
      </CartListContainer>
      <h2>Valor total: R${this.getTotalValue()},00</h2>
    </ShoppingCartContainer>
  }
}

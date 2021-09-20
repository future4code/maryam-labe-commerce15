import React from 'react';
import { Filters } from './components/Filters/Filter';
import { Products } from './components/Products/Products';
import { ShoppingCart } from './components/ShoppingCart/ShoppingCart';
import styled from 'styled-components';

const AppContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  padding: 10px;
  gap: 5px;
  background-color: green;
`;


const products = [
  {
    id: 1,
    name: 'Viagem Marte',
    price: 1000000,
    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_clGBh53mXBpyzbMZC-5n0SE8m_f8yOzh_g&usqp=CAU'
  },
  {
    id: 2,
    name: 'Viagem Júpiter',
    price: 3000000,
    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd9SBdSoye_TjG98StM0bHyRcIqcgXEPVpckUeGpFB9KFf7S6DbkNWVnCmZaPaaU28Tu8&usqp=CAU'
  },
  {
    id: 3,
    name: 'Viagem Buraco Negro',
    price: 10000000,
    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbc9Eo_1huQ6TTeA0Y_QTONbzbTrDu1i_pC9I8CWBPN-nki30FWaAUreL1opwhrRJBN3c&usqp=CAU'
  },
  {
    id: 4,
    name: 'Viagem Lua',
    price: 500000,
    photo: 'data:image/jpeg;base64,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'
  },
  {
    id: 5,
    name: 'Viagem Galaxia de Andromeda',
    price: 50000000,
    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsqcLz15j3fN5aXR5Y2NwUpTGwUidqkVvPa0I7WPNpdFD5dI6TXt8OERz_FT-q-omsnKs&usqp=CAU'
  },
  {
    id: 6,
    name: 'Viagem Estação Espacial',
    price: 400000,
    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLSVE2seiCqIu46qLq5oNIma6ghrlzupfik56nyLxBEhnqHZHQqm2scXHBNLtJj-TAqTk&usqp=CAU'
  }
]

class App extends React.Component {
  state = {
    minFilter: 0,
    maxFilter: 100000000000000,
    nameFilter: '',
    productsInCart: [
      {
        id: 4,
        name: 'Produto 4',
        price: 10,
        photo: 'https://picsum.photos/200/200?a=4',
        quantity: 1
      },
      {
        id: 3,
        name: 'Produto 3',
        price: 30,
        photo: 'https://picsum.photos/200/200?a=3',
        quantity: 2
      }
    ]
  }

  onChangeMinFilter = (event) => {
    this.setState({minFilter: event.target.value})
  }

  onChangeMaxFilter = (event) => {
    this.setState({maxFilter: event.target.value})
  }

  onChangeNameFilter = (event) => {
    this.setState({nameFilter: event.target.value})
  }

  onAddProductToCart = (productId) => {
    const productInCart = this.state.productsInCart.find(product => productId === product.id)

    if(productInCart) {
      const newProductsInCart = this.state.productsInCart.map(product => {
        if(productId === product.id) {
          return {
            ...product,
            quantity: product.quantity + 1
          }
        }

        return product
      })

      this.setState({productsInCart: newProductsInCart})
    } else {
      const productToAdd = products.find(product => productId === product.id)

      const newProductsInCart = [...this.state.productsInCart, {...productToAdd, quantity: 1}]

      this.setState({productsInCart: newProductsInCart})
    }
  }

  onRemoveProductFromCart = (productId) => {
    const newProductsInCart = this.state.productsInCart.map((product) => {
      if(product.id === productId) {
        return {
          ...product,
          quantity: product.quantity - 1
        }
      }
      return product
    }).filter((product) => product.quantity > 0)

    this.setState({productsInCart: newProductsInCart})
  }

  render() {
    return (
      <AppContainer>
        <Filters
          minFilter={this.state.minFilter}
          maxFilter={this.state.maxFilter}
          nameFilter={this.state.nameFilter}
          onChangeMinFilter={this.onChangeMinFilter}            
          onChangeMaxFilter={this.onChangeMaxFilter}            
          onChangeNameFilter={this.onChangeNameFilter}                  
        />
        <Products 
          products={products}
          minFilter={this.state.minFilter}
          maxFilter={this.state.maxFilter}
          nameFilter={this.state.nameFilter}
          onAddProductToCart={this.onAddProductToCart}
        />
        <ShoppingCart
          productsInCart={this.state.productsInCart}
          onRemoveProductFromCart={this.onRemoveProductFromCart}
        />
        
      </AppContainer>
    );
  }
}

export default App;

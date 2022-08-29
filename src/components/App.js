import React from 'react';
//Imported components
import NavBar from './navBar/NavBar';
import All from './categories/all/All';
import Tech from './categories/tech/Tech';
import Clothes from './categories/clothes/Clothes';
import Cart from './categories/displayCart/Cart';
// import Card from './categories/Card';
import ProductPage from './categories/pdp/ProductPage';
//Reach Router to route to pages
import { Router } from '@reach/router';



class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      id: 'huarache-x-stussy-le',
      cartItems: [] 
    }

    this.getCardId = this.getCardId.bind(this)
    this.addToCart = this.addToCart.bind(this)
    
  }

  //Handle setting PDP id in Routing.
  getCardId = (key) => {
    console.log(key)
    this.setState({id: key})
  }
  //Handles event when green cart logo is clicked
      
  addToCart(key){
    
    const { cartItems } = this.state;
    
    const isProductPresent = cartItems.some(item =>item === key);
    if(!isProductPresent){        
        this.setState({
            cartItems: [...cartItems, key]
        }, ()=> console.log(`items in cart is`, this.state.cartItems))
    }else{
      alert('its already there')
      console.log(cartItems)
    }
  
    
  }
  

  render(){
    return (
      <main>  
        <NavBar 
        cartItems={this.state.cartItems}
        />                  
        <Router>
          <All 
            path="/" 
            getCardId={this.getCardId}
            addToCart={this.addToCart} 
          />
          <Clothes 
            path="/clothes" 
            getCardId={this.getCardId}
            addToCart={this.addToCart} 
          />
          <Tech 
            path="/tech" 
            getCardId={this.getCardId}
            addToCart={this.addToCart} 
          />
          <Cart 
            path="/cart"
            cartItems={this.state.cartItems}
          />
          <ProductPage 
            path="/product/:productId" 
            id={this.state.id} 
          />          
        </Router> 
      </main>      
    )
  }
}

export default App;

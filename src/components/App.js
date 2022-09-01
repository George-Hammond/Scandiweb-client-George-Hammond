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
import { BrowserRouter , Route, Routes  } from 'react-router-dom';




class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      id: '',
      cartItems: [],
      navActive: false
    }

    this.getCardId = this.getCardId.bind(this)
    this.addToCart = this.addToCart.bind(this)
    
  }

  //Handle setting PDP id in Routing.
  getCardId = (key) => {
    // console.log(key)
    this.setState({id: key})
  }
  //Handles event when green cart logo is clicked
      
  addToCart(key){
    // console.log(key)
    const { cartItems } = this.state;
    
    const isProductPresent = cartItems.some(item =>item === key);
    if(!isProductPresent){        
        this.setState({
            cartItems: [...cartItems, key]
        }, ()=> console.log(`items in cart is`, this.state.cartItems))
    }else{
      alert('its already there')
      // console.log(cartItems)
    }
  
    
  }
  

  render(){
    return (
    <BrowserRouter>
      <NavBar 
      cartItems={this.state.cartItems}
      />
      <Routes>
        <Route path="/" element={
          <All 
            getCardId={this.getCardId}
            addToCart={this.addToCart} 
          />
        } />        
        
        <Route path="/clothes" element={
          <Clothes 
            getCardId={this.getCardId}
            addToCart={this.addToCart} 
          />
        } />        
        
        <Route path="/tech" element={
          <Tech
            getCardId={this.getCardId}
            addToCart={this.addToCart} 
          />
        } />     
          
        <Route path="/cart" element={
          <Cart          
            cartItems={this.state.cartItems}
          />
        } />        
        
        <Route path="/product/:productId" element={
          <ProductPage          
            id={this.state.id}
            addToCart={this.addToCart}
          />
        } />
        
      </Routes>                  
    </BrowserRouter> 
            
    )
  }
}

export default App;

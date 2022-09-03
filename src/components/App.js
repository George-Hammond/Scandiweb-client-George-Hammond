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
      navActive: false,
      currencyIndex: 0,
      productItemAmount: [],
      sumProductPrice: 0,
      tax: 0
    }

    this.getCardId = this.getCardId.bind(this)
    this.addToCart = this.addToCart.bind(this)
    this.getCurrencyIndex = this.getCurrencyIndex.bind(this)
    // this.sumTotal = this.sumTotal.bind(this)
  }

  //Handle setting PDP id in Routing.
  getCardId = (key) => {    
    this.setState({id: key})
  }

  //Handles event when green cart logo is clicked
  addToCart(key,amount){   
    const { cartItems, productItemAmount } = this.state;
    const isProductPresent = cartItems.some(item =>item === key);
    if(!isProductPresent){        
        this.setState({
          cartItems: [...cartItems, key]
        }, ()=> console.log(`items in cart is`, this.state.cartItems))
    }else{
      alert('its already there')      
    }

    this.setState({
      productItemAmount: [...productItemAmount, amount]
    },()=> console.log(this.state.productItemAmount))    
    
    let productSum = productItemAmount.reduce((prevValue,currValue)=>prevValue + currValue, amount).toFixed(2)
    console.log(`the sum is: ${productSum}`)
    let calculateTax = productSum * 0.21;
    console.log(`the tax is: ${calculateTax.toFixed(2)}`)
    this.setState({
      sumProductPrice: productSum,
      //this calculates the tax on the product
      tax: calculateTax
    })
    
   
  }

    // Handle currency change
  getCurrencyIndex(key){
    if(key === "USD") this.setState({currencyIndex: 0})
    if(key === "GBP") this.setState({currencyIndex: 1})
    if(key === "AUD") this.setState({currencyIndex: 2})
    if(key === "JPY") this.setState({currencyIndex: 3})
    if(key === "RUB") this.setState({currencyIndex: 4})    
  }

  // Handle total summation in cart
  

  render(){
    return (
    <BrowserRouter>
      <NavBar 
      cartItems={this.state.cartItems}
      getCurrencyIndex={this.getCurrencyIndex}
      currencyIndex={this.state.currencyIndex}
      sumProductPrice={this.state.sumProductPrice}
      />
      <Routes>
        <Route path="/" element={
          <All 
            getCardId={this.getCardId}
            addToCart={this.addToCart}
            currencyIndex={this.state.currencyIndex}
          />
        } />        
        
        <Route path="/clothes" element={
          <Clothes 
            getCardId={this.getCardId}
            addToCart={this.addToCart}
            currencyIndex={this.state.currencyIndex} 
          />
        } />        
        
        <Route path="/tech" element={
          <Tech
            getCardId={this.getCardId}
            addToCart={this.addToCart}
            currencyIndex={this.state.currencyIndex} 
          />
        } />     
          
        <Route path="/cart" element={
          <Cart          
            cartItems={this.state.cartItems}
            currencyIndex={this.state.currencyIndex}
            sumProductPrice={this.state.sumProductPrice}
            tax={this.state.tax}
            productItemAmount={this.state.productItemAmount}
          />
        } />        
        
        <Route path="/product/:productId" element={
          <ProductPage          
            id={this.state.id}
            addToCart={this.addToCart}
            currencyIndex={this.state.currencyIndex}
          />
        } />
        
      </Routes>                  
    </BrowserRouter> 
            
    )
  }
}

export default App;

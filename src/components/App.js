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
      
    }

    this.getCardId = this.getCardId.bind(this)
    
    
  }

  getCardId = (key) => {
    console.log(key)
    this.setState({id: key})
  }

  

  render(){
    return (
      <main>  
        <NavBar />           
        <Router>
          <All path="/" getCardId={this.getCardId} />
          <Clothes path="/clothes" getCardId={this.getCardId} />
          <Tech path="/tech" getCardId={this.getCardId} />
          <Cart path="/cart" />
          <ProductPage path="/product/:productId" id={this.state.id} />          
        </Router> 
      
     {/*     */}    
      
      </main>      
    )
  }
}

export default App;

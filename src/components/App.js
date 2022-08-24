import React from 'react';
//Imported components
import NavBar from './navBar/NavBar';
// import All from './categories/all/All';
// import Tech from './categories/tech/Tech';
// import Clothes from './categories/clothes/Clothes';
import Cart from './categories/displayCart/Cart';
import ProductPage from './categories/pdp/ProductPage';
//Reach Router to route to pages
// import { Router } from '@reach/router';


class App extends React.Component{
  render(){
    return (
      <main>  
        <NavBar />               
        {/* <Router>
          <All path="/"  />
          <Clothes path="/clothes" />
          <Tech path="/tech" />
        </Router> 
      */}
      <ProductPage />        
      <Cart />
      </main>      
    )
  }
}

export default App;

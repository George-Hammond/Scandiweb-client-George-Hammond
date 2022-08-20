import React from 'react';
import NavBar from './navBar/NavBar';
// import Categories from './categories/Categories';
import All from './categories/all/All';
import Tech from './categories/tech/Tech';
import Clothes from './categories/clothes/Clothes';

import { Router } from '@reach/router';


class App extends React.Component{
  render(){
    return (
      <main>  
        <NavBar />
        {/* <Categories /> */}
        <Router>
          <All path="/" />
          <Clothes path="clothes" />
          <Tech path="tech" />
        </Router>
      </main>      
    )
  }
}

export default App;

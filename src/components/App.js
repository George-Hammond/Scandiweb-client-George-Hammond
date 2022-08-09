import React from 'react';
import NavBar from './NavBar';
import Categories from './categories/Categories';


class App extends React.Component{
  render(){
    return (
      <main>  
        <NavBar />
        <Categories />
      </main>      
    )
  }
}

export default App;

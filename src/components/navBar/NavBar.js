import React from 'react';
// import { Link } from '@reach/router';
import { NavLink } from "react-router-dom"
import '../../styles/index.css';
import GreenBag from '../../images/green-bag.svg'
import Cart from '../../images/cart.svg';
// import DollarSign from '../../images/dolloarSign.svg'
import ArrowDown from '../../images/arrowDown.svg'
import CurrencyChange from './currency/CurrencyChange';
import CartDropdown from './cartDropdown/CartDropDown';
import { Query } from "react-apollo";
import { CURRENCY_QUERY } from "../categories/cardQuery";

class NavBar extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            currencyAppear: false,
            cartAppear: false,
            isActive: false
        }

        this.toggleCurrencySymbol = this.toggleCurrencySymbol.bind(this)
        this.toggleCart = this.toggleCart.bind(this)
        this.setActive = this.setActive.bind(this)
    }

    toggleCurrencySymbol = () =>{
        if(this.state.currencyAppear){
          this.setState({
            currencyAppear: false
          })
        }else{
          this.setState({
            currencyAppear: true
          })
        }
        console.log(this.state.currencyAppear)
      }

      toggleCart = () =>{
        if(this.state.cartAppear){
          this.setState({
            cartAppear: false
          })
        }else{
          this.setState({
            cartAppear: true
          })
        }
        console.log(this.state.cartAppear)
      }

      setActive = () => {
        this.setState({
            isActive: true
        })
      }
    render(){
        
        const { cartItems, getCurrencyIndex, currencyIndex,sumProductPrice } = this.props;
        return(
            <nav>
                <div className="main-nav-container">
                    <div className='category-name'>                        
                             <ul>
                                <NavLink to='/'                               
                                onClick={this.setActive}                                
                                >                                  
                                    ALL
                                </NavLink>
                                <NavLink to='clothes'
                                onClick={this.setActive}                                
                                >
                                    CLOTHES
                                </NavLink >
                                <NavLink to='tech'
                                onClick={this.setActive}                                
                                >
                                    TECH
                                </NavLink >
                             </ul>                        
                    </div>
                    <div className='middle-logo'>
                        <img src={GreenBag} alt="green bag logo" />
                    </div>
                    <div className='cart'>
                        <Query query={CURRENCY_QUERY}>
                            {
                                ({loading, error, data}) => {
                                    if(loading) return <div>Loading...</div>;
                        

                                    if(error) return <div>Error: {error.message}</div>;

                                    return(
                                        <p id="currency-symbol">{data.currencies[currencyIndex].symbol}</p>
                                    )
                                }

                            }
                        </Query>
                        <img src={ArrowDown} alt="more currencies" id="arrow-down" onClick={this.toggleCurrencySymbol}/>
                        <img src={Cart} alt="Cart" id="cart-logo" onClick={this.toggleCart} />
                        {cartItems.length > 0 ? <p id="number-in-cart">{cartItems.length}</p> : ""}
                    </div>
                </div>
                {this.state.currencyAppear && 
                <CurrencyChange 
                toggleCurrencySymbol={this.toggleCurrencySymbol} 
                getCurrencyIndex={getCurrencyIndex}
                />}
                {this.state.cartAppear  && <CartDropdown 
                toggleCart={this.toggleCart}
                cartItems={cartItems}
                currencyIndex={currencyIndex}
                sumProductPrice={sumProductPrice}
                /> }
                {this.state.cartAppear  && <div className='overlay-appear'></div>}
            </nav>
        )
    }
}

export default NavBar;
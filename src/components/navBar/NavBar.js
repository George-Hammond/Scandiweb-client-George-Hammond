import React from 'react';
import { Link } from '@reach/router';
import '../../styles/index.css';
import GreenBag from '../../images/green-bag.svg'
import Cart from '../../images/cart.svg';
// import DollarSign from '../../images/dolloarSign.svg'
import ArrowDown from '../../images/arrowDown.svg'
import CurrencyChange from '../currency/CurrencyChange';
import { Query } from "react-apollo";
import { CURRENCY_QUERY } from "../categories/cardQuery";

class NavBar extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            currencyAppear: false
        }

        this.toggleCurrencySymbol = this.toggleCurrencySymbol.bind(this)
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
    render(){
        
        const { cartItems } = this.props;
        return(
            <nav>
                <div className="main-nav-container">
                    <div className='category-name'>                        
                             <ul>
                                <Link to='/'>ALL</Link>
                                <Link to='clothes'>CLOTHES</Link >
                                <Link to='tech'>TECH</Link >
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
                                        <p id="currency-symbol">{data.currencies[0].symbol}</p>
                                    )
                                }

                            }
                        </Query>
                        <img src={ArrowDown} alt="more currencies" id="arrow-down" onClick={this.toggleCurrencySymbol}/>
                        <Link to="cart"><img src={Cart} alt="Cart" id="cart-logo"  /></Link>
                        {cartItems.length > 0 ? <p id="number-in-cart">{cartItems.length}</p> : ""}
                    </div>
                </div>
                {this.state.currencyAppear && <CurrencyChange  />}
            </nav>
        )
    }
}

export default NavBar;
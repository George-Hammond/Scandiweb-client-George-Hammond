import React from 'react';
import '../styles/index.css';
import GreenBag from '../images/green-bag.svg';
import Cart from '../images/cart.svg';
import DollarSign from '../images/dolloarSign.svg'
import ArrowDown from '../images/arrowDown.svg'


class NavBar extends React.Component{
    render(){
        return(
            <nav>
                <div className="main-nav-container">
                    <div className='category-name'>
                        <ul>
                            <li id="emphasis">WOMEN</li>
                            <li>MEN</li>
                            <li>KIDS</li>
                        </ul>
                    </div>
                    <div className='middle-logo'>
                        <img src={GreenBag} alt="green bag logo" />
                    </div>
                    <div className='cart'>
                        <img src={DollarSign} alt="Dollar sign" id="dollar-sign" />
                        <img src={ArrowDown} alt="more currencies" id="arrow-down" />
                        <img src={Cart} alt="Cart" id="cart-logo" />
                    </div>
                </div>
            </nav>
        )
    }
}

export default NavBar;
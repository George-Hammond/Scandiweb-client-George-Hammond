import React from 'react';
import { Link } from '@reach/router';
import '../../styles/index.css';
import GreenBag from '../../images/green-bag.svg'
import Cart from '../../images/cart.svg';
import DollarSign from '../../images/dolloarSign.svg'
import ArrowDown from '../../images/arrowDown.svg'


class NavBar extends React.Component{
    render(){
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
                        <img src={DollarSign} alt="Dollar sign" id="dollar-sign" />
                        <img src={ArrowDown} alt="more currencies" id="arrow-down" />
                        <Link to="cart"><img src={Cart} alt="Cart" id="cart-logo"  /></Link>
                    </div>
                </div>
            </nav>
        )
    }
}

export default NavBar;
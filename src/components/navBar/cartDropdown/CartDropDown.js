import React from "react";
import { Link } from '@reach/router';

class CartDropdown extends React.Component{
    render(){
        const { toggleCart } = this.props;
        return(
            <div className="cart-dropdown-wrapper" onMouseLeave={toggleCart}>
                <h4>Cart dropdown here </h4>
                <div className="cart-dropdown-btn">
                    <Link to="cart"><button id="view-bag">View Bag</button></Link>
                    <button id="check-out">Check Out</button>
                </div>
                
            </div>
        )
    }
} 

export default CartDropdown;
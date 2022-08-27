import React from "react";

//import green card image
import GreenCartSvg from '../../../images/greenCart.svg';

class GreenCart extends React.Component{
    render(){
        return(
            <div 
            id="green-cart"
            onClick={this.props.addToCart}
            > 
                <img 
                src={GreenCartSvg} 
                id="green-cart" 
                alt="green cart logo"
                />
            </div>
        )
    }
}

export default GreenCart;
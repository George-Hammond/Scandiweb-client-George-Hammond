import React from "react";
import Sweater from "../../../images/sweater.svg";

class Cart extends React.Component{
    render(){
        return(
            <div className="cart-display-section">
                <h1>Cart</h1>
                <hr></hr>
                <div className="cart-display-cart">
                    <div className="cart-attributes">
                        <h2>Apollo</h2>
                        <h3>Running Short</h3>
                        <div className='cart-attributes-price-section'>                            
                            <p>$50.00</p>
                        </div>
                        <div className='cart-attributes-size-section'>
                            <h3>Size:</h3>
                            <div className='cart-attributes-size-category'>
                                <p>XS</p>
                                <p>S</p>
                                <p>M</p>
                                <p>L</p>
                            </div>
                        </div>
                        <div className='cart-attributes-color-section'>
                            <h3>Color:</h3>
                            <div className='cart-attributes-colors'>
                                <p></p>
                                <p></p>
                                <p></p>                        
                            </div>
                        </div>
                    </div>
                    <div className="cart-attributes-product-quantity">
                        <div className="toggle-add">
                            <button id='increase'>+</button>
                            <p>1</p>
                            <button id="decrease">-</button>
                        </div>
                        <div className="cart-attributes-product-quantity-image">
                            <img src={Sweater} alt="Sweater"/>
                            <div className="toggle-img">
                                <button id="lesser">&gt;</button>
                                <button id="greater">&lt;</button>
                            </div>
                        </div>                        
                    </div>
                </div>
                <div className="card-attributes-bill">
                    <p>Tax 21%:  <span id="card-attributes-tax"> $42.00</span></p>
                    <p>Quantity: <span> 3</span></p>
                    <p >Total: <span id="card-attributes-bill-total">$200.00</span></p>
                    <button>Order</button>
                </div>
            </div>    
        )
    }
}

export default Cart;
import React from "react";
import { Link } from '@reach/router';
import { Query } from "react-apollo"
import CartDropdownItems from "./cartDropdownItems";
import { CART_PRODUCT_QUERY } from "../../categories/cardQuery";

class CartDropdown extends React.Component{
    render(){
        const { toggleCart } = this.props;
        const { cartItems } = this.props;
        const listItems = cartItems.map(cartItem =>     
            <Query query={CART_PRODUCT_QUERY} variables ={{"productId": `${cartItem}`}}>
                {                   
                    ({loading, error, data}) => {
                        console.log("we are here 1")
                        if(loading) return "";
                        console.log("we are here 2")
                        if(error) return `Error: ${error.message}`;
                        console.log("we are here 3")
                            console.log(data)                           
                        return( <CartDropdownItems
                                key="0"
                                cartItems={cartItems}
                                cartData={data.product}
                            />
                        )
                    }

                }
            </Query>         
            
        )
        const displayCartItem = () => {
           return <>{listItems}</>
        }
        return(
            cartItems.length > 0 ?            
            <div className="cart-dropdown-wrapper" onMouseLeave={toggleCart}>
                <p id="drop-title">
                    My Bag, 
                    {
                        cartItems.length > 0 &&
                        <span>
                        {cartItems.length} {cartItems.length > 1 ? "items" : "item" }
                    </span>
                    }
                    
                </p>
                {
                    displayCartItem()
                }                
                <div className="cart-dropdown-btn">
                    <Link to="cart"><button id="view-bag">View Bag</button></Link>
                    <button id="check-out">Check Out</button>
                </div>
                
            </div> 
            :
            <div className="cart-dropdown-wrapper" onMouseLeave={toggleCart}>
                <p id="drop-title-empty">
                    Cart is Empty.
                </p>           
            </div>        
        )
    }
} 

export default CartDropdown;
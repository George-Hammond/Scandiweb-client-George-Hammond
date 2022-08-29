import React from "react";
// import Sweater from "../../../images/sweater.svg";
import CartDisplay from "./CartDisplay";
import { Query } from "react-apollo";
import { CART_PRODUCT_QUERY } from "../cardQuery";

class Cart extends React.Component{
    
    render(){
        const { cartItems } = this.props;
        // console.log(cartItems[0])
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
                        return( <CartDisplay
                                key="0" 
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
        const cartDisplay = () => {
            if(cartItems.length > 0 ) {                
                return(
                <>                        
                       {
                        displayCartItem()                            
                       }
                    <div className="card-attributes-bill">
                        <p>Tax 21%:  <span id="card-attributes-tax"> $42.00</span></p>
                        <p>Quantity: <span> 3</span></p>
                        <p >Total: <span id="card-attributes-bill-total">$200.00</span></p>
                        <button>Order</button>
                    </div>  
                </>
                )
            }else{
                return (
                <div className="card-attributes-bill">
                    <p id="empty-cart" >Cart is Empty</p>
                </div>
                )
            }
        }
        return(
            <div className="cart-display-section">
                <h1>Cart</h1>
                <hr></hr>
                {
                    cartDisplay()
                }            
                
            </div>    
        )
    }
}

export default Cart;

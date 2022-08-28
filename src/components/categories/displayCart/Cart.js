import React from "react";
// import Sweater from "../../../images/sweater.svg";
import CartDisplay from "./CartDisplay";
import { Query } from "react-apollo";
import { CART_PRODUCT_QUERY } from "../cardQuery";

class Cart extends React.Component{
    render(){
        const { cartItems } = this.props;
        console.log(cartItems[0])
        // const idData = () => {
        //     cartItems.map(item => {
        //         return item
        //     })
        // }
        return(
            <div className="cart-display-section">
                <h1>Cart</h1>
                <hr></hr>
                <Query query={CART_PRODUCT_QUERY} variables ={{"productId": `${cartItems[0]}`}}>
                    {
                        
                        ({loading, error, data}) => {
                            if(loading) return "";
                            if(error) return `Error: ${error.message}`;

                                                        
                               return( <CartDisplay
                                    key="0" 
                                    cartData={data.product}
                                />
                               )
                        }

                    }
                </Query>
                
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
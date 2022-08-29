import React from "react";

class CartDropdownItems extends React.Component{
    render(){
        const  { cartItems, cartData } = this.props;
        console.log(cartData)
        const attributes = cartData.attributes.length;
        const displayDescription = () =>{
            if(attributes > 2){
                return(
                <>
                    <div className='cart-dropdown-size-section greaterTwo'>
                        <h3>{cartData.attributes[0].name}</h3>
                        <div className='cart-dropdown-size-category'>
                            {
                            cartData.attributes[0].items.map((item) => {
                                    return <p key={item.id}>{item.displayValue}</p>
                                })
                            }
                        </div>                            
                    </div>
                    <div className='cart-dropdown-size-section'>
                        <h3>{cartData.attributes[1].name}</h3>
                        <div className='cart-dropdown-size-category'>
                            {
                            cartData.attributes[1].items.map((item) => {
                                    return <p key={item.id}>{item.displayValue}</p>
                                })
                            }
                        </div>                            
                    </div>
                    <div className='cart-dropdown-color-section'>
                        <h3>Color:</h3>
                        <div className='cart-dropdown-colors'>
                            {
                                cartData.attributes[0].items.map((item, index) => {
                                    return <p key={item.id} style={{backgroundColor: item.displayValue}}></p>
                                })
                            }                                                                                
                        </div>
                    </div>
                </>
                )
            } else if(attributes > 1){
                if(cartData.name ==="iPhone 12 Pro"){
                    return(
                        <>
                            <div className='cart-dropdown-size-section'>
                                <h3>{cartData.attributes[0].name}</h3>
                                <div className='cart-dropdown-size-category'>
                                    {
                                    cartData.attributes[0].items.map((item) => {
                                            return <p key={item.id}>{item.displayValue}</p>
                                        })
                                    }    
                                </div>
                            </div>
                            <div className='cart-dropdown-color-section'>
                                <h3>Color:</h3>
                                <div className='cart-dropdown-colors'>
                                    {
                                        cartData.attributes[1].items.map((item, index) => {
                                            return <p key={item.id} style={{backgroundColor: item.displayValue}}></p>
                                        })
                                    }                                                                                
                                </div>
                            </div>
                        </>
                        ) 
                }
                return(
                <>
                    <div className='cart-dropdown-size-section'>
                        <h3>{cartData.attributes[1].name}</h3>
                        <div className='cart-dropdown-size-category'>
                            {
                            cartData.attributes[1].items.map((item) => {
                                    return <p key={item.id}>{item.displayValue}</p>
                                })
                            } 
                        </div>
                    </div>
                    <div className='cart-dropdown-color-section'>
                        <h3>Color:</h3>
                        <div className='cart-dropdown-colors'>
                            {
                                cartData.attributes[0].items.map((item, index) => {
                                    return <p key={item.id} style={{backgroundColor: item.displayValue}}></p>
                                })
                            }                                                                                
                        </div>
                    </div>
                </>
                )
            } else if(attributes > 0){
                    return(
                        <div className='cart-dropdown-size-section'>
                            <h3>{cartData.attributes[0].name}</h3>
                            <div className='cart-dropdown-size-category'>
                                {
                                cartData.attributes[0].items.map((item) => {
                                        return <p key={item.id}>{item.value}</p>                                        
                                    })
                                }     
                            </div>
                        </div>
                    )
            } else{
                return("")
            } 
        }
        return(
            <div className="cart-dropdown">                
                <div class>
                    {
                        displayDescription()
                    }
                </div>
            </div>
        )
    }
}

export default CartDropdownItems;


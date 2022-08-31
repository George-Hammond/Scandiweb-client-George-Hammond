import React from "react";

class Description extends React.Component{
    render(){
        const {productData,addToCart} = this.props;
        console.log(productData)
        const attributes = productData.product.attributes.length;
        const displayDescription = () =>{
                if(attributes > 2){
                    return(
                    <>
                        <div className='size-section'>
                            <h3>{productData.product.attributes[0].name}</h3>
                            <div className='size-category'>
                                {
                                productData.product.attributes[0].items.map((item) => {
                                        return <p key={item.id}>{item.displayValue}</p>
                                    })
                                }
                                
                                
                            </div>                            
                        </div>
                        <div className='size-section'>
                            <h3>{productData.product.attributes[1].name}</h3>
                            <div className='size-category'>
                                {
                                productData.product.attributes[1].items.map((item) => {
                                        return <p key={item.id}>{item.displayValue}</p>
                                    })
                                }
                                
                                
                            </div>                            
                        </div>
                        <div className='touchId-section'>
                            <h3>{productData.product.attributes[2].name}:</h3>
                            <div className='touchId'>
    
                                {
                                    productData.product.attributes[2].items.map((item, index) => {
                                        return <p key={item.id} >{item.displayValue}</p>
                                    })
                                }                                                                                
                            </div>
                        </div>
                    </>
                    )
            } else if(attributes > 1){
                if(productData.product.id ==="apple-iphone-12-pro"){
                    return(
                        <>
                            <div className='size-section'>
                                <h3>{productData.product.attributes[0].name}</h3>
                                <div className='size-category'>
                                    {
                                    productData.product.attributes[0].items.map((item) => {
                                            return <p key={item.id}>{item.displayValue}</p>
                                        })
                                    }
                                    
                                    
                                </div>
                            </div>
                            <div className='color-section'>
                                <h3>Color:</h3>
                                <div className='colors'>
            
                                    {
                                        productData.product.attributes[1].items.map((item, index) => {
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
                    <div className='size-section'>
                        <h3>{productData.product.attributes[1].name}</h3>
                        <div className='size-category'>
                            {
                            productData.product.attributes[1].items.map((item) => {
                                    return <p key={item.id}>{item.displayValue}</p>
                                })
                            }
                            
                            
                        </div>
                    </div>
                    <div className='color-section'>
                        <h3>Color:</h3>
                        <div className='colors'>
    
                            {
                                productData.product.attributes[0].items.map((item, index) => {
                                    return <p key={item.id} style={{backgroundColor: item.displayValue}}></p>
                                })
                            }                                                                                
                        </div>
                    </div>
                </>
                )
            } else if(attributes > 0){
                    return(
    
                        <div className='size-section'>
                            <h3>{productData.product.attributes[0].name}</h3>
                            <div className='size-category'>
                                {
                                productData.product.attributes[0].items.map((item) => {
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
            <div className='description-section'>
                    <h1>{productData.product.brand}</h1>
                    <h2>{productData.product.name}</h2>
                    <>                   
                       {
                          displayDescription()                       
                       }              
                    </>                    
                    <div className='price-section'>
                        <h3>Price:</h3>
                        <p>{productData.product.prices[0].currency.symbol}
                        {productData.product.prices[0].amount}
                        </p>
                    </div>
                    <div className='add-to-cart'>
                        <button onClick={addToCart}>
                            Add to cart
                        </button>
                    </div>
                    <div 
                    className='description'
                    dangerouslySetInnerHTML={{__html: productData.product.description}}
                    >
                                               
                    </div>
                </div>
        )
    }
}

export default Description;
                        
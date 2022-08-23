import React from 'react';
import Sweater from '../../../images/sweater.svg'

class ProductPage extends React.Component{
    render(){
        return(
            <div className='product-page-section'>
                <div className='different-product'>
                    <img src={Sweater} alt="Sweater"/>
                    <img src={Sweater} alt="Sweater"/>
                    <img src={Sweater} alt="Sweater"/>
                    <img src={Sweater} alt="Sweater"/>
                </div>
                <div className='large-product'>
                    <img src={Sweater} alt="sweater"/>
                </div>
                <div className='description-section'>
                    <h1>Apollo</h1>
                    <h2>Running Short</h2>
                    <div className='size-section'>
                        <h3>Size:</h3>
                        <div className='size-category'>
                            <p>XS</p>
                            <p>S</p>
                            <p>M</p>
                            <p>L</p>
                        </div>
                    </div>
                    <div className='color-section'>
                        <h3>Color:</h3>
                        <div className='colors'>
                            <p></p>
                            <p></p>
                            <p></p>                        
                        </div>
                    </div>
                    <div>
                        <h3>Price:</h3>
                        <p>$50</p>
                    </div>
                    <div className='add-to-cart'>
                        <button>
                            Add to cart
                        </button>
                    </div>
                    <div className='description'>
                        <p>
                        Find stunning women's cocktail dresses 
                        and party dresses.Stand out in lace and metallic 
                        cocktail dresses and party dresses from all your favorite brands.
                        </p>
                    </div>
                </div>

            </div>
        )
    }
}

export default ProductPage;
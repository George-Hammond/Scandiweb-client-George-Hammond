import React from "react";
// import Sweater from '../../../images/sweater.svg'
class LargeImage extends React.Component{
    render(){
        const { productData } = this.props;
        return (
            <div className='large-product'>
               <img src={productData.product.gallery[0]} alt={productData.product}/>
            </div>
        )
    }
}

export default LargeImage;
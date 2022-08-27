import React from "react";
// import Sweater from '../../../images/sweater.svg'

class DifferentImages extends React.Component{
    render(){
        const {productData} = this.props;
        return(
            <div className='different-product'>
                {
                    productData.product.gallery.map((data, index)=> {
                        return <img key={index} img src={data} alt={productData.product.name}/>
                    })
                }
                
            </div>
        )
    }
}

export default DifferentImages;
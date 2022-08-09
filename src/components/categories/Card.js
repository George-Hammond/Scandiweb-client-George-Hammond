import React from 'react';
import '../../styles/index.css';
import Sweater from '../../images/sweater.svg'

class Card extends React.Component{
    render(){
        return(
            <div className="card-wrapper">
                <img src={ Sweater } alt="Shirt" id="product-image"  />
                <p id="product-name">Apollo Running Shorts</p>
                <p id="product-price">$50.00</p>
            </div>
        )
    }
}

export default Card;
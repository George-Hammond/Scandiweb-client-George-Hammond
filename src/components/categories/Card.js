import React from 'react';
import '../../styles/index.css';
import Sweater from '../../images/sweater.svg'

class Card extends React.Component{
    render(){
        return(
            <div className="card-wrapper">
                <img src={ this.props.card.imageLink } alt="Shirt" id="product-image"  />
                <p id="product-name">{this.props.card.productName}</p>
                <p id="product-price">{this.props.card.productPrice}</p>
            </div>
        )
    }
}

export default Card;
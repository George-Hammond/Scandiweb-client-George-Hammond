import React from 'react';
import '../../styles/index.css';
// import Sweater from '../../images/sweater.svg'

class Card extends React.Component{
    render(){
        
        return(
            <div className='card-wrapper'>
                <img src={ this.props.cardData.products[0].gallery[2]} alt="Shirt" id="product-image"  />
                <p id="product-name">{this.props.cardData.products[1].name}</p>
                <p id="product-price">
                    {this.props.cardData.products[0].prices[0].currency.symbol}
                    {this.props.cardData.products[0].prices[0].amount}
                </p>
            </div>
        )
    }
}

export default Card;

//this.props.cardData.products[0].name
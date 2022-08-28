import React from 'react';
import { Link } from '@reach/router';
//import styles
import '../../styles/index.css';
// import Sweater from '../../images/sweater.svg'
//Imported Components
// import GreenCartSvg from '../../images/greenCart.svg';
import GreenCart from './greencart/GreenCart';

class Card extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            isHovered: false                       
        }

        this.handleProductMouseEnter = this.handleProductMouseEnter.bind(this)
        this.handleProductMouseLeave = this.handleProductMouseLeave.bind(this)
        
    }
    
    //Handles event when mouse enters around a product card
    handleProductMouseEnter(){
        this.setState({
            isHovered: true
        })
    }

    //Handles event when mouse leaves around a product card
    handleProductMouseLeave(){
        this.setState({
            isHovered: false
        })
    }

    
    render(){
        const { addToCart, getCardId} = this.props;
        return(
            <div className='card-wrapper' >
                
                <div 
                    className='card-img-section'
                    onMouseEnter={this.handleProductMouseEnter}
                    onMouseLeave={this.handleProductMouseLeave}                
                >
                    <Link to={`/product/${this.props.cardData.id}`}>
                    <img
                        onClick={getCardId}
                        src={this.props.cardData.gallery[0]} 
                        alt={this.props.cardData.name}
                        id="product-image"      
                    />
                   </Link>
                     {

                        this.state.isHovered ? 
                        <GreenCart key={this.props.cardData.id} 
                        addToCart={()=>addToCart(this.props.cardData.id)} 
                        /> : 
                        ''

                    }                     
                </div>
                <p id="product-name">{this.props.cardData.name}</p>
                <p id="product-price">
                    {this.props.cardData.prices[0].currency.symbol}
                    {this.props.cardData.prices[0].amount}
                </p>
            </div>
        )
    }
}

export default Card;

//this.props.cardData.products[0].name
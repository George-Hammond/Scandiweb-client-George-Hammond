import React from 'react';
import { Link } from 'react-router-dom';
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
        const { addToCart, getCardId, cardData,currencyIndex } = this.props;
        return(
            <>
            {
                // out of
                !cardData.inStock ? 
                <div className='card-wrapper out' >
                
                <div 
                    className='card-img-section c-out'                                   
                >
                    
                    <img
                        
                        src={cardData.gallery[0]} 
                        alt={cardData.name}
                        id="product-image"      
                    />
                   
                     {
                         
                         this.state.isHovered ? 
                         <GreenCart key={cardData.id} 
                        /> : 
                        ''
                        
                        }                     
                    </div>
                    <p id="product-name">{cardData.name}</p>
                    <p id="product-price">
                        {cardData.prices[currencyIndex].currency.symbol}
                        {cardData.prices[currencyIndex].amount}
                    </p>
                        {!cardData.inStock && <p id='in-stock'>Out of Stock</p>}
                        <p id='oos-overlay'></p>
                </div>
                : 
                // In Stock
                <div className='card-wrapper' >
                
                <div 
                    className='card-img-section'
                    onMouseEnter={this.handleProductMouseEnter}
                    onMouseLeave={this.handleProductMouseLeave}                
                >
                    <Link to={`/product/${cardData.id}`}>
                    <img
                        onClick={getCardId}
                        src={cardData.gallery[0]} 
                        alt={cardData.name}
                        id="product-image"      
                    />
                   </Link>
                     {
                         
                         this.state.isHovered ? 
                         <GreenCart key={cardData.id} 
                        addToCart={()=>addToCart(cardData.id,cardData.prices[currencyIndex].amount)} 
                        /> : 
                        ''
                        
                    }                     
                </div>
                <p id="product-name">{cardData.name}</p>
                <p id="product-price">
                    {cardData.prices[currencyIndex].currency.symbol}
                    {cardData.prices[currencyIndex].amount}
                </p>                    
            </div>
            }
            </>
        )
    }
}

export default Card;

//cardData.products[0].name
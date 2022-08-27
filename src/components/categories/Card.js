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
            isHovered: false,
            cartItems: []            
        }

        this.handleProductMouseEnter = this.handleProductMouseEnter.bind(this)
        this.handleProductMouseLeave = this.handleProductMouseLeave.bind(this)
        this.addToCart = this.addToCart.bind(this)
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

    //Handles event when green cart logo is clicked
    
    addToCart(product){
        const { cartItems } = this.state;
        let newCartItems= []
        console.log(cartItems)
        console.log(product.id)
        
        const isProductPresent = cartItems.find(item =>item.id === product.id);
        if(!isProductPresent){
            newCartItems.push(product.name);
            this.setState({
                cartItems: newCartItems
            })
        }
        console.log(cartItems)
        
        
    }
    render(){
        
        return(
            <div className='card-wrapper' >
                
                <div 
                    className='card-img-section'
                    onMouseEnter={this.handleProductMouseEnter}
                    onMouseLeave={this.handleProductMouseLeave}                
                >
                    <Link to={`/product/${this.props.cardData.id}`}>
                    <img
                        onClick={this.props.onClick}
                        src={this.props.cardData.gallery[0]} 
                        alt={this.props.cardData.name}
                        id="product-image"      
                    />
                   </Link>
                     {

                        this.state.isHovered ? 
                        <GreenCart key={this.props.cardData.id} 
                        addToCart={()=>this.addToCart(this.props.cardData)} 
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
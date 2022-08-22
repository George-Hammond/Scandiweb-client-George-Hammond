import React from 'react';

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
            
        }

        this.handleProductMouseEnter = this.handleProductMouseEnter.bind(this)
        this.handleProductMouseLeave = this.handleProductMouseLeave.bind(this)
        this.handleGreenCartClick = this.handleGreenCartClick.bind(this)
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
    handleGreenCartClick(key){
        console.log(key)
        alert(key)
    }
    render(){
        
        return(
            <div className='card-wrapper' 
            >
                <div 
                    className='card-img-section'
                    onMouseEnter={this.handleProductMouseEnter}
                    onMouseLeave={this.handleProductMouseLeave}                
                >
                    <img 
                    src={this.props.cardData.gallery[0]} 
                    alt="Shirt" 
                    id="product-image"  
                    
                    
                    />
                   
                     {

                        this.state.isHovered ? 
                        <GreenCart key={this.props.cardData.id} 
                        onClick={()=>this.handleGreenCartClick(this.props.cardData.id)} 
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
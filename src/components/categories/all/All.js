import React from "react";
import Card from '../Card';
import CategoryName from "../Categories";
import { Query } from  'react-apollo';
// import { graphql } from "graphql";
import {ENTRYPOINT_CATEGORY} from '../cardQuery'
// import Categories from "../Categories";


const bigTitle = {
    "title": "all"
}
class All extends React.Component{
    render(){
        const {getCardId, addToCart, currencyIndex} = this.props;
        
        return (
           <div className="appear disapper">
           <Query query={ENTRYPOINT_CATEGORY} variables={{input: bigTitle}} >
                {
                    ({loading, error, data }) => {
                        if(loading) return <div></div>;
                        if(error) return <div>Error: {error.message}</div>;
                        
                        // console.log(data)
                        return <CategoryName categoryName={data} />
                        }
                    }    
            </Query>     
            <div className="category-cardWrapper">
                <Query query={ENTRYPOINT_CATEGORY} variables={{input: bigTitle}} >
                    {
                        ({loading, error, data}) => {
                            if(loading) return <div>Loading...</div>;

                            if(error) return <div>Error: {error.message}</div>;
                            
                            return(   
                                 
                                data.category.products.map(cardData => (                                    
                                  <Card key={cardData.id} 
                                  cardData={cardData} 
                                  getCardId={()=>getCardId(cardData.id)}
                                  addToCart={()=>addToCart(cardData.id,cardData.prices[currencyIndex].amount)}
                                  currencyIndex={currencyIndex} 
                                  />
                                ))
                                                    
                                )
                            }
                        }
                </Query>
            </div>
          </div>  
        )
    }
}

export default All;

// console.log(data.category.products.map(card=>{
//     return card
// }))  
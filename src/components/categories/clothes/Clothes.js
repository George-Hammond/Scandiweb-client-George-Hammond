import React from "react";
import Card from "../Card";
import CategoryName from "../Categories";
import {ENTRYPOINT_CATEGORY} from "../cardQuery";
import { Query } from 'react-apollo';

const bigTitle = {
    "title": "clothes"
}

class Clothes extends React.Component{
    render(){
        const { getCardId, addToCart, currencyIndex } = this.props;
        return (
        <>
            <Query query={ENTRYPOINT_CATEGORY} variables={{input: bigTitle}}>
                {
                    ({loading,error, data}) => {
                        if(loading) return <div></div>;
                        if(error) return <div>Error... {error.message}</div>

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
                            console.log(data.category.products)
                            return(    
                                data.category.products.map((cardData, index)=> (
                                  <Card key={cardData.id} 
                                  cardData={cardData} 
                                  getCardId={()=>getCardId(cardData.id)}
                                  addToCart={()=>addToCart(cardData.id, data.category.products[index].prices[currencyIndex].amount)}
                                  currencyIndex={currencyIndex}
                                  />
                                ))
                                                    
                                )
                            }
                        }
                </Query>
            </div>
        </>
        )
    }
}

export default Clothes;
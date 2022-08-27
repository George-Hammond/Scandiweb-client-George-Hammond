import React from "react";
import Card from "../Card";
import CategoryName from "../Categories";
import {ENTRYPOINT_CATEGORY} from "../cardQuery";
import { Query } from 'react-apollo';


const bigTitle = {
    "title": "tech"
}

class Tech extends React.Component{
    render(){
        return (
        <>
            <Query query={ENTRYPOINT_CATEGORY} variables={{input: bigTitle}} >
                 {
                     ({loading, error, data}) => {
                        if(loading) return <div></div>;
                        if(error) return <div>Error: {error.message}</div>;
                             
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
                                  onClick={()=>this.props.getCardId(cardData.id)}
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

export default Tech;
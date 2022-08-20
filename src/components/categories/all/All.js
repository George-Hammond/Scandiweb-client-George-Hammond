import React from "react";
import Card from '../Card';

import { Query } from  'react-apollo';
// import { graphql } from "graphql";
import GET_ALL from '../cardQuery'
// import Categories from "../Categories";


class All extends React.Component{
   
    render(){
        return (
            <div className="category-cardWrapper">
                <Query query={GET_ALL}  >
                    {
                        ({loading, error, data}) => {
                            if(loading) return <div>Loading...</div>;

                            if(error) return <div>Error: {error.message}</div>;

                            return(                               
                                data.categories.map(cardData => (
                                    <Card key={cardData.products.id} cardData={cardData} />
                                ))
                            )
                        }
                    }
                </Query>
            </div>
        )
    }
}

export default All;
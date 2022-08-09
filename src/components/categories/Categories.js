import React from "react";
import '../../styles/index.css';
import Card from './Card';
import { Query } from "react-apollo";
import gql from "graphql-tag";

const CARD_QUERY = gql`
    {
        cardsForHome {
            id
            imageLink
            productName
            productPrice
        }
    }
`

class Categories extends React.Component{
    render(){
        return(
            <main>
                <h2 id="category-heading" >Category name</h2>
                <div className="category-cardWrapper">
                    <Query query={CARD_QUERY} >
                        {
                            ({loading, error, data}) => {
                                if(error) return <p>Error: ☹ {error.message} </p>;

                                if(loading) return <p>Loading 💫</p>;

                                return data.cardsForHome.map(card => (
                                    <div>                                        
                                         <Card key={card.id} card={card} />
                                    </div>
                                ))
                            }                            
                        }
                    </Query>
                </div>
            </main>
        )
    }
}

export default Categories;
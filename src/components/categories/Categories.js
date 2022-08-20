import React from "react";
import '../../styles/index.css';
import CATEGORY_NAME from './cardQuery'
import { Query } from  'react-apollo';

class CategoryName extends React.Component{
    render(){
        return (
            <Query query={CATEGORY_NAME}  >
                    {
                        ({loading, error, data}) => {
                            if(loading) return <div>Loading...</div>;

                            if(error) return <div>Error: {error.message}</div>;

                            
                            return <h2 id="category-heading">{console.log(data.categories.name)}</h2>
                        }
                    }
                </Query>
        )
    }
}

export default CategoryName;
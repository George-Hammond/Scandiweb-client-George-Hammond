import React from "react";
import '../../styles/index.css';


class CategoryName extends React.Component{
    render(){
        return (
             <h2 id="category-heading">{this.props.categoryName.name}</h2>            
        )
    }
}

export default CategoryName;
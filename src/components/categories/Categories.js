import React from "react";
import '../../styles/index.css';
import Card from './Card';

class Categories extends React.Component{
    render(){
        return(
            <main>
                <h2 id="category-heading" >Category name</h2>
                <div className="category-cardWrapper">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </main>
        )
    }
}

export default Categories;
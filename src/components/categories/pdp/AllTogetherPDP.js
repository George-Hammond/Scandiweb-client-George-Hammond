import React from "react";
import LargeImage from './LargeImage';
import DifferentImages from './DifferentImages';
import Description from './Description'; 


class AllTogetherPDP extends React.Component{
    render(){
        const { productData } = this.props;
        return(
            <>
                <DifferentImages productData={productData}/>
                <LargeImage productData={productData} />
                <Description productData={productData} />
            </>
        )
    }
}

export default AllTogetherPDP;
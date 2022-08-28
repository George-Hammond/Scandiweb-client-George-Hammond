import React from "react";
import { CURRENCY_QUERY } from '../categories/cardQuery';
import {Query} from 'react-apollo';


class CurrencyChange extends React.Component{
    render(){
        return(
            <div className="select-currency">
                <div className="currency-section">
                    <Query query={CURRENCY_QUERY}>
                    {
                        ({loading, error, data}) =>{
                            if(loading) return "";
                            if(error) return `Error :( ${error.message}`;

                            return(
                                data.currencies.map(item => {
                                    return (
                                    <p key={item.label}><span id="c-symbol">{item.symbol}</span>
                                    <span id="c-label">{item.label}</span></p>
                                    )
                                })
                            )
                        }
                    }
                        
                    </Query>
                </div>
            </div>
        )
    }
}
export default CurrencyChange;
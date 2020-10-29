import React, {CSSProperties, Fragment} from 'react';
import {Ingredients} from '../../types/commonInterface';

interface ModalProps{
    label: string,
    ingredients: Ingredients,
    totalPrice: number
    
}

const TABLE_STYLE:CSSProperties = {
    borderCollapse: "collapse",
    width: '100%',
}
const TH_TD_STYLE:CSSProperties = {
    border: "1px solid #dddddd",
    textAlign: "left",
    padding: "8px",
}

export const OrderSummary = React.memo(
    ({label, ingredients, totalPrice}:ModalProps) =>{

    const Ingredients = Object.keys(ingredients)
    .map(iKey => { 
        return(
            <tr style={TH_TD_STYLE} key={iKey}>
                <td>{iKey}</td>
                <td>{ingredients[iKey]}</td>
            </tr>
        )
        
    })
    return(
    <Fragment>
        <div style={{width:"450px"}}>
            <h3>{label}</h3>
            <table style={TABLE_STYLE}>
                <tbody>
                    <tr style={TH_TD_STYLE}>
                        <th>Ingredient</th>
                        <th>Amount</th>
                    </tr>
                    {Ingredients}
                </tbody>
            </table>
            <div>Total Price: <b>{totalPrice.toFixed(2)}$</b></div>
            <br/>
        </div>
        
    </Fragment>
    )   

});
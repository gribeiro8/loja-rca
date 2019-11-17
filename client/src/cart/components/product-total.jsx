import React from 'react'
import './product-total.css'

export default props => (
    <div className="product-total">
        <p className="product-total-text"> Total</p>
        <p className="product-total-value"> $ {props.value}</p>
           
       
    </div>
)
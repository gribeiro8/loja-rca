import React from 'react'
import './product.css'

export default props => (
        <div className="product" key={props.id}>
            <div className="product-header">
                <div className="product-title">
                    <h1>{props.title}</h1>
                    <p>{props.console}</p>
                </div>
                <div className="product-price">
                    <p className="product-price-text">${props.price}</p>
                </div>
            </div>
            <div className="product-body">
                <div className="product-img">
                    <img src={require(`../../../assets/imgs/${props.img}`)} alt=""/>
                </div>
                    <button className="product-button">Add to cart</button>
            </div>
        </div>
)
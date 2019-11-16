import React from 'react'
import './products.css'

export default props => (
    <div>
        <div className="product">
            <div className="product-header">
                <div className="product-title">
                    <h1>{props.title}</h1>
                    <p>{props.consoles}</p>
                </div>
                <div className="product-price">
                    <p className="product-price-text">${props.price}</p>
                </div>
            </div>
            <div className="product-body">
                <div className="product-img">
                    <img src={require(`../../../assets/imgs/${props.img}`)} alt=""/>
                </div>
                <div className="product-button">
                    <button>Add to cart</button>
                </div>
            </div>
        </div>
    </div>
)
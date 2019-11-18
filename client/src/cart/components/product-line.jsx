import React from 'react'
import './product-line.css'

export default props => (
    <div className="product-line" >
        <div className="product-info">
            <img src={require(`../../assets/imgs/${props.img}`)} alt="" />
            <div className="product-text">
                <h1>{props.title}</h1>
                <p>{props.console}</p>
            </div>
        </div>
        <div className="product-count">
            <button onClick={props.bottonminus} data-id={props.id}>-</button>
            <p>{props.count ? props.count : 0}</p>
            <button onClick={props.bottonplus} data-id={props.id}>+</button>
        </div>
        <div className="product-value">
            $ {props.price}
        </div>
    </div>
)


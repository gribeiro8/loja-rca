import React from 'react'
import './productslist.css'
import Product from './product'

export default props => {
    const renderProducts = () => {
        const products = props.products || []
        return products.map(product => {
            if (product.incart === true) {
                return <Product id={product.id} key={product.id} title={product.title} console={product.console} price={product.price} img={product.img} selected="true"  addcart={props.addcart} removecart={props.removecart} />
            } else {
                return <Product id={product.id} key={product.id} title={product.title} console={product.console} price={product.price} img={product.img} selected="false" addcart={props.addcart} removecart={props.removecart} />
            }
        }
        )
    }

    return (
        <div className="products-grid">
            {renderProducts()}
        </div>
    )

}
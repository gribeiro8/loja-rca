import React from 'react'
import './productslist.css'
import Product from './product'


export default props => {
    const renderProducts = () => {
        const products = props.products || []
        console.log(products);
        return products.map(product => (
            <Product key={product.id} title={product.title} console={product.console} price={product.price} img={product.img} />
        ))
    }

    return (
        <div className="products-grid">
            {renderProducts()}
        </div>
    )

}
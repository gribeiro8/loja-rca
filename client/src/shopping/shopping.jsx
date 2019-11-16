import React, { Component } from 'react'
import Titleheader from '../template/titleheader/titleheader'
import Product from './components/products/products'
import './shopping.css'

export default class Shopping extends Component {
    render() {
        return (
            <div className="main">
                <Titleheader title="Products" chart="true" />
                <div className="products-grid">
                    <Product title="TLOU 2" console="ps4" price="199" img="game-1.png"/>
                    <Product title="Cyberpunk" console="ps4, pc, xbox" price="200" img="game-2.png"/>
                </div>
            </div>
        )
    }
}
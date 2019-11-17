import React, { Component } from 'react'
import Titleheader from '../template/titleheader/titleheader'
import ProductLine from './components/product-line'
import ProductTotal from './components/product-total'
import './cart.css'

export default class Cart extends Component {
    constructor(props){
        super(props)
        this.state = {}
        this.bottonplus = this.bottonplus.bind(this)
    }

    bottonplus(e){

        console.log(e);
    }

    render() {
        return(
        <div className="main">
            <Titleheader title="Cart" chart="false" />
            <div className="products-grid-cart">
                <ProductLine title="TLOU 2" console="Ps4" price="199" img="game-1.png" count="" bottonplus={this.bottonplus} />
                <ProductLine title="Cyberpunk" console="ps4, pc, xbox" price="200" img="game-2.png" count="" />
                <ProductLine title="Days Gone" console="ps4" price="127" img="game-3.png" count=""/>
                <ProductLine title="God of War" console="ps4" price="60" img="game-4.png" count="" />
                <ProductTotal value="387" />
            </div>
        </div>
        )
    }
}

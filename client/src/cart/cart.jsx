import React, { Component } from 'react'
import axios from 'axios'

import Titleheader from '../template/titleheader/titleheader'
import ProductLine from './components/product-line'
import ProductTotal from './components/product-total'
import './cart.css'


const URLlist = 'http://localhost:5000/cart'

export default class Cart extends Component {

    constructor(props) {
        super(props)

        this.state = { products: [], valuetotal: 0 }
        this.acessList = this.acessList.bind(this)
        this.bottonplus = this.bottonplus.bind(this)
        this.bottonminus = this.bottonminus.bind(this)
        this.renderProducts = this.renderProducts.bind(this)
        this.countTotal = this.countTotal.bind(this)
        this.acessList();
    }

    acessList = async () => {
        axios.get(`${URLlist}`)
            .then(resp => {
                this.setState({ ...this.state, products: resp.data.products })
                this.countTotal()
            })
    }

    bottonplus(e) {
        let index = e.target.dataset.id;
        let newproducts = this.state.products;
        newproducts[index].total =  newproducts[index].total+1;
        this.setState({ ...this.state, products: newproducts })
        this.countTotal() ;
    }

    bottonminus(e){
        let index = e.target.dataset.id;
        let newproducts = this.state.products;
        newproducts[index].total =  newproducts[index].total-1;
        this.setState({ ...this.state, products: newproducts })
        this.countTotal() ;
    }

    renderProducts() {
        const products = this.state.products || []
        return products.map(product => {
            const value = product.price * product.total;
            return <ProductLine id={product.id} key={product.id} title={product.title} console={product.console} price={value} img={product.img} count={product.total} bottonplus={this.bottonplus} bottonminus={this.bottonminus}/>
        })

    }

    countTotal() {
        const products = this.state.products || []
        let valuetotali = 0;
        products.map(product => {
            const value = product.price * product.total;
            valuetotali += value;
            return 0;
        })
        this.setState({ ...this.state, valuetotal: valuetotali })

    }





    render() {
        return (
            <div className="main">
                <Titleheader title="Cart" chart="false" />
                <div className="products-grid-cart">
                    {this.renderProducts()}
                    <ProductTotal value={this.state.valuetotal} />
                </div>
            </div>
        )
    }
}

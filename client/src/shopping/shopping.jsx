import React, { Component } from 'react'
import Titleheader from '../template/titleheader/titleheader'
import axios from 'axios'
import './shopping.css'
import ProductList from './components/products/productslist'

const URLlist = 'http://localhost:5000/products/list'

export default class Shopping extends Component {
    constructor(props) {
        super(props)
        this.state = { products: [], cart: [], total: 0 }
        this.acessList = this.acessList.bind(this)
        this.countProducts = this.countProducts.bind(this)
        this.countProducts = this.countProducts.bind(this)
        this.addcart = this.addcart.bind(this)
        this.removecart = this.removecart.bind(this)
        this.acessList();

    }

    acessList = async () => {
        axios.get(`${URLlist}`)
            .then(resp => {
                this.setState({ ...this.state, products: resp.data.products })
                this.countProducts();
            })
    }

    countProducts = async () => {
        let totali = 0;
        this.state.products.map(product => {
            if (product.incart === true) {
                totali++;
            }
        });
        this.setState({ ...this.state, total: totali })
    }


    addcart(e) {
        let index = e.target.dataset.id;
        const URL = 'http://localhost:5000/cart/add';
        axios.post(URL, { id: index })
        .then(resp => {
            let newproducts = this.state.products;
            newproducts[index].incart = true;
            this.setState({ ...this.state, products: newproducts })
    
            let totali = this.state.total;
            totali++;
            this.setState({ ...this.state, total: totali })
        })
    }

    removecart(e) {
        let index = e.target.dataset.id;
        const URL = 'http://localhost:5000/cart/remove';
        axios.post(URL, { id: index })
        .then(resp => {
            let newproducts = this.state.products;
            newproducts[index].incart = false;
            this.setState({ ...this.state, products: newproducts })
    
            let totali = this.state.total;
            totali--;
            this.setState({ ...this.state, total: totali })
        })

    }


    render() {
        return (
            <div className="main">
                <Titleheader title="Products" cart="true" products={this.state.products} total={this.state.total} />
                <ProductList products={this.state.products} addcart={this.addcart} removecart={this.removecart} />
            </div>
        )
    }
}
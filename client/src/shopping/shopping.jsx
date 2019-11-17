import React, { Component } from 'react'
import Titleheader from '../template/titleheader/titleheader'
import axios from 'axios'
import './shopping.css'
import ProductList from './components/products/productslist'


const URL = 'http://localhost:5000/products/list'

export default class Shopping extends Component {
    constructor(props) {
        super(props)
        this.state = { products: [] }
        this.list = this.list.bind(this)
        this.list();
    }

    list() {
        axios.get(`${URL}`)
            .then(resp => this.setState({ ...this.state, products: resp.data.products }))
    }


    render() {
        

        return (
            <div className="main">
                <Titleheader title="Products" chart="true" />
                <ProductList products={this.state.products}/>
            </div>
        )
    }
}
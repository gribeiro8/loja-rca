import React, { Component } from 'react'
import Banner from '../template/banner/banner'
import Titleheader from '../template/titleheader/titleheader'

export default class Shopping extends Component {
    render(){
        return (
            <div>
                <Banner />
                <Titleheader title = "Products" chart="true"/>
            </div>
        )
    }
}
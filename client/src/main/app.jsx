import 'modules/font-awesome/css/font-awesome.css'
import { BrowserRouter } from 'react-router-dom';
import Banner from '../template/banner/banner'
import Footer from '../template/footer/footer'
import './app.css'

import React from 'react'
import Menu from '../template/menu'
import Routes from './routes'

const App = () => (


    <BrowserRouter>
        <Menu />
        <Banner />
        <Routes />
        <Footer/>
    </BrowserRouter>
)


export default App;
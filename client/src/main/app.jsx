import 'modules/font-awesome/css/font-awesome.css'
import { BrowserRouter } from 'react-router-dom';
import Banner from '../template/banner/banner'
import Footer from '../template/footer/footer'
import './app.css'

import React from 'react'
import Header from '../template/header/header'
import Routes from './routes'

const App = () => (


    <BrowserRouter>
        <Header />
        <Banner />
        <Routes />
        <Footer/>
    </BrowserRouter>
)


export default App;
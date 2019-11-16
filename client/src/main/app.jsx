import 'modules/font-awesome/css/font-awesome.css'
import { BrowserRouter } from 'react-router-dom';

import React from 'react'
import Menu from '../template/menu'
import Routes from './routes'

const App = () => (


    <BrowserRouter>
        <Menu />
        <Routes />
    </BrowserRouter>
)


export default App;
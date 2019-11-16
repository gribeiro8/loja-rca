import React from 'react'
import { NavLink } from 'react-router-dom';
import './header.css'

export default props => (
    <header>

            <img className="logo" src={require(`../../assets/imgs/logo.png`)} alt="" />

            <nav>
                <ul className="nav-links">
                    <li>
                        <NavLink className="nav-link" to='/'>Products</NavLink>
                    </li>
                    <li>
                        <NavLink className="nav-link" to='/chart'>Chart</NavLink>
                    </li>
                </ul>
            </nav>
            <button  className="login">Login</button>
    </header>

)
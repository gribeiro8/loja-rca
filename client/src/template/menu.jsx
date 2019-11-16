import React from 'react'
import { NavLink } from 'react-router-dom';

export default props => (
    <div className="menu">
        <div className="menu-image">
            <p>Imagem</p>
        </div>
        <div className="menu-bar">
            <ul className="menu-ul">
                <li>
                    <NavLink className="nav-link" to='/'>Products</NavLink>
                </li>
                <li>
                <NavLink className="nav-link" to='/chart'>Chart</NavLink>
                </li>
            </ul>

        </div>

    </div>
)
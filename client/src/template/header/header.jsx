import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import './header.css'
import Modal from './components/modal'

//import $ from "jquery";

export default props => {


    useEffect(() => {
        var modal = document.getElementById("myModal");
        var btn = document.getElementById("myBtn");
        
        btn.onclick = function () {
            modal.style.display = "block";
        }
       
        window.onclick = function (event) {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        }
    });


    return (
        <header>
            <img className="logo" src={require(`../../assets/imgs/logo.png`)} alt="" />
            <nav>
                <ul className="nav-links">
                    <li>
                        <NavLink className="nav-link" to='/'>Products</NavLink>
                    </li>
                    <li>
                        <NavLink className="nav-link" to='/cart'>Cart</NavLink>
                    </li>
                </ul>
            </nav>
            <button id="myBtn" className="login">Login</button>
        <Modal />
           
        </header>
    )


}
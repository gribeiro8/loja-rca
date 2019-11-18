import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import './header.css'
import Modal from './components/modal'
import axios from 'axios'

//import $ from "jquery";

export default props => {


    const URL = 'http://localhost:5000/users/login'

    const [isLogged, setisLogged] = useState(false);
    const [user, setUser] = useState();
    const [password, setPassword] = useState();
    const [loggedName, setLoggedName] = useState();



    function userChange(e) {
        setUser(e.target.value);

    }

    function passwordChange(e) {
        setPassword(e.target.value);
    }

    function handleLogin() {
        console.log(password);

        axios.post(URL, { user, password })
            .then(resp => {
                if (resp.data.status === true) {
                    setisLogged(true);
                    setLoggedName(resp.data.name);
                } else {
                    setisLogged(false);
                }
            })
    }


    useEffect(() => {
        if (isLogged === false) {
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
        }

    });


    return (
        <header>
            <div className="header-left">
                <img className="logo" src={require(`../../assets/imgs/logo.png`)} alt="" />
                <nav>
                    <ul className="nav-links">
                        <li>
                            <NavLink className="nav-link" to='/'>Products</NavLink>
                        </li>
                       
                    </ul>
                </nav>
            </div>

            {isLogged === false ? (
                <div className="header-right">
                    <button id="myBtn" className="login">Login</button>
                    <Modal user={user} password={password} userChange={userChange} passwordChange={passwordChange} handleLogin={handleLogin} />
                </div>

            ) : (
                    <div className="header-right">
                        <p className="logged-user">Welcome {loggedName}</p>
                        <button className="logout">Logout</button>
                    </div>

                )}




        </header>
    )


}
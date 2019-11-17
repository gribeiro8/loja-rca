import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import './modal.css'
//import $ from "jquery";

export default props => {



    return (
        <div id="myModal" className="modal">

            <div className="modal-content">
                <input type="text" value={props.user} onChange={props.userChange} placeholder="E-mail" />
                <input type="password" name="password" value={props.password} id="" onChange={props.passwordChange} placeholder="Password" />
                <button onClick={props.handleLogin}>LOGIN</button>
            </div>

        </div>
    )


}


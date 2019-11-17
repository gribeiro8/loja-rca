import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import './modal.css'
//import $ from "jquery";

export default props => {



    return (
        <div id="myModal" className="modal">

        <div className="modal-content">
            <form action="" method="post">
                <input type="text"/>
                <input type="password" name="password" id=""/>
                <button>LOGIN</button>
            </form>
        </div>
       
       </div>
    )


}


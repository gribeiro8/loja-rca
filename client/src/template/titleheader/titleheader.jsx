import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import './titleheader.css'


export default props => {
  
    return (
        <div className="titleheader">
            <h2>{props.title}</h2>


            {props.cart === 'true' ? (
                <div className="char-counter">
                    <NavLink  to='/cart'><i className="fa fa-shopping-cart icon-cart"></i></NavLink>
                    
                    <p>{props.total}</p>
                </div>
            ) : null}



        </div>
    )
}
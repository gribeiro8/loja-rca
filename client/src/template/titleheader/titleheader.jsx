import React from 'react'
import 'font-awesome/css/font-awesome.min.css';
import './titleheader.css'


export default props => (
        <div className="titleheader">
            <h2>{props.title}</h2>


            {props.chart == 'true' ? (
                <i className="fa fa-shopping-cart icon-cart">1</i>
            ) : null}



        </div>
)
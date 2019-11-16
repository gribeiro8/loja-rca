import React from 'react'
import './footer.css'

export default props => (
    <div className="footer">
        <div className="footer-img">
        <img className="logo" src={require(`../../assets/imgs/logo.png`)} alt="" />
        </div>
        <div className="footer-text">
            <p>Teste front-end 2019 - RCA Digital</p>
        </div>
    </div>
)
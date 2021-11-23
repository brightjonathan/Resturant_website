import React from 'react'
import { Link } from "react-router-dom";

const Menu1b = ({e}) => {
    
    return (
        <div className="menuItem">
            <div style={{backgroundImage: `url(${e.image})`}}></div>
            <h1 className="name1">{e.name}</h1>
            <p>N{e.price}</p>
            <Link to='#' className="order">{e.order}</Link>
            
        </div>
    )
}

export default Menu1b
import React from 'react'
import { Link } from 'react-router-dom'
import ShopingCart from '../shopingcart/ShopingCart'
import { useSelector} from 'react-redux'



export default function Navigation() {
  

    const totalCartQuantity = useSelector(state => state.cart.totalCartQuantity)

    return (
        <div>
        <nav className="navbar navbar-expand-lg navbar-dark secondary-color">
            <Link className="navbar-brand" to="/"><i className="fas fa-shoe-prints mr-3"></i>Skobutiken</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/products">Skor</Link>
                    </li>
                
                  
                </ul>
                <ul className="navbar-nav ml-auto nav-flex-icons">
        
                <li className="nav-item dropdown">
                        <a className="nav-link mr-4" type="button" href="#!" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {totalCartQuantity}<i className="fas fa-shopping-cart"></i>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right z-depth-2 maxWidth">
                        <ShopingCart />
                        </div>
                </li>
      
      
       
    </ul>
            </div>
        </nav>
        </div>
    )
}

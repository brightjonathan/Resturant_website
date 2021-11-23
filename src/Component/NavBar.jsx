import React from 'react'
import { Link } from "react-router-dom"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const NavBar = () => {
  return (
    <React.Fragment>
       <header id="header" class="fixed-top d-flex align-items-cente">
    <div class="container-fluid container-xl d-flex align-items-center justify-content-lg-between">

      <h1 class="logo me-auto me-lg-0"><Link to="/" className="H1">Supreme Restaurant </Link></h1>

      <nav id="navbar" class="navbar order-last order-lg-0">
        <ul>
          <li><Link to="/" class="nav-link scrollto active">Home</Link></li>
          <li><Link to="/about" class="nav-link scrollto" >About</Link></li>
          <li><Link to="/menu" class="nav-link scrollto">Menu</Link></li>
          <li class="dropdown"><Link to="#"><span>Services</span> <i class="bi bi-chevron-down"></i></Link>
            <ul>
              <li><Link to="/">Drop Down 1</Link></li>
              <li class="dropdown"><Link to="#"><span>Deep Drop Down</span> <i class="bi bi-chevron-right"></i></Link>
                <ul>
                  <li><Link to="/">Fast Food Restaurants</Link></li>
                  <li><Link to="/">Fine Dining Restaurants</Link></li>
                  <li><Link to="/">Cafe Restaurants</Link></li>
                  <li><Link to="/">Prepare It Yourself Restaurants</Link></li>
                  <li><Link to="/">Children's Restaurants</Link></li>
                </ul>
              </li>
              <li><Link to="/">Drop Down 2</Link></li>
              <li><Link to="/">Drop Down 3</Link></li>
              <li><Link to="/">Drop Down 4</Link></li>
            </ul>
          </li>
          <li><Link to="/contact" class="nav-link scrollto">Contact</Link></li>
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav>
      <Link to="/sign_up" class="book-a-table-btn scrollto d-none d-lg-flex">Sign up / Login</Link>
      {/* <AddShoppingCartIcon /> */}

    </div>
  </header>
    </React.Fragment>
  )
}

export default NavBar

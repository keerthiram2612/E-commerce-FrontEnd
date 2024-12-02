import React from 'react'
import "./Navbarstyle.css"
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className='navbar'>
      <div className="container">
        <div className="row">
           {/* Logo Section */}
            <div className="col-md-2">
            <div className="logo">
            <i class="fa-solid fa-basket-shopping fa-2x">Grocie</i>
            </div>
            </div>
            <div className="col-md-10 text-end d-md-none">
            <button className="menu-toggle-btn" onClick={toggleMenu}>
              <i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars'} fa-2x`}></i>
            </button>
          </div>
            <div  className={`col-md-10 ${isMenuOpen ? 'menu-open' : 'menu-closed'}`}>
              <div className="navbar">
                <ul className='route'>
                 <a href="/"><li>Home</li></a>
                 <a href="feature"><li>Features</li></a>
                 <a href="product"><li>Products</li></a>
                 <a href="categories"><li>Categories</li></a>
                 <a href="review"><li>Review</li></a>
                 <a href="cart"><li>Cart</li></a>
                 <a href='login'><li>Login</li></a>
                 <i class="fa-solid fa-magnifying-glass fa-1x"></i><input className='text-center' type="search" placeholder='Search'/>
                </ul>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

import React from 'react'
import "./Navbarstyle.css"

export default function Navbar() {
  return (
    <div className='navbar'>
      <div className="container">
        <div className="row">
            <div className="col-md-2">
            <div className="logo">
            <i class="fa-solid fa-basket-shopping fa-2x">Groco</i>
            </div>
            </div>
            <div className="col-md-10">
              <div className="navbar">
                <ul className='route'>
                 <a href=""><li>Home</li></a>
                 <a href=""><li>Features</li></a>
                 <a href=""><li>Products</li></a>
                 <a href=""><li>Categories</li></a>
                 <a href=""><li>Review</li></a>
                 <a href=""><li>Blogs</li></a>
                 <a href=''><li>Login</li></a>
                 <i class="fa-solid fa-magnifying-glass fa-1x"></i>
                 <i class="fa-solid fa-user fa-1x"></i>
                </ul>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

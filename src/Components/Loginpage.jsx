import React from 'react'
import "./Login.css"
export default function Loginpage() {
  return (
    <div>
      <div className="login">
        <div className="container">
          <div className="login-page">
          <div className="row">
            <div className="login-content">
              <h2 className='text-center'>Login</h2>
              <div className="col-md-6 text-center">
                <img src="https://freshindiaorganics.com/cdn/shop/files/FIO_Banner3_1.jpg?v=1632811191" alt="" />
              </div>
              <div className="col-md-6 text-center">
              <i class="fa-solid fa-user fa-2x"></i><input type="text" placeholder='Username'/><br />
              <i class="fa-solid fa-lock fa-2x"></i><input type="text" placeholder='Password' /><br />
                <a className='text-center' href='login'><li>Forgot Password</li></a>
                <button className='text-center'>Login</button><br />
                or
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Featurecontent from './Components/Featurecontent'
import Products from './Components/Products'


export default function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Featurecontent/>
      <Products/>
    </div>
  )
}

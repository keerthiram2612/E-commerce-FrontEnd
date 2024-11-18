import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Featurecontent from './Components/Featurecontent'
import Products from './Components/Products'
import Categories from './Components/Categories'


export default function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Featurecontent/>
      <Products/>
      <Categories/>
    </div>
  )
}

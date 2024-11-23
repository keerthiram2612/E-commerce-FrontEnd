import React from 'react'
import Navbar from '../Components/Navbar'
import Homecontent from "../Components/Homecontent"
import Featurecontent from '../Components/Featurecontent'
import Products from '../Components/Products'
import Categories from '../Components/Categories'

export default function Home() {
  return (
    <div>
      <Navbar/>
       <Homecontent/>
       <Featurecontent/>
       <Products/>
       <Categories/>
    </div>
  )
}

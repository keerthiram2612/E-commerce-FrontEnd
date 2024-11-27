import React from 'react'
import Home from './Pages/Home'
import { Routes,Route} from 'react-router-dom'
import Features from "./Pages/Features"
import Product from './Pages/Product'

export default function App() {
  return (
    <div>
       <Routes>
       <Route path = "/" element = {<Home/>}></Route>
       <Route path = "/feature" element = {<Features/>}></Route>
       <Route path = "/product" element = {<Product/>}></Route>
       </Routes>
    </div>
  )
}

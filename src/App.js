import React from 'react'
import Home from './Pages/Home'
import { Routes,Route} from 'react-router-dom'
import Features from "./Pages/Features"
import Product from './Pages/Product'
import Categoriespage from './Pages/Categoriespage'
import Reviewpage from "./Pages/Reviewpage"
import Login from './Pages/Login'

export default function App() {
  return (
    <div>
       <Routes>
       <Route path = "/" element = {<Home/>}></Route>
       <Route path = "/feature" element = {<Features/>}></Route>
       <Route path = "/product" element = {<Product/>}></Route>
       <Route path = "/categories" element = {<Categoriespage/>}></Route>
       <Route path = "/review" element = {<Reviewpage/>}></Route>
       <Route path = "/login" element = {<Login/>}></Route>
       </Routes>
    </div>
  )
}

import React from 'react'
import Home from './Pages/Home'
import { Routes,Route} from 'react-router-dom'
import Features from "./Pages/Features"

export default function App() {
  return (
    <div>
       <Routes>
       <Route path = "/" element = {<Home/>}></Route>
       <Route path = "/feature" element = {<Features/>}></Route>
       </Routes>
    </div>
  )
}

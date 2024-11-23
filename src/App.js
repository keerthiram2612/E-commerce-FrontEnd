import React from 'react'
import Home from './Pages/Home'
import { Routes,Route} from 'react-router-dom'


export default function App() {
  return (
    <div>
       <Routes>
       <Route path = "/home" element = {<Home/>}></Route>
       </Routes>
    </div>
  )
}

import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import './style.css'
import Homepage from './Page/Homepage'
import Cartpage from './Page/Cartpage'

export default function Navigation() {
  return (
    <HashRouter>
        <Routes>
            <Route path='/' element={<Homepage />}></Route>
            <Route path='/CartPage' element={<Cartpage />}></Route>
        </Routes>
    </HashRouter>
  )
}

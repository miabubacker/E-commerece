import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Component/Home'
import Dashboard from '../Component/Dashboard'

export default function Routers( props) {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='*' element={<Home/>}/>
    </Routes>
    </BrowserRouter>
  )
}

import React from 'react'
import Dashboard from '../Dashboard/Dashboard'
import Header from '../Header/Header'
import { Route, Routes } from 'react-router-dom'
import Product from '../Product/Product'
import Cart from '../Cart/Cart'
import { useState } from 'react'

export default function Home(props) {
  return (
<React.Fragment>
<Header {...props}/>
        <Routes>
            <Route path='/' element={<Dashboard {...props}/>}/>
            <Route path='product/:id' element={<Product {...props}/>}/>
            <Route path='/cart' element={<Cart {...props} />}/>
        </Routes>
</React.Fragment>
  )
}

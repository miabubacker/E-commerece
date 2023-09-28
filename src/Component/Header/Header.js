import { filter } from 'lodash'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Header(props) {
   const{addCart,ticketsActions,productDetails}=props
     const serachProduct=(e)=>{
  const filterd= productDetails.filter((data)=>data.brand.toLowerCase().includes(e.target.value.toLowerCase())|| data.title.toLowerCase().includes(e.target.value.toLowerCase()))
ticketsActions.searchProduct(filterd)
     }
     
  return (
<React.Fragment>
  <div>  <Link to={'/'}>
    Home
    </Link>
    <input type='text' onChange={(e)=>{serachProduct(e)}}/>
<Link to={'/cart'}>{addCart.length}Cart</Link></div>
</React.Fragment>
  )
}

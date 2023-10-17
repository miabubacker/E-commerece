import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Header.css'
export default function Header(props) {
  const { addCart, ticketsActions, productDetails } = props;
  const serachProduct = (e) => {
    const filterd = productDetails.filter(
      (data) =>
        data.brand.toLowerCase().includes(e.target.value.toLowerCase()) ||
        data.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    ticketsActions.searchProduct(filterd);
  };

  return (
    <React.Fragment>
      <div className="parent">
      <div className="headerContainer">
         <div className="homeIcon"> 
          <Link to={"/"}>
          <i className="fa fa-home">ABs</i><span>&#128522;</span>
            </Link></div>
        <div style={{width:"45%"}}>  <input
            type="text"
            onChange={(e) => {
              serachProduct(e);
            }}
             className="inputbox"
       /></div>

          <div className="cart">
          <div>Order</div>  
          <div style={{width:'3rem'}}>

       <span style={{color:"orange"}}>{addCart.length>0&& addCart.length}  </span> 
          <Link to={"/cart"}>
            <i className="fa fa-shopping-cart"></i>
              </Link>
              </div>
            </div>
          
        </div>
      </div>
     
   
    </React.Fragment>
  );
}

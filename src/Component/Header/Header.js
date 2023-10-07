import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Header.css'
import { add } from "lodash";
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
         <div className="homeIcon">  <Link to={"/"}>Home</Link></div>
        <div style={{width:"45%"}}>  <input
            type="text"
            onChange={(e) => {
              serachProduct(e);
            }}
             className="inputbox"
       /></div>
          <div className="cart"><Link to={"/cart"}>{addCart.length>0&& addCart.length}Cart</Link></div>
          
        </div>
      </div>
     
   
    </React.Fragment>
  );
}

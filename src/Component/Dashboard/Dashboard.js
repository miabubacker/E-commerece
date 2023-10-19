import React, { useEffect, useState } from "react";
import "./Dashboard.scss";
import { useNavigate } from "react-router-dom";
import StarRating from "../StarRating/StarRating";
export default function Dashboard(props) {
  const { ticketsActions, DashboardProductData = [], loading, addCart } = props;
  useEffect(() => {
    ticketsActions.fetchRequestedFeatures();
  }, []);
  const navigate = useNavigate();
  const ViewProductDetails = (e, product) => {
    e.stopPropagation();
    navigate(`/product/${product.id}`);
  };

  const addtoCart = (e, product) => {
    e.stopPropagation();
    const cart = [...addCart];
    const removedublicate = cart.filter(
      (data) => parseInt(data.id) === parseInt(product.id)
    );
    if (removedublicate.length) {
      return;
    } else {
      ticketsActions.addtoCart([...addCart, product]);
    }
  };

  return (
    <React.Fragment>
      {!loading ? (
        <div>loading....</div>
      ) : (DashboardProductData.length>0?
        <div className="main">
          {DashboardProductData.map((s, index) => (
            <div
          key={index}
               className="product"
               onClick={(e) => ViewProductDetails(e, s)}
            >
              <div style={{height: "16rem",padding:'0.5rem' }}>
                <img src={s.thumbnail} alt={s.thumbnail} />
              </div>
              <div style={{padding:'0.5rem'}}>
              <div className="title">{s.title}</div>
              <div style={{margin:'0.5rem 0'}}>Price:<strong>{s.price}</strong></div>
             <div><StarRating data={s.rating} /><span style={{margin:"0 0.5rem"}}>{s.rating}%</span></div>
              <div className="btnContainer">
                <button className="btn"
                  onClick={(e) => {
                    addtoCart(e, s);
                  }}
                >
                  Add to Cart
                </button>
                <div key={index}
              role="button"  className='More'
              onClick={(e) => ViewProductDetails(e, s)}>see More...</div>
              </div>
              </div>
            </div>
          ))}
        </div>:<div className="noFound">No found</div>
      )}
    </React.Fragment>
  );
}

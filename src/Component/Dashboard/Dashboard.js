import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import { useNavigate } from "react-router-dom";
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
            >
           
              <div className="title">{s.title}</div>
              <div>{s.brand}</div>
              <div style={{height: "16rem" }}>
                <img src={s.thumbnail} alt={s.thumbnail} />
              </div>
              {/* <div>{s.description}</div> */}
              <div style={{margin:'0.5rem 0'}}>Price:<strong>{s.price}</strong></div>
              <div className="btnContainer">
                <button className="btn"
                  onClick={(e) => {
                    addtoCart(e, s);
                  }}
                >
                  Add to Cart
                </button>
                <div key={index}
              role="button" style={{fontSize:"1.2rem",cursor:'pointer'}}
              onClick={(e) => ViewProductDetails(e, s)}>see More...</div>
              </div>
            </div>
          ))}
        </div>:<div className="noFound">No found</div>
      )}
    </React.Fragment>
  );
}

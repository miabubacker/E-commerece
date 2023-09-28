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
      ) : (
        <div className="main">
          {DashboardProductData?.map((s, index) => (
            <div
              key={index}
              role="button"
              onClick={(e) => ViewProductDetails(e, s)}
            >
              <div>{s.title}</div>
              <div>{s.decribtion}</div>
              <div style={{ width: "100%", height: "20rem" }}>
                <img src={s.thumbnail} />
              </div>
              <div>{s.price}</div>
              <div>
                <button
                  onClick={(e) => {
                    addtoCart(e, s);
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </React.Fragment>
  );
}

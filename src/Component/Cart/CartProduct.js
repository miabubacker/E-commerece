import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Cart.scss";
export default function CartProduct(props) {
  const { product, updateTotal, addCart, index, ticketsActions, details } =
    props;

  const navigate = useNavigate();

  const increment = (price) => {
    const vs = [...addCart];
    vs[index] = { ...addCart[index], count: product.count + 1 };
    updateTotal(price);
    ticketsActions.CountAndTotal(vs);
  };

  const decrement = (price) => {
    const vs = [...addCart];
    vs[index] = { ...addCart[index], count: product.count - 1 };
    ticketsActions.CountAndTotal(vs);
    updateTotal(-price);
  };

  const removeFromCart = (productId) => {
    let removedata = addCart.filter((data) => data.id !== productId);
    ticketsActions.deleteProduct(removedata);
  };

 

  return (
    <React.Fragment>
      <div className="cartProductContainer">
        <div className="imgMain">
          <img src={product.thumbnail} />
        </div>
        <div>
          <div className="aboutProduct">{product.description}</div>
          <div className="discountOff">{product.discountPercentage}% off</div>
          <div> Brand:{product.brand}</div>
          <div>
            price:{product.price} X {product.count}=
            {product.price * product.count}
          </div>
          <div>In stocks :{product.stock - product.count}</div>
          {/* <div>
            {details.map((data) => data.id).includes(product.id) ? (
              <div>Buying Process</div>
            ) : (
              <button
                onClick={(e) => {
                  buyProcess(e, product);
                }}
              >
                buy
              </button>
            )}
          </div> */}
          <div className="buttonContainer">
            <div className="countConatiner">
              <button
                onClick={() => {
                  increment(product.price);
                }}
                style={{background:"none",border:"none"}}
                disabled={product.stock - product.count < 1}
              >
                +
              </button>
              {product.count}
              <button
                style={{background:"none",border:"none"}}
                disabled={ product.count === 1}
                onClick={() => {
                  product.count > 1 && decrement(product.price);
                }}
              >
                -
              </button>
            </div>
            <div>
              <div
                onClick={() => {
                  removeFromCart(product.id);
                }}
              >
                Delete
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

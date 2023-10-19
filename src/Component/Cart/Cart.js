import React, { useState, useEffect } from "react";
import "./Cart.scss";
import { useNavigate, Link } from "react-router-dom";
import CartProduct from "./CartProduct";

export default function Cart(props) {
  const { addCart,ticketsActions } = props;
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    // addCart.forEach((s) => {
    //   price = price + s.price * s.count;
    // });
    // setTotal(price);

    let totalPrice = addCart
      .map((data) => data.price * data.count)
      .reduce((a, b) => a + b, 0);
    setTotal(totalPrice);
  }, [total, addCart]);
  const updateTotal = (num) => {
    setTotal(total + num);
  };
  const buyProcess = (e, selectProduct) => {
     console.log(...selectProduct)
    ticketsActions.Details({});
    navigate(`/BuyerForm`);
  };

  return (
    <React.Fragment>
      <div  className="parentCartContainer">
        <>
          {addCart.length > 0 ? (
            <>
            <div className="cartCard">
            <div className="cartTitle">
                Shopping Cart
                
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {addCart.map((data, index) => (
                  <CartProduct
                    key={data.id}
                    updateTotal={updateTotal}
                    index={index}
                    product={data}
                    {...props}
                  />
                ))}
              </div>
            </div>
           
            </>
          ) : (
            <div className="cartCard">
            <div className="cartTitle">
              Your Cart is empty.
            </div>
            </div>
          )}
        </>
        <div className="EMItotalPirice">
           <div className="totalPrice"> sum total: <span className="rs">&#8377;</span>{total}</div>
           <div className="proceedbuyBtn" onClick={(e)=>{buyProcess(e,addCart)}}>Proceed to Buy</div>
           </div>
      </div>
    </React.Fragment>
  );
}

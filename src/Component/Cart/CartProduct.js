import React, { useState } from "react";

export default function CartProduct(props) {
  const { product, updateTotal,addCart,index,ticketsActions } = props;
  const increment = (price) => {
    const vs = [...addCart];
    vs[index] = { ...addCart[index], count: product.count+1 };
    updateTotal(price);
    ticketsActions.CountAndTotal(vs)
  };
  const decrement = (price) => {
    const vs = [...addCart];
    vs[index] = { ...addCart[index], count: product.count -1 };
    ticketsActions.CountAndTotal(vs)
    updateTotal(-price);
  };
   const removeFromCart=(productId)=>{
     let removedata= addCart.filter((data)=>data.id!==productId)
    ticketsActions.deleteProduct(removedata)
   }
  return (
    <React.Fragment>
      <div>
        <div>{product.title}</div>
        <div>{product.brand}</div>
        <div>
          price:{product.price} X {product.count}= {product.price * product.count}{" "}
        </div>
        <div>
          <button
            onClick={() => {
              increment(product.price);
            }}
          >
            +
          </button>
          {product.count}
          <button
            onClick={() =>  {product.count>1&&
              decrement(product.price);
            }}
          >
            -
          </button>
        </div>
        <div><button onClick={()=>{removeFromCart(product.id)}}>Delete</button></div>
        <div style={{ width: "100%", height: "20rem" }}>
          <img src={product.thumbnail} />
        </div>
        <div>
          <button>Buy</button>
        </div>
      </div>
    </React.Fragment>
  );
}

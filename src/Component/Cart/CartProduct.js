import React, { useState } from "react";

export default function CartProduct(props) {
  const { product, updateTotal,addCart,ticketsActions } = props;
  const [count, setCount] = useState(1);
  const increment = (price) => {
    setCount(count + 1);
    updateTotal(price);
  };
  const decrement = (price) => {
    setCount(count - 1);
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
          price:{product.price} X {count}= {product.price * count}{" "}
        </div>
        <div>
          <button
            onClick={() => {
              increment(product.price);
            }}
          >
            +
          </button>
          {count}
          <button
            onClick={() =>  {count>1&&
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

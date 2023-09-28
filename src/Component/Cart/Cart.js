import React, { useState ,useEffect} from "react";
import './Cart.css'
import CartProduct from "./CartProduct";

export default function Cart(props) {
  const { addCart,selectedProduct } = props;
  const [total, setTotal] = useState(0);
  useEffect(() => {
    let price = 0;
    addCart.forEach((s) => {
      price = price + s.price;
    });
    setTotal(price);
  }, [addCart]);
  const updateTotal = (num) => {
    setTotal(total + num);
  };


  return (
    <React.Fragment>
      <div>
        Cart
        <>
        <div><h3> sun total:{total}</h3></div>
      {addCart.map((data)=> <CartProduct key={data.id}updateTotal={updateTotal}  product={data}  {...props}/>)  }
        </>
      </div>
    </React.Fragment>
  );
}

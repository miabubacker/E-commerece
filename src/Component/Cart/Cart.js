import React, { useState ,useEffect} from "react";
import './Cart.css'
import CartProduct from "./CartProduct";

export default function Cart(props) {
  const { addCart} = props;
  const [total, setTotal] = useState(0);
  useEffect(() => {
    let price = 0;
    // addCart.forEach((s) => {
    //   price = price + s.price * s.count;
    // });
    // setTotal(price);
      let totalPrice= addCart.map((data)=>data.price*data.count).reduce((a,b)=>a+b,0)
setTotal(totalPrice)

  }, [total,addCart]);

  const updateTotal = (num) => {
    setTotal(total + num);
  };


  return (
    <React.Fragment>
      <div>
        Cart
        <>
        <div><h3> sun total:{total}</h3></div>
      {addCart.map((data,index)=> <CartProduct key={data.id}updateTotal={updateTotal} index={index}  product={data}  {...props}/>)  }
        </>
      </div>
    </React.Fragment>
  );
}

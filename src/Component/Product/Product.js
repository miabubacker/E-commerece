import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Product.css";
export default function Product(props) {
  const param = useParams();
  const { ticketsActions,DashboardProductData,addCart } = props;
  const selectProduct = DashboardProductData.filter(
    (data) => data.id === parseInt(param.id)
  );
  const addToCart=(product)=>{
    const cart=[...addCart]
    const removedublicate= cart.filter((data)=>parseInt(data.id)===parseInt( product.id))
     if(removedublicate.length){
      return
     }
     else{
        ticketsActions.addtoCart([...addCart,product])
     }
  }
  return (
    <React.Fragment>
      <div>Details</div>
      <>
        {selectProduct.map((data) => (
          <div key={data.id}>
            <div>{data.title}</div>
            <div>Brand:{data.brand}</div>
            <div> Price:{data.price}</div>
            <div style={{ width: "100%", height: "20rem" }}>
              <img src={data.thumbnail} />
            </div>
    <div>   <button>buy</button><button onClick={()=>addToCart(data)}>Add to cart</button></div>
          </div>
        ))}
      </>
    </React.Fragment>
  );
}

import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Product.css";
import StarRating from "../StarRating/StarRating";
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
          <div key={data.id} style={{padding:'1rem'}}>
            {/* <div>{data.title}</div>
            <div>Brand:{data.brand}</div>
            <div> Price:{data.price}</div> */}
            <div>
              <div style={{display:'flex'}}>
                <div style={{display:"flex",width:"50%"}}>
                <div style={{width:"50%"}}> <img src={data.thumbnail} /></div>
              <div style={{display:"flex", flexDirection:"column",width:"50%"}}>
                <div style={{width:"50%"}}><img src={data.images[0]}/></div>
                <div style={{width:"50%"}}><img src={data.images[1]}/></div>
                </div>
                </div>
                <div style={{width:"50%"}}>
                <div>{data.title}</div>
            <div>Brand:{data.brand}</div>
            <div> Price:{data.price}</div> 
            <div>{data.description}</div>
            <div>Discount {data.discountPercentage}</div>
            <div><StarRating data={data.rating}/></div>
    <div><button>buy</button><button onClick={()=>addToCart(data)}>Add to cart</button></div>
                </div>
              </div>
         
            </div>
            {/* <div>{data.description}</div> */}
            {/* <div style={{display:"grid"}}>{data.images.map((data)=><div><img src={data}/></div>)}</div> */}
            {/* <div>Discount {data.discountPercentage}</div>
            <div><StarRating data={data.rating}/></div>
    <div>   <button>buy</button><button onClick={()=>addToCart(data)}>Add to cart</button></div> */}
          </div>
        ))}
      </>
    </React.Fragment>
  );
}

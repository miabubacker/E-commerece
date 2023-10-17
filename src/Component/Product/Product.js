import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Product.scss";
import StarRating from "../StarRating/StarRating";
import ImgGalery from "./ImgGalery";
export default function Product(props) {
  const param = useParams();
  const { ticketsActions, DashboardProductData, addCart } = props;
  const selectProduct = DashboardProductData.filter(
    (data) => data.id === parseInt(param.id)
  );
  const addToCart = (product) => {
    const cart = [...addCart];
    const removedublicate = cart.find(
      (data) => parseInt(data.id) === parseInt(product.id)
    );
    if (removedublicate) {
      return;
    } else {
      ticketsActions.addtoCart([...addCart, product]);
    }
  };

  return (
    <React.Fragment>
        {selectProduct.map((data) => (
          <div key={data.id}  className="productDetailContainer">
              <div className='productMain'>
                {/* images */}
                <div className="imgContainer">
                <div  className="gallerymain">
                    <ImgGalery pics={data.images}/>
                  </div>
                  <div className="heroImg">
                    <img className="hero" src={data.thumbnail} />
                  </div>
                 
                </div>
                {/* images */}
                <div style={{width:'auto'}}>
                  <div className="headerTitle"> Title:{data.title}</div>
                  <div>Brand:{data.brand}</div>
                  <div> Price:{data.price}</div>
                  <div> Description:{data.description}</div>
                  <div>Discount {data.discountPercentage}</div>
                  <div>
                   Rating:<StarRating data={data.rating} />
                  </div>
                  <div className="buttonContainer">
                  <div className="buyButton">  <button >Buy Now</button></div>
                   <div className="cartButton"> <button onClick={() => addToCart(data)}>Add to Cart</button></div>
                  </div>
                </div>
              </div>
          </div>
        ))}
    </React.Fragment>
  );
}

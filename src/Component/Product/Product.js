import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Product.scss";
import StarRating from "../StarRating/StarRating";
import ImgGalery from "./ImgGalery";
import { useNavigate, Link } from "react-router-dom";
export default function Product(props) {
  const param = useParams();
  const { ticketsActions, DashboardProductData, addCart } = props;
  const navigate = useNavigate();
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
  const buyProcess = (e, selectProduct) => {
    e.stopPropagation();
    ticketsActions.Details(selectProduct);
    navigate(`/BuyerForm`);
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
                  <div className="headerTitle">{data.title}</div>
                  <div className="brandName"><span className="brand"> Brand:</span> {data.brand}</div>
                  <div className="brandName"> Price: <span className="brand">&#8377;</span> {data.price}</div>
                  <div className="brandName"> Description:<span  style={{fontSize:'1.2rem',fontWeight:"500"}}>{data.description}</span></div>
                  <div>Discount: <span className="brand">{data.discountPercentage}</span>%</div>
                  <div>
                   Rating:<StarRating data={data.rating} />
                  </div>
                  <div className="buttonContainer">
                  <div className="buyButton">  <button onClick={(e)=>{buyProcess(e,data)}} >Buy Now</button></div>
                   <div className="cartButton"> <button onClick={() => addToCart(data)}>Add to Cart</button></div>
                  </div>
                </div>
              </div>
          </div>
        ))}
    </React.Fragment>
  );
}

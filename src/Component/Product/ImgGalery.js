import React from 'react'
import "./Product.scss";
export default function ImgGalery(props) {
     const {pics}=props
  return (
    <>{pics.map((imgs)=><div  className='childImg'><img src={imgs}/></div>)}
    </>
  )
}

import React from 'react'
 import './StarRating.css'
export default function StarRating(props) {
     const{data}=props
   const starArray=[1,2,3,4,5]
  return (
  <React.Fragment>
          {[...Array(5)].map((star,index) => {   
        return (         
          <span key={index} className={index < parseInt(data) ? "on" : "off"}>&#9733;</span>        
        );
      })}

  </React.Fragment>
  )
}


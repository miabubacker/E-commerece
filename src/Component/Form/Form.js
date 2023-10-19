import React from 'react'
import './Form.scss'
export default function Form(props) {
const{addCart,details}=props
    // const handleMobileNumberChange = (e) => {
    //     const value = e.target.value;
    //     setMobileNumber(value);
    //     setIsValid(/^\d{10}$/.test(value)); // Validation using regex for a 10-digit mobile number
    //   };
  console.log(details)
  return (
<React.Fragment>
  <>
<div  className='formConatainer'>
<form   className='formMain'
// onSubmit={this.handleSubmit}
>
    <div style={{ height:"100%", alignItems:"center", display:'flex',justifyContent:"center",flexDirection:"column"}}>
        <div>
           <div>Full Name:</div>
          <input
            type="text"
            name="name"
            // value={this.state.name}
            // onChange={this.handleChange}
          />
        </div>
        <div>
        <div>  Email:</div>
          <input
            type="email"
            name="email"
            // value={this.state.email}
            // onChange={this.handleChange}
          />
        </div>
          <div>
        <div>Address:</div>
        <textarea/>
        </div>
        <button type="submit">Submit</button>
        </div>
      </form>
      <div>
        <h4>Cart list</h4>
        <>{addCart.map((product)=><>{product.name}{product.title}</>)}</>
      </div>
      <div>
        <h4>details</h4>
        <>{details.name}{details.title}</>
      </div>
      </div>
      </>
</React.Fragment>
  )
}

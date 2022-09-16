import React from 'react'
import Product_fetch from './Product_fetch';
import './Product.css'

function User_list(props) {
    const  {products}=props
    console.log('users list')
    //console.log(users)
    console.log(products)
    
    
  return (
    <div className='containi'>
    <div className='product_container'>
    
        {products && products.length > 0 && products.map((p)=>{
            return(
                <div key={p.id} className='product-wrapper'>
                    <img className='product-image' src={p.image} alt={p.phone} />
                    <h1>{p.lastName}</h1>
                    <h3>age : {p.age}</h3>
                    <h3>Sex : {p.gender}</h3>
                    <h3>Email : {p.email}</h3>
                    <h3>Phone : {p.phone}</h3>
                    <h3>DOB : {p.birtDate}</h3>
                    <h3>Bld Gp: {p.bloodGroup}</h3>
                    
                </div>
            )
        })}
      
    </div>
    </div>
  )
}

export default Product_fetch({type:'users'})(User_list);

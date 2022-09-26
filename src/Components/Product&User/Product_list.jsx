import React from 'react'
import Product_fetch from './Product_fetch';
import './Product.css'
import { useNavigate} from 'react-router-dom';

//import ProductDetail from './ProductDetail';

function Product_list(props) {
  const { products } = props
  console.log('checking pro')
  console.log(products)
  const nav=useNavigate()
  const navigateProduct = (e, productId) => {
    e.preventDefault()
    nav(`/products/${productId}`)

  }



  return (
    <div className='containi'>
      <div className='product_container'>


        {products && products.length > 0 && products.map((p) => {
          return (

            <div key={p.id} className='product-wrapper'>
              <a onClick={(e) => { navigateProduct(e, p.id) }}>
                <img className='product-image' src={p.images[0]} alt={p.description} />
                <h1>{p.title}</h1>
                <h3>Brand : {p.brand}</h3>
                <h3>Price : {p.price}</h3>
                <p>{p.description}</p>
              </a>
            </div>
          )
        })}

      </div>

    </div>
  )
}

export default Product_fetch({ type: "products" })(Product_list ,  { type: "products" } );

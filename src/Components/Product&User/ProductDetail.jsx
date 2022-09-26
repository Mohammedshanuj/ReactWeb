import React from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import '../Route _pages/Home.css'
import Product_fetch from './Product_fetch';
import './Producti.css'



function ProductDetail(props) {
  const { products } = props
  console.log("detailss");
  console.log(products);
  const param = useParams();
  const navigate = useNavigate();
  const location = useLocation()
  const query = new URLSearchParams(location.search)
  //console.log(query)
  const version = query.get('version')
  const is = query.has('sort')
  // console.log(location)

  const navigatetologin = (e) => {
    if (e.type === "click") {
      navigate("/login", { replace: true })

    }
  }
  return (
    <><div className='containi'>
      <div className='product_container'>


        {products && products.length > 0 && products.map((p) => {
          if (p.id == param.productId) {

            return (

              <div key={p.id} className='prowrap'>
                <img className='product-image' src={p.images[0]} alt={p.description} />
                <h1>{p.title}</h1>
                <h3>Brand: {p.brand}</h3>
                <h3>Price: {p.price}</h3>
                <p>{p.description}</p>
              </div>
            );
          }})}

      </div>

    </div><h1 className='txt'>{`ProductDetail  ${param.productId} version is ${version} available:${is}`}</h1></>
    //  {/* <span className='line'> <button  onClick={navigatetologin}>LOGIN</button></span> */}
    //   </div>
  )
}

export default Product_fetch({ type: 'products' })(ProductDetail);
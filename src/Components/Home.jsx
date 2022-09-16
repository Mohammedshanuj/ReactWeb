import React from 'react'
import { Link,Outlet } from 'react-router-dom'
import './Home.css'
function Home() {
  return (
    <div className='contain'>
     <h1 className='home' >welcome to my page  </h1>
     <div className='srn'>
     <div id="slideshow">
      <div className="slide-wrapper">

        {/* <!-- Define each of the slides
           and write the content --> */}
        <div className="slide">
          <h1  className="slide-number">
            We’re Different!
          </h1>
          <p className='ppp'>We create powerful digital 
          products engineered to drive customer
            growth for the world's leading Healthcare,
             Real Estate, E-Learning.</p>
        </div>
        <div className="slide">
          <h1  className="slide-number">
            We’re Passionate!
          </h1>
          <p className='ppp' >We craft exceptional solutions with aesthetic and interactive front
            end and powerful backend that makes you unbeatable! Let's work together to elevate your business!</p>
        </div>
        <div className="slide">
          <h1  className="slide-number">
            We’re Driven by Impact!
          </h1>
          <p className='ppp'>We’re always excited to meet smart and talented people. Say “hello,
            let’s together improve lives of millions”.</p>
        </div>

      </div>
    </div>
    </div>
    </div>
  )
}

export default Home

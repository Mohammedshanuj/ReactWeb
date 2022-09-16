import React from 'react'
import {Link, Outlet } from 'react-router-dom'
import './Home.css'
function About() {
  return (
    <div className='contain'>
      <div className='marg'>
       
        
        <h3>An online shop for genuine Health & Fitness Supplements</h3>
        <p>MALLU is Kerala’s  trusted and fastest growing nutrition and online supplement store with a wide range of products for health, wellness, fitness & bodybuilding, making them easy to purchase & accessible all over India. </p>
      </div>
      <div className='marg'>
        <h3>Our Speciality</h3>
        <ul>
          <li>You get all products delivered directly from us, without any middlemen or 3rd party sellers. Additionally, we are certified by all the brands or their official Indian supplement importers for authentic supplements. This ensures that you always get an authentic supplement as the entire supply chain is controlled by us.</li>
          <br />
          <li>Customer satisfaction and happiness is our number 1 priority, we deliver this by ensuring a great user experience, fast delivery, and high-quality products.</li>
          <br />
          <br />
          <li>Committed to providing you genuine products at price points that are fair and affordable by all. We often run a lot of freebie offers and give away products including samples, gym gloves, shakers, gym bags, t-shirts and more to keep customers satisfied.</li>
          <br />
          <li>A company run by young and enthusiastic people whose mission is to help India become a fitter and stronger nation and are committed to bringing quality products to support this cause.</li>
        </ul>
        
      </div>
      
    </div>


  )
}

export default About

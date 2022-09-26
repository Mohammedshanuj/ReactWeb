import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <footer class="footer">
      <div class="footer__addr">
        <h1 class="footer__logo">MALLU Nutrition</h1>

        <h2>Contact</h2>

        <address>
          MALLU Nutrition
          P.O A R Nagar ,Via Tiruranghadi
          Malappuram
          Kerala - 676305<br />

          <a class="footer__btn" href="mailto:example@gmail.com">Email Us</a>
        </address>
      </div>

      <ul class="footer__nav">
        <li class="nav__item">
          <h2 class="nav__title">Brands</h2>

          <ul class="nav__ul">
            <li>
              <a href="hi.com">Muscle Tech</a>
            </li>

            <li>
              <a href="hi.com">GNC</a>
            </li>

            <li>
              <a href="hi.com">Optimum Nutrition</a>
            </li>
            <li>
              <a href="hi.com">BSN</a>
            </li>
          </ul>
        </li>

        {/* <li class="nav__item nav__item--extra">
      <h2 class="nav__title">Technology</h2>
      
      <ul class="nav__ul nav__ul--extra">
        <li>
          <a href="hi.com">Hardware Design</a>
        </li>
        
        <li>
          <a href="hi.com">Software Design</a>
        </li>
        
        <li>
          <a href="hi.com">Digital Signage</a>
        </li>
        
        <li>
          <a href="#">Automation</a>
        </li>
        
        <li>
          <a href="#">Artificial Intelligence</a>
        </li>
        
        <li>
          <a href="#">IoT</a>
        </li>
      </ul>
    </li> */}

        <li class="nav__item">
          <h2 class="nav__title">Policy</h2>

          <ul class="nav__ul">
            <li>
              <a href="hi.com">Privacy Policy</a>
            </li>

            <li>
              <a href="hi.com">Terms of Use</a>
            </li>

            <li>
              <a href="hi.com">Sitemap</a>
            </li>
          </ul>
        </li>
        <li class="nav__item">
          <h2 class="nav__title">Connected</h2>

          <ul class="nav__ul">
            <li>
              <a href="hi.com">Whatsapp</a>
            </li>

            <li>
              <a href="hi.com">Instagram</a>
            </li>

            <li>
              <a href="hi.com">Telegram</a>
            </li>
          </ul>
        </li>
      </ul>

      <div class="legal">
        <p>&copy; 2022 MALLU Nutrition. All rights reserved.</p>

        <div class="legal__links">
          <span>Made with <span class="heart">♥  </span> MSJ</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
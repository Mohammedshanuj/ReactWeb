
import { NavLink } from 'react-router-dom';
import './Navbar.css'
import pic from './maluu.jpeg'
import cart from './trolley.png'
function Navbar() {

  return (
    <header className='head'>
      <div className="navbar">
        <div className='header'>
          <div className="left-container">
            <span>
              <h3 className='inlined'>  &nbsp;</h3>
            </span>
            <img className='image' src={pic} alt="logo" />
            <span>
              <h3 className='inlined'>  &nbsp; NUTRITION BRAND</h3>
            </span>
          </div>

          <div className="right-container">
            <div className="log-button">
            <span className='butspace'>
                <NavLink to="/">
                  <button className='button buttonc'>Home</button>
                    
                </NavLink>
              </span>
              <span className='butspace'>
                <NavLink to="/about">
                  <button className='button buttonc'>About</button>
                    
                </NavLink>
              </span>
              <span className='butspace'>
                <NavLink to="/login"> 
                <button className=' button buttonc'>Login/Register</button>
                </NavLink>
              </span>
              <span className='butspace'>
                <NavLink to="/Cart">
                  <button className='button buttonc'>
                    <img className='icon' src={cart} alt="cart"></img> Cart</button>
                </NavLink>
              </span>
              
            </div>
            {/* <div className="other-button">
              <NavLink to="/"> <button className="buttonc button">Home</button></NavLink>
              <NavLink to="/about"><button className="button">About</button></NavLink>
              <NavLink to="/contact"><button className="button">Contact</button></NavLink>
            </div> */}
          </div>
        </div>
      </div>
      {/* <div className='slide'>
        <h1>slide</h1>
      </div> */}
    </header>

  )
}
export default Navbar
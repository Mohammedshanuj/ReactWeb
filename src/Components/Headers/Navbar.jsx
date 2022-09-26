import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Login/Login.css'
import './Navbar.css'
import pic from './maluu.jpeg'
import cart from './trolley.png'
import Menu from '@mui/material/Menu';
// import Box from '@mui/material/Box';
// import Popper from '@mui/material/Popper';
//import { Popover } from 'bootstrap';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Popper } from '@mui/material';
import { makeStyles,StylesProvider } from '@mui/styles'
const useStyles = makeStyles({
  bord: {
    
    minWidth:0,
   
  }
})
function Navbar() {
  const isLoggedin=sessionStorage.getItem('isLogin')
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
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
                <button>{isLoggedin=='true'?'Login':'logout'}</button>
              </span>
              <span className='butspace'>

                <button className=' button buttonc' aria-describedby={id} onClick={handleClick}>Login/Register</button>
                {/* <Button aria-describedby={id} variant="contained" onClick={handleClick}>
        Login
      </Button> */}
     
                <Popover
                  id={id}
                  open={open}
                  anchorEl={anchorEl}
                  //onClose={handleClose}
                  anchorReference="anchorPosition"
                  anchorPosition={{ top: 60, left: 450 }}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  transformOrigin={{
                    vertical: 'center',
                    horizontal: 'left',
                  }}
                >
                  <div class="screen" style={{ maxHeight: "500px", position: "fixed" }}>
                    <div class="screen__content">

                      <form class="logint">
                        <h1 style={{ cursor: "pointer", paddingLeft: "10px" }} onClick={handleClose}>X</h1>
                        <div><h1 style={{ paddingLeft: "90px" }}>Login Here</h1></div>

                        <div class="login__field">
                          <i class="login__icon fas fa-user"></i>
                          <input type="text" class="login__input" placeholder="User name / Email" />
                        </div>
                        <div class="login__field">
                          <i class="login__icon fas fa-lock"></i>
                          <input type="password" class="login__input" placeholder="Password" />
                        </div>
                        <button class="button login__submit">
                          <span class="button__text ">Log In Now</span>
                          <i class="button__icon fas fa-chevron-right"></i>
                        </button>
                        <p className="forgot-password text-right">
                          I Haven't Account  <NavLink to="/register"> <h4 onClick={handleClose}>sign Up?</h4></NavLink>
                        </p>
                      </form>
                      <div class="social-login">
                        <h3 className='logtxt'>log in via</h3>

                      </div>
                    </div>
                    <div class="screen__background">
                      <span class="screen__background__shape screen__background__shape4"></span>
                      <span class="screen__background__shape screen__background__shape3"></span>
                      <span class="screen__background__shape screen__background__shape2"></span>
                      <span class="screen__background__shape screen__background__shape1"></span>
                    </div>
                  </div>
                </Popover>
               
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
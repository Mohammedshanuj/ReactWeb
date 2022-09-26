import React from 'react';
import './Login.css'
import { Link, NavLink, Route, useNavigate, Routes, Router, Outlet } from 'react-router-dom';
import '../Home.css'
//import Home from '../Home';
//import Guest from '../Guest';


function Login() {

 

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1)
    // ,{replace:true})
    alert("it will lost ur data")
  }
  return (
    <>
            <div class="screen">
              <div class="screen__content">
                <form class="logint">
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
                    I Haven't Account  <NavLink to="/register"> <h4>sign Up?</h4></NavLink>
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
  


      {/* <button onClick={goBack}>go back</button> */}


      {/* <Popover 
  anchorReference="anchorPosition"
  anchorPosition={{ top: 300, left: 600 }}
  anchorOrigin={{
    vertical: 'top',
    horizontal: 'left',
  }}
  transformOrigin={{
    vertical: 'center',
    horizontal: 'left',
  }}
>
  The content of the Popover.
</Popover> */}




      <Outlet />

    </>




  );
}

export default Login
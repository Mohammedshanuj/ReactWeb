import React, { Component } from 'react';
import {Navigate, Outlet, Route, Routes}  from 'react-router-dom';
import './App.css'
import './Components/Route _pages/Home.css'

import Home from './Components/Route _pages/Home';
import About from './Components/Route _pages/About';
import Contact from './Components/Route _pages/Contact';
import Error from './Components/Route _pages/Error';

import Navbar from './Components/Headers/Navbar';
import Loginn from './Components/Login/Loginn';
import Register from './Components/Register/Register';
import Products from './Components/Product&User/Products';
import Footer from './Components/Footer/Footer';
import Cart from './Components/Route _pages/Cart'
import ProductDetail from './Components/Product&User/ProductDetail';
import Slide from './Components/Headers/Slide';
import Guest from './Components/Route _pages/Guest';
import Users from './Components/Product&User/Users';
import Product_list from './Components/Product&User/Product_list';
import Userlist from './Components/Product&User/Userlist';
import { Input } from '@mui/material';
import FormInput from './FormInput';
import RegwithReducer from './Components/Register/RegwithReducer';
//import BasicPopover from "./Components/Pop";


const Profile = () => <h1>Profile</h1>;
<Outlet/>

class App extends Component {
  render() {
    return (      
       
        <div>
          <Navbar/>
          <Slide/>
            <Routes>
            
            <Route path="/products/:productId" element={<ProductDetail/>} />
            <Route path="/"  element={<Navigate to="/home" />} /> 
            <Route path="/should"  element={<Navigate to="/home" />} /> 
            <Route  path="/home">
              <Route index  element={<Home/> }></Route>
              <Route  
                path='who'
                element={<div className='contain'><h1 className='txt'>i am shanuj</h1></div> }/>
               
              <Route 
               path="where"
                element={<div className='contain'> <h1> i am from malappuram</h1></div> }/>
                </Route>
              

              <Route path='/about' element={<About/>}/>
             <Route path="/contact" element={<Contact/>}/>
            
             

             <Route  path="/login" element={<Loginn/>}>
              <Route  path="guest" element={<div className='contain'><h1>This is guest user</h1> </div>}/>
              </Route>
             
             <Route path="/Cart" element={<Cart/>}/>
             
             <Route path="/register" element={<Register/>}/>
             <Route path="/registerr" element={<RegwithReducer/>}/>
             
             <Route path="/brands" element={<div className='contain'><h1 className='txt'>Brandsssss</h1> </div>}/>
             <Route path="/products" element={<Product_list/>}/>
             <Route path="/users" element={<Userlist/>}/>
             <Route path="/input" element={<FormInput/>}/>
             
            <Route element={<Error/>}/>
           </Routes>
           <Footer/>
        </div> 
      
    );
  }
}
 
export default App;
// import {
//   BrowserRouter as Router,
//   NavLink,
//   Navigate,
//   Outlet,
//   Routes,
//   Route
// } from "react-router-dom";



// const Navbar = () => (
//   <>
//     <ul>
//       <li>
//         <NavLink to="" end>
//           {({ isActive }) => (
//             <p style={{ color: isActive ? "blue" : "green" }}>Home</p>
//           )}
//         </NavLink>
//       </li>
//       <li>
//         <NavLink to="profile">
//           {({ isActive }) => (
//             <p style={{ color: isActive ? "blue" : "green" }}>Profile</p>
//           )}
//         </NavLink>
//       </li>
//     </ul>
//     <Outlet />
//   </>
// );

// const Home = () => <h1>Home</h1>;
// const Profile = () => <h1>Profile</h1>;
// const Wallet = () => <h1>Wallet</h1>;
// const Users = () => <h1>Users</h1>;

// export default function App() {
//   return (
    
//       <div className="App">
//         <h1>Hello CodeSandbox</h1>
//         <h2>Start editing to see some magic happen!</h2>

//         <Routes>
//           <Route path="/dashboard" element={<Navbar />}>
//             <Route index element={<Home />} />
//             <Route path="profile" element={<Profile />} />
//             <Route path="wallets" element={<Wallet />} />
//             <Route path="users" element={<Users />} />
//           </Route>
//           <Route path="*" element={<Navigate to="dashboard" replace />} />
//         </Routes>
//       </div>
    
//   );
// }

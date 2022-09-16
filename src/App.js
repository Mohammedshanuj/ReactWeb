import React, { Component } from 'react';
import {Navigate, Outlet, Route, Routes}  from 'react-router-dom';
import './App.css'
import './Components/Home.css'

import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Error from './Components/Error';

import Navbar from './Components/Navbar';
import Login from './Components/Login';
import Register from './Components/Register';
import Products from './Components/Products';
import Footer from './Components/Footer';
import Cart from './Components/Cart'
import ProductDetail from './Components/ProductDetail';
import Slide from './Components/Slide';
import Guest from './Components/Guest';
import Users from './Components/Users';
import Product_list from './Components/Product_list';
import Userlist from './Components/Userlist';


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
            
             

             <Route  path="/login" element={<Login/>}>
              <Route  path="guest" element={<div className='contain'><h1>This is guest user</h1> </div>}/>
              </Route>
             
             <Route path="/Cart" element={<Cart/>}/>
             <Route path="/register" element={<Register/>}/>
             <Route path="/brands" element={<div className='contain'><h1 className='txt'>Brandsssss</h1> </div>}/>
             <Route path="/products" element={<Product_list/>}/>
             <Route path="/users" element={<Userlist/>}/>
             
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

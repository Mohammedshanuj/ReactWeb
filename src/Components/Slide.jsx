import React from 'react'
import { Outlet ,NavLink} from 'react-router-dom'
import './Slide.css'

function Slide() {
  return (
    <section>
      <div className='slidebody'>
        <div className='upper'>
        </div>
        <div className='lower'>
          <ul className='ul'>
            <NavLink to="/brands"><li className='inline'>
          Brands >
          </li></NavLink><Outlet/>
          <NavLink to='/products'><li className='inline'>
          Products-list >
          </li></NavLink>
          <NavLink to='/users'><li className='inline'>
          User-list >
          </li></NavLink>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Slide
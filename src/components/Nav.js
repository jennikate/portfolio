import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
// import creatureArray from '../styles/creatures'
import Menu from './pages/Menu'

const Nav = (pageName) => {

  return (
    <section>
      <nav className='nav-container'>
        <Link to='/' className='logo'>
          <p>JKW</p>
        </Link>
        {/* {creature && 
        <div className='creature flex-horizontal'>
          <Link to='/menu'>Menu</Link>
          <img src={creature} />
        </div>
        } */}
        <Menu pageName={pageName} />
      </nav>
    </section>
  )
}




export default Nav
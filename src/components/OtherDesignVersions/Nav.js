import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import creatureArray from '../styles/creatures'

const Nav = (pageName) => {

  const [creature, setCreature] = useState()

  const creatureIcon = () => {
    const obj = (creatureArray.filter(item => item.menuName === pageName.pageName))
    obj.length === 0 ? setCreature(null) : setCreature(obj[0].url)
  }

  useEffect(() => {
    creatureIcon()
  }, [])


  return (
    <section>
      <nav className='nav-container'>
        <Link to='/' className='logo'>
          <p>JKW</p>
        </Link>
        {creature && 
        <div className='creature flex-horizontal'>
          <Link to='/menu'>Menu</Link>
          <img src={creature} />
        </div>
        }
      </nav>
    </section>
  )
}




export default Nav
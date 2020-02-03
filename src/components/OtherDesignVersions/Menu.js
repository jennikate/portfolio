import React from 'react'
import { Link } from 'react-router-dom'
import creatureArray from '../../styles/creatures'
import Nav from '../Nav'

const Menu = () => {

  return (
    <section className='menu'>
    <Nav />
    <div className='flex-container'>
      <h1 className='page-title'>Choose your adventure</h1>
      {creatureArray.map((elem, i) => {
        return (
          <div className='menu-box flex-horizontal' key={i}>
            <div className='creature'>
              <img src={elem.url} />
            </div>
            <div className='card'>
            <div>
              <Link to={elem.menuLink}>{elem.menuName}</Link>
            </div>
            <div className='line'></div>
          </div>
          </div>
        )
      })}
      </div>
    </section>
  )
}

export default Menu
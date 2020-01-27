import React from 'react'
import { Link } from 'react-router-dom'
import creatureArray from '../../styles/creatures'

const Menu = () => {

  return (
    <section className='container'>

      {creatureArray.map((elem, i) => {
        return (
          <div className='menu-box flex-horizontal' key={i}>
            <div className='creature'>
              <img src={elem.url} />
            </div>
            <div className='card'>
              <Link to={elem.menuLink}>{elem.menuName}</Link>
            </div>
            <div className='line'></div>
          </div>
        )
      })}


      





    </section>
  )
}

export default Menu
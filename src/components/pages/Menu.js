import React from 'react'
import { Link } from 'react-router-dom'
import creatureArray from '../../styles/creatures'

const Menu = (props) => {

  const getCurrent = (name) => {
    console.log(name)
    return props.pageName.pageName === name ? 'open' : 'closed';
  }

  return (
    <section className='menu'>
      <div className='flex-container'>
        {creatureArray.map((elem, i) => {
          return (
            <div className='menu-box flex-horizontal' key={i}>
              {getCurrent(elem.menuName) === 'open' ?
                <div className='creature open'>
                  <img src={elem.url} alt={elem.name} />
                </div>
                :
                <div className='creature'>
                  <img src={elem.url} alt={elem.name} />
                </div>
              }
              <Link to={elem.menuLink}>{elem.menuName}</Link>
            </div>
          )
        })}
      </div>
    </section >
  )
}

export default Menu
import React from 'react'
import { iconList } from '../../styles/icons'

const TechStack = () => {

  return (
    <section className='content'>
      <div className='flex-wrap flex-horizontal'>
        {iconList.map((ele, i) => {
          return (
            <div className='card' key={i}>
              {ele.icon}
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default TechStack

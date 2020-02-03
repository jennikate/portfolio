import React from 'react'
import { HashLink } from 'react-router-hash-link'
import ScrollableAnchor from 'react-scrollable-anchor'
import { IconReact, IconJs, IconCSS, IconHTML, IconDjango, IconPython, IconRight, IconLink } from '../../styles/icons'

//hard coded for the moment, feedback from Merve to reduce things shown here.
//will review this version with people before finalising code

const TechStack = () => {

  return (
    <div className='flex-container tech-stack content card'>
      <ul>
        <li><h3>Tech Skills</h3></li>
        <li className='flex-horizontal'><IconReact />React</li>
        <li className='flex-horizontal'><IconJs />JavaScript ES6</li>
        <li className='flex-horizontal'><IconCSS />CSS/SCSS</li>
        <li className='flex-horizontal'><IconHTML />HTML</li>
        <li className='flex-horizontal'><IconDjango />Django</li>
        <li className='flex-horizontal'><IconPython />Python 3</li>
      </ul>
    <ul>
      <li><h3>Soft Skills</h3></li>
      <li className='flex-horizontal'><IconRight />Agile Practices</li>
      <li className='flex-horizontal'><IconRight />Teamwork</li>
      <li className='flex-horizontal'><IconRight />Time Management</li>
      <li className='flex-horizontal'><IconRight />Prioritisation</li>
      <li className='flex-horizontal'><IconRight />Flow diagram</li>
      <li className='flex-horizontal'><IconRight />ERD</li>
    </ul>
    <ul>
      <li><h3>Portfolio</h3></li>
      <li className='flex-horizontal'><IconLink /><HashLink to='/projects#take_your_medicine'>Take Your Medicine</HashLink></li>
      <li className='flex-horizontal'><IconLink /><HashLink to='/projects#giftlist'>GiftList</HashLink></li>
      <li className='flex-horizontal'><IconLink /><HashLink to='/projects#make_it_count'>Make It Count</HashLink></li>
      <li className='flex-horizontal'><IconLink /><HashLink to='/projects#elf_adventures'>Elf Adventures</HashLink></li>
      <li className='flex-horizontal'><IconLink /><a href='/projects#cocktails'>Cocktails</a></li>
      {/* <li className='flex-horizontal'><IconRight />ERD</li> */}
    </ul>
  </div>
  )
}

export default TechStack


{/* <div className='flex-wrap flex-horizontal'>
        {iconList.map((ele, i) => {
          return (
            <div className='card' key={i}>
              {ele.icon}
            </div>
          )
        })}
      </div> */}
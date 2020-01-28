import React, { useState } from 'react'
import Nav from '../Nav'
import { IconLinkedIn, IconEmail, IconGithubStatic } from '../../styles/icons'

const Contact = () => {

  return (
    <section className='contact'>
      <Nav pageName='contact' />
      <div className='container'>
        <div className='content flex-container'>
          <div className='headshot'>
            <img src='https://github.com/jennikate/portfolio/blob/master/src/styles/images/jkw-picture.jpg?raw=true' alt='JenniKate Wallace portrait' />
          </div>
          <ul>
            <li><p className='flex-horizontal'><IconEmail /> jennikate@gmail.com</p></li>
            <li><a href='https://www.linkedin.com/in/jennikate/' target='_blank' className='flex-horizontal'><IconLinkedIn /> linkedin.com/in/jennikate</a></li>
            <li><a href='https://github.com/jennikate' target='_blank' className='flex-horizontal'><IconGithubStatic /> github.com/jennikate</a></li>
          </ul>
          <p className='signature'>~ JenniKate</p>
        </div>
      </div>
    </section>
  )
}

export default Contact
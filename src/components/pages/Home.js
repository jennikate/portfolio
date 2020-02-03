import React from 'react'
import { Link } from 'react-router-dom'
import About from '../pages/About'

const Home = () => {

  console.log('home')
  return (
    <section className='home container'>
      <h1>JenniKate Wallace</h1>
      <div className='flex-container'>
        <ul className='creature-container'>
          <li>Developer
          <span className='creature two'></span>
            <span className='creature four'></span>
          </li>
          <li>Dungeons &amp; Dragons Player
            <span className='creature one'></span>
            <span className='creature five'></span>
          </li>
          <li>Photographer
            <span className='creature three'></span>
            </li>
        </ul>
      </div>
      <div className='tagline'>
        <p>Once a Product Manager, now a Developer, ready to take on my next front-end or full-stack role!</p>
      </div>
      <div className='blurb'>
        <p>My night time adventures take place in fantasy worlds, with fantasy creatures, and a bunch of friends playing Dungeons &amp; Dragons!</p>
        <p>You can see some of my travel photography on <a href='https://www.flickr.com/photos/jennikate/' target='_blank' rel='noopener noreferrer'>Flickr</a> </p>
      </div>
      <Link to='/about' className='arrow'></Link>
    </section>
  )
}

export default Home
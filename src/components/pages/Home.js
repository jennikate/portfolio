import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

  console.log('home')
  return (
    <section className='home container'>
      <h1>JenniKate Wallace</h1>
      <div className='flex-container'>
        <ul className=''>
          <li>Developer</li>
          <li>Dungeons &amp; Dragons Player</li>
          <li>Photographer</li>
        </ul>
      </div>
      <div className='tagline'>
        <p>Once a Product Manager, now a Developer, ready to take on my next FrontEnd or FullStack role!</p>
      </div>
      <div className='blurb'>
        <p>My night time adventures take place in fantasy worlds, with fantasy creatures, and a bunch of friends playing Dungeons &amp; Dragons!</p>
        <p>You can see some of my travel photography on <a href='https://www.flickr.com/photos/jennikate/' target='_blank' rel='noopener noreferrer'>Flickr</a> </p>
      </div>
      <Link to='/menu' className='arrow'></Link>
    </section>
  )
}

export default Home
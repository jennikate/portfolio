import React from 'react'
import { Link } from 'react-router-dom'
import TechStack from '../Elements/TechStack'
import SkillStack from '../Elements/SkillStack'
import Nav from '../Nav'

const About = () => {

  return (
    <section className='about'>
      <Nav pageName='about' />
      <div className='container'>
        <div className='content content-block'>
          <h1>Hi, I&apos;m JenniKate Wallace</h1>
          <p className='tagline'>or Jenni, or Jen, but rarely Jennifer!</p>
          <div className='blurb'>
            <p>For many years I was a senior product manager, working with engineers, prioritising features they built, making the tough decisions, and pestering them to let me into their world.</p>
            <p>I say I&apos;m happiest when focused on solving problems to make people&apos;s lives easier and stress free, which is true, but another part of me craves efficient and logical delivery. I&apos;m always looking to prioritise and plan before jumping into creation.</p>
            <p>My motivation to become a developer started with my need to learn something new and quickly turned into my passion. I&apos;m excited to work with passionate people and continue to grow as a junior developer.</p>
            <p>Interested to know more? <Link to='/contact'>Get in touch.</Link></p>
            <p className='signature'>~ JenniKate</p>
          </div>
        </div>
        <TechStack />
        <SkillStack />
      </div>
    </section>
  )
}

export default About
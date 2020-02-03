import React from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'
import { configureAnchors } from 'react-scrollable-anchor'
import { IconGithub, IconLink } from '../../styles/icons'
import ExampleData from '../Elements/ExampleData'
import Nav from '../Nav'

const Examples = (props) => {

  configureAnchors({offset: -60, scrollDuration: 200})

  return (
    <section className='examples'>
      <Nav pageName='examples' />
        {ExampleData.map((ele, i) => {
          return (
            <div className='content-container' id={ele.title} key={i}>
              <ScrollableAnchor id={ele.id}>
              <div>
                <div className='tab-content'>
                  <div className='flex-container'>
                    <div className='content title-block flex-standard'>
                      <h2>{ele.title}</h2>
                      <p>{ele.group}</p>
                      <div className='icon-link icons'>
                        <a href={ele.github} target='_blank' rel='noopener noreferrer'><IconGithub /></a>
                        <a href={ele.url} target='_blank' rel='noopener noreferrer'><IconLink /></a>
                      </div>
                    </div>

                    <div className='content image-block flex-container'>
                      <img className='project-example' src={ele.image} alt={ele.imageAlt} />
                    </div>

                    <div className='content blurb'>
                      <p className='app-info'>{ele.appInfo}</p>
                      <ul className='flex-horizontal icons'>
                        {ele.devIcons.map((eleIcon, i) => {
                          return (
                            <li key={i}>{eleIcon}</li>
                          )
                        })}
                      </ul>
                      <ul className='flex-horizontal'>
                        {ele.stack.map((eleStack, i) => {
                          return (
                            <li key={i}>{eleStack}</li>
                          )
                        })}
                      </ul>
                      <p>{ele.para1}</p>
                      <p>{ele.para2}</p>
                    </div>
                  </div>
                </div>
              </div>
              </ScrollableAnchor>
            </div>
          )
        })}
    </section>
  )
}

export default Examples
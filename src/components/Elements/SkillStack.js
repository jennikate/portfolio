import React from 'react'

const SkillStack = () => {

  const otherSkills = [
    'Node',
    'Express',
    'PostgreSQL',
    'MongDB',
    'Mocha/Chai',
    'Material UI',
    'Bulma',
    'Use case',
    'Accessibility',
    'Scrum',
    'Kanban',
    'Process',
    'Deadline planning',
    'GitHub',
    'Heroku'
  ]

  return (
    <section className='content'>
      <div>
        <h3>Additional skills include: </h3>
        <div className='flex-wrap' >
          {otherSkills.map((ele, i) => {
            return (
              <ul className='flex-horizontal' key={i}>
                <li>{ele}</li>
              </ul>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default SkillStack

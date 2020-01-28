import React from 'react'

const SkillStack = () => {

  const otherSkills = [
    'ERD',
    'use case',
    'flow diagramming',
    'Accessibility',
    'Teamwork',
    'Scrum',
    'Agile/Kanban',
    'Process',
    'Time management',
    'Prioritisation',
    'Deadline planning'
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

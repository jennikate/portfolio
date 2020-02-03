/* eslint-disable react/jsx-key */
import React from 'react'
import { IconReact, IconDjango, IconPython, IconNode, IconMongo, IconSass, IconPostgres, IconJs, IconHTML, IconCSS, IconExpress } from '../../styles/icons'

const ExampleData = [
  {
    id: 'take_your_medicine',
    title: 'Take your medicine',
    group: 'A group project, built over one week',
    github: 'https://github.com/jennikate/remember-your-meds',
    url: 'http://take-your-medicine.herokuapp.com/#/',
    image: 'https://raw.githubusercontent.com/jennikate/remember-your-meds/master/readme-images/screenshot.png',
    imageAlt: 'Take Your Medicine image',
    appInfo: 'Take Your Medicine is an app where you can add details of your prescriptions and setup reminders to take it at specific times. You can also opt-in to being sent a reminder to order a new prescription and/or make a doctors appointment at appropriate times.',
    para1: 'With my partner we built a CRUD process allowing users to create prescriptions, I focused on the activation/deactiation of reminders to take medication, book appointments and reorder, as well as the code ready to send those reminders to a scheduluer for email sending.',
    para2: 'Includes code ready to send reminders to Twilio, user registration, profile and medication management.',
    devIcons: [<IconReact />, <IconDjango />, <IconPython />, <IconPostgres /> ],
    stack: ['full stack', 'mobile first', 'RESTful API'],
    creature: 'elf'
  },
  {
    id: 'giftlist',
    title: 'GiftList',
    group: 'A group project, built over one week',
    github: 'https://github.com/jennikate/gift-list',
    url: 'https://giftlist.herokuapp.com/',
    image: 'https://raw.githubusercontent.com/georgmp/gift-list/development/readme-images/logo-noshadow.gif',
    imageAlt: 'GiftList logo',
    appInfo: 'GiftList is an app where you can browse goods from Etsy, create a giftlist for yourself or someone else with the option to add event information, items from our app, notes/urls from anywhere. You can also view suggested gifts based on your choices.',
    para1: 'I designed data structure and flow, created parts of our backend and our API, consumed Etsy\'s API, and CRUD to manage GiftLists and save items.',
    para2: 'Includes suggestion creation components based on categories selected, user registration, and category selector.',
    devIcons: [<IconNode />,<IconExpress />, <IconMongo />, <IconReact />, <IconSass />],
    stack: ['full stack', 'RESTful API', 'React Hooks']
  },
  {
    id: 'make_it_count',
    title: 'Make It Count',
    group: 'A pair project, built over two days',
    github: 'https://github.com/jennikate/make-it-count',
    url: 'https://jennikate.github.io/make-it-count/',
    image: 'https://raw.githubusercontent.com/jennikate/make-it-count/master/src/images/for-readme/screenshot2.png',
    imageAlt: 'Make It Count image of page',
    appInfo: 'A website designed to allow you to enter a UK postcode to find your constituency and see which candidates are standing for the general election (2019), with the aim of helping voters to understand their options. You can also see which party won the last general election (in 2017) and voter numbers.',
    para1: 'Pair-programming we consumed and collated data via API from Postcodes.io, Democracy Club, and data.parliament.uk',
    para2: 'We built a form to accept a postcode and return the combined data set from Democracy Club APIs and data.parliament.uk APIs to show user information on their constituency. I also added a graph built in CSS to display previous election results.',
    devIcons: [<IconReact />, <IconCSS />],
    stack: ['front end', 'data collation']
  },
  {
    id: 'elf_adventures',
    title: 'Elf Adventures',
    group: 'A solo project built over a week',
    github: 'https://github.com/jennikate/Elf-Adventures',
    url: 'https://jennikate.github.io/Elf-Adventures/',
    image: 'https://github.com/jennikate/project-1/raw/master/reademe-assets/screenshots/screenshot3.png',
    imageAlt: 'Image of Elf Adventures game',
    appInfo: 'Elf Adventures is a browser based maze style game. Move your elf through the maze collecting the treasure and avoiding the dragons. Along the way you may find weapons which will allow you to kill the dragons... until the weapons break!',
    para1: 'Using a grid design, I built a browser based game that handles player, enemy, kill/non kill conditions and collisions.',
    para2: 'The focus was on JavaScript, HTML, and CSS, with additional score tracking/reset and music.',
    devIcons: [<IconJs />, <IconHTML />, <IconCSS />],
    stack: ['first JavaScript app', 'browser game']
  },
  {
    id: 'cocktails',
    title: 'Cocktails',
    group: 'A solo project built over a weekend',
    github: 'https://github.com/jennikate/project-x',
    url: 'https://jennikate.github.io/project-x/',
    image: 'https://github.com/jennikate/project-x/raw/github-pages/src/images/for-readme/Screenshot-4.png?raw=true',
    imageAlt: 'Image of Cocktails website',
    appInfo: 'Cocktails is a database of... cocktails! A variety of drinks that you can find by category, ingredient, or the type of glass it uses.',
    para1: 'Consuming an API (development version so not all data available), I return structured pages to allow users to browse or search.',
    para2: 'I\'ve styled the site to fit the subject matter, and added animation to bring pages to life.',
    devIcons: [<IconJs />, <IconHTML />, <IconSass />],
    stack: ['API consumption', 'Front End']
  }
]

export default ExampleData
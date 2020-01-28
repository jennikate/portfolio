import React, { useEffect } from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import { loadCSS } from 'fg-loadcss'
//my styles
import './styles/main.scss'
//my pages
import Home from './components/pages/Home'
import Examples from './components/pages/Examples'
import About from './components/pages/About'
import Menu from './components/pages/Menu'
import Contact from './components/pages/Contact'

const App = () => {

  useEffect(() => {
    loadCSS('https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css')
  }, [])

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/menu' component={Menu} />
        <Route exact path='/projects' component={Examples} />
        <Route exact path='/about' component={About} />
        <Route exact path='/contact' component={Contact} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;

//<BrowserRouter basename={process.env.PUBLIC_URL}> makes it work for github pages
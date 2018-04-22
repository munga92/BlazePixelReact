import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Home from './pages/home.js'
import About from './pages/about.js'

import logo from './assets/img/logo.png'

class RouterSpark extends Component {
  render () {
    return (
      <Router>
        <div>
          <header className='main_h sticky'>
            <div className='row'>
              <a className='logo' href='#'>
                <img src={logo} />
              </a>
              <div className='mobile-toggle'>
                <span />
                <span />
                <span />
              </div>
              <nav>
                <ul>
                  <li><Link to='/'>Home</Link></li>
                  <li><Link to='/about'>About</Link></li>
                </ul>
              </nav>
            </div>
          </header>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
        </div>
      </Router>
    )
  }
}

export default RouterSpark

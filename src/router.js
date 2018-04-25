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
    var navbar =  ''
    // var navbar =  (<a className='navbar-item' href='https://bulma.io'>
    //   <img src='https://bulma.io/images/bulma-logo.png'
    //     alt='Bulma: a modern CSS framework based on Flexbox'
    //     width='112' height='28' />
    // </a>)
    return (
      <Router>
        <div>
          <nav className='navbar is-transparent'>
            <div className='navbar-brand'>
              {navbar}
              <div className='navbar-burger burger'
                data-target='navbarExampleTransparentExample'>
                <span />
                <span />
                <span />
              </div>
            </div>

            <div id='navbarExampleTransparentExample' className='navbar-menu'>
              <div className='navbar-start'>
                <Link to='/' className='navbar-item'>Home</Link>
                <Link to='/about' className='navbar-item'>About</Link>
              </div>

              <div className='navbar-end'>
                <div className='navbar-item'>
                  <div className='field is-grouped'>
                  </div>
                </div>
              </div>
            </div>
          </nav>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
        </div>
      </Router>
    )
  }
}

export default RouterSpark

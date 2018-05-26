import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Home from './pages/home.js'
import About from './pages/about.js'

import logo from './assets/img/logo.png'
import logoBP from './assets/img/logoBlazePixel.png'

class RouterSpark extends Component {
  render () {
    var navbar =  ''
    // var navbar =  (<a className='navbar-item' href='https://bulma.io'>
    //   <img src='https://bulma.io/images/bulma-logo.png'
    //     alt='Bulma: a modern CSS framework based on Flexbox'
    //     width='112' height='28' />
    // </a>)

    // <Link to='/about' className='navbar-item'>About</Link>

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
                <Link to='/' className='navbar-item'>
                  <img src={logo} alt='World Talent Consulting' />
                </Link>
              </div>

              <div className='navbar-end'>
                <Link to='/' className='navbar-item'>
                 Inicio
                </Link>
                <Link to='#' className='navbar-item'>
                 Nosotros
                </Link>
                <Link to='#' className='navbar-item'>
                 Servicios
                </Link>
                <Link to='#' className='navbar-item'>
                 Contáctanos
                </Link>
                <div className='navbar-item'>
                  <div className='field is-grouped'>
                  </div>
                </div>
              </div>
            </div>
          </nav>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <footer className='footer'>
            <div className='container'>
              <div className='content has-text-centered'>
                <p>
                  <strong>Powered by</strong> <a href='http://blazepxel.com/' target='_blanck'>
                  Blaze Pixel.
                    <img src={logoBP} alt='Blaze Pixel' style={{width: 50, height: 50}} />
                  </a>
                </p>
              </div>
            </div>
          </footer>
        </div>
      </Router>
    )
  }
}

export default RouterSpark

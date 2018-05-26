import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Home from './pages/home.js'

import logo from './assets/img/logo.png'
import logoBlaze from './assets/img/icon-blaze.png'
import logoBP from './assets/img/logoBlazePixel.png'
import $ from 'jquery'

class RouterSpark extends Component {
  constructor () {
    super()
    this.state = {
      classHeader: 'is-transparent',
      showImg: false
    }
    this.handleScroll = this.handleScroll.bind(this)
  }
  componentDidMount () {
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll (e) {
    if ($(window).scrollTop() > 100) {
      this.setState({classHeader: 'is-black', showImg: true})
    } else {
      this.setState({classHeader: 'is-transparent', showImg: false})
    }
  }

  render () {
    var {showImg} = this.state
    var navbar = ''
    if (showImg) {
      navbar = (<Link to='/' className='navbar-item-logo'>
        <img src={logoBlaze} alt='World Talent Consulting' />
      </Link>)
    } else {
      navbar = (<Link to='/' className=''>
        <img style={{width: 200, height: 80}} src={logo} alt='World Talent Consulting' />
      </Link>)
    }

    return (
      <Router>
        <div>
          <nav className={'navbar ' + this.state.classHeader}>
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

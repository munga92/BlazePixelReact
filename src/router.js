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
      showImg: false,
      showMenu: false
    }
    this.handleScroll = this.handleScroll.bind(this)
  }
  componentDidMount () {
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll (e) {
    if ($(window).scrollTop() > 100) {
      this.setState({classHeader: 'header-black', showImg: true})
    } else {
      this.setState({classHeader: 'is-transparent', showImg: false})
    }
  }

  handleClickMenuBurguer () {
    this.setState((prevState) => {
      return {
        showMenu: !prevState.showMenu
      }
    })
  }

  render () {
    var {showImg} = this.state
    var navbar = ''
    if (showImg) {
      navbar = (<img src={logoBlaze} alt='World Talent Consulting' width="38" height="50" />)
    } else {
      navbar = (
        <img src={logo} alt='Blaze Pixel' width="150" height="50" />)
    }

    return (
      <Router>
        <div>
          <nav className={'navbar ' + this.state.classHeader}>
            <div className='navbar-brand'>
              <a class="navbar-item">
                {navbar}
              </a>
              <div className={'navbar-burger burger ' + (this.state.showMenu ? 'is-active' : '')}
                onClick={() => this.handleClickMenuBurguer()}
                data-target='navbarExampleTransparentExample'>
                <span />
                <span />
                <span />
              </div>
            </div>

            <div id='navbarExampleTransparentExample' className={'navbar-menu' + (this.state.showMenu ? 'is-active' : '')} >
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
          <footer className='footer is-black'>
            <div className='container'>
              <div className='content has-text-centered'>
                <p className='is-font-white'>
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

import React, { Component } from 'react'

import Logo from '../../assets/logo.png'
import LogoWhite from '../../assets/logo_white.png'
import './Navbar.css'


class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showStaticNavbar: false
    }
  }

  handleScroll = () => {
    if (this.getScrollPosition() > 60) {
      this.setState({ showStaticNavbar: true })
    } else {
      this.setState({ showStaticNavbar: false })
    }
  }

  getScrollPosition() {
    return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  renderTransparentNavbar() {
    return (
      <div className="navbar-inner flex items-center justify-between">
        <img src={LogoWhite} alt="Logo White" style={{ height: 44 }}/>
        <a className="btn btn-white" href="">Sign Up</a>
      </div>
    )
  }

  renderWhiteNavbar() {
    return (
      <div className="navbar-inner flex items-center justify-between">
        <img src={Logo} alt="Logo White" style={{ height: 44 }}/>
        <a className="btn btn-orange" href="">Sign Up</a>
      </div>
    )
  }

  render() {
    return [
      <nav key="transparent" className={`navbar-top ${this.state.showStaticNavbar && 'hidden'}`}>
        <div className="container ph2">
          {this.renderTransparentNavbar()}
        </div>
      </nav>,
      <nav key="white" className={`navbar-fixed-top ${this.state.showStaticNavbar && 'visible'}`}>
        <div className="container ph2">
          {this.renderWhiteNavbar()}
        </div>
      </nav>
    ]
  }
}

export default Navbar

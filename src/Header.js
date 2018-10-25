import React, { Component } from 'react'
import logo from './code-pub-klarna.png'

class Header extends Component {
  render() {
    return (
      <header style={{ marginBottom: 20 }}>
        <img src={logo} style={{ width: '100%' }} alt="logo" />
      </header>
    )
  }
}

export default Header

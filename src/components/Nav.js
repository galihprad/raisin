import React, { Component } from 'react'
import { Dropdown } from 'antd'
import Menu from './Menu.js'

class Nav extends Component {
  state = {
    navCollapsed: true,
  }

  render() {
    const { navCollapsed } = this.state

    return (
      <nav
        className="md-container navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-between"
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 10,
        }}
      >
        <a className="navbar-brand" href="#">
          Raisin
        </a>
        <Dropdown overlay={Menu} trigger={['click']}>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
        </Dropdown>
        <div
          className="collapse navbar-collapse d-md-flex justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav raisin-nav">
            <a className="nav-item nav-link active raisin-active" href="#">
              ABOUT US <span className="sr-only">(current)</span>
            </a>
            <a className="nav-item nav-link" href="#">
              PORTOFOLIO
            </a>
            <a className="nav-item nav-link" href="#">
              CONTACT US
            </a>
          </div>
        </div>
      </nav>
    )
  }
}

export default Nav

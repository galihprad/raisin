import React from 'react'
import { Link } from 'gatsby'

const Navbar = () => (
  <nav className="navbar">
    <input className="menu-btn" type="checkbox" id="menu-btn" />
    <label className="menu-icon" htmlFor="menu-btn">
      <span className="navicon" />
    </label>
    <ol className="raisin-nav">
      <li
        style={{
          margin: `auto 12px`,
        }}
      >
        <Link to="#">ABOUT US</Link>
      </li>
      <li
        style={{
          margin: `auto 12px`,
        }}
      >
        <Link to="/">PORTOFOLIO</Link>
      </li>
      <li
        style={{
          margin: `auto 12px`,
        }}
      >
        <Link to="/">CONTACT US</Link>
      </li>
    </ol>
  </nav>
)

export default Navbar

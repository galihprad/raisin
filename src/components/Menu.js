import React from 'react'
import { Link } from 'gatsby'
import 'bootstrap/dist/css/bootstrap.min.css'

const Menu = (
  <div className="rasin-menu h-100 d-flex flex-column justify-content-center align-items-center">
    <Link to="#" className="my-3 raisin-link">
      ABOUT US
    </Link>

    <Link to="#" className="my-3 raisin-link">
      PORTOFOLIO
    </Link>

    <Link to="#" className="my-3 raisin-link">
      CONTACT US
    </Link>
  </div>
)

export default Menu

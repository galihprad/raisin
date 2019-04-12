import React from 'react'
import { FaGithub, FaDribbble, FaBehance } from 'react-icons/fa'
import { Row } from 'antd'
import 'antd/dist/antd.css'
import './layout.css'

const Footer = () => (
  <div
    style={{
      background: `linear-gradient(180deg, #D44575 0%, #E96479 48.85%)`,
      marginTop: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        height: 'auto',
      }}
    >
      <h1 style={{ margin: 0, color: `white` }}>
        <Row type="flex" justify="center">
          <h4
            style={{
              color: `white`,
              marginTop: '40px',
              marginBottom: '10px',
              fontFamily: 'Montserrat',
              fontWeight: '700',
            }}
          >
            Find Us On
          </h4>
        </Row>

        <Row type="flex" justify="center">
          <span style={{ margin: '20px' }}>
            <FaGithub />
          </span>
          <span style={{ margin: '20px' }}>
            <FaBehance />
          </span>
          <span style={{ margin: '20px' }}>
            <FaDribbble />
          </span>
        </Row>
        <hr
          style={{
            backgroundImage:
              'linear-gradient(90deg, rgba(255, 255, 255, 0.24), #FFFFFF 100%)',
            marginTop: '0.5em',
            marginBottom: '0.5em',
            marginLeft: 'auto',
            marginRight: 'auto',
            height: '1px',
            border: 0,
          }}
        />
        <Row type="flex" justify="center">
          <h6
            style={{
              color: `white`,
              marginTop: '20px',
              marginBottom: '0',
              fontFamily: 'Quicksand',
            }}
          >
            2018. Made with love in Yogyakarta. @raisin
          </h6>
        </Row>
      </h1>
    </div>
  </div>
)

export default Footer

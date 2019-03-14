import React, { Component } from 'react'
import { Carousel, Row, Avatar } from 'antd'
import './layout.css'
import Buble from '../images/buble.png'

class Testimoni extends Component {
  render() {
    return (
      <div
        style={{
          marginTop: '50px',
          marginBottom: '25px',
          paddingBottom: '20px',
          fontFamily: 'Montserrat',
          backgroundSize: '100%',
          backgroundRepeat: 'no-repeat',
          backgroundImage: `url(${Buble})`,
        }}
      >
        <Row type="flex" justify="end">
          <p
            style={{
              fontSize: '150px',
              color: '#F7F6FE',
              marginBottom: '-110px',
              fontWeight: '700',
            }}
          >
            04
          </p>
        </Row>
        <Row type="flex" justify="center">
          <h3
            style={{
              color: '#E96479',
              marginBottom: '50px',
              fontWeight: '700',
              letterSpacing: '3px',
            }}
          >
            TESTIMONIAL
          </h3>
        </Row>
        <Carousel autoplay>
          <div>
            <Row type="flex" justify="center">
              <div
                style={{
                  width: '500px',
                  height: '300px',
                  backgroundColor: '#F5FBFB',
                  lineHeight: 'normal',
                  overflow: 'visible',
                }}
              >
                <p style={{ height: '200px', marginTop: '50px' }}>
                  simply dummy text of the printing and typesetting
                </p>
              </div>
            </Row>
            <Row type="flex" justify="center">
              <Avatar size={80} style={{ marginTop: '-40px' }} icon="user" />
            </Row>
          </div>
          <div>
            <Row type="flex" justify="center">
              <div
                style={{
                  width: '500px',
                  height: '300px',
                  backgroundColor: '#F5FBFB',
                  lineHeight: 'normal',
                  overflow: 'visible',
                }}
              >
                <p style={{ height: '200px', marginTop: '50px' }}>
                  simply dummy text of the printing and typesetting
                </p>
              </div>
            </Row>
            <Row type="flex" justify="center">
              <Avatar size={80} style={{ marginTop: '-40px' }} icon="user" />
            </Row>
          </div>
        </Carousel>
      </div>
    )
  }
}

export default Testimoni

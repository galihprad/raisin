import React, { Component } from 'react'
import { Row, Col } from 'antd'
import 'antd/dist/antd.css'
import ScrollAnimation from 'react-animate-on-scroll'
import Ser from '../images/ser.png'
import Ser1 from '../images/ser1.png'
import Ser2 from '../images/ser2.png'
import Ser3 from '../images/ser3.png'
import Ser4 from '../images/ser4.png'

class StoryService extends Component {
  render() {
    return (
      <div style={{ fontFamily: 'Montserrat', marginBottom: '50px' }}>
        <Row>
          <Col
            xs={24}
            sm={24}
            md={12}
            lg={12}
            xl={12}
            style={{ padding: '20px' }}
          >
            <p
              style={{
                fontSize: '150px',
                color: '#F7F6FE',
                marginBottom: '-120px',
                marginLeft: '0px',
                fontWeight: '700',
              }}
            >
              <ScrollAnimation animateIn="fadeInDown" style={{ zIndex: '1' }}>
                01
              </ScrollAnimation>
            </p>

            <ScrollAnimation animateIn="tada">
              <h3
                style={{
                  color: '#E96479',
                  marginBottom: '20px',
                  fontWeight: '700',
                  letterSpacing: '3px',
                  zIndex: '12',
                }}
              >
                SIMPLE STORY
              </h3>
              <p style={{ fontSize: '12px' }}>
                Ipsum has been the industry's standard dummy text ever since the
                1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not
                only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged. It was popularised
                in the 1960s with the release of Letraset sheets containing
                Lorem Ipsum passages, and more recently with desktop publishing
                software like Aldus PageMaker including versions of Lorem Ipsum
              </p>
            </ScrollAnimation>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <Row>
              <Col
                xs={0}
                sm={0}
                md={24}
                lg={24}
                xl={24}
                style={{ height: '200px' }}
              />
              <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                <Row type="flex" justify="end">
                  <ScrollAnimation animateIn="fadeInDown">
                    <p
                      style={{
                        fontSize: '150px',
                        color: '#F7F6FE',
                        fontWeight: '700',
                        marginBottom: '-200px',
                      }}
                    >
                      02
                    </p>
                  </ScrollAnimation>
                </Row>

                <ScrollAnimation
                  animateIn="fadeInLeft"
                  style={{
                    marginBottom: '50px',
                    padding: '20px',
                    paddingTop: '30px',
                    paddingLeft: '20px',
                    backgroundImage: `url(${Ser})`,
                    marginTop: '100px',
                    backgroundSize: '100% 100%',
                    backgroundRepeat: 'no-repeat',
                  }}
                >
                  <h3
                    style={{
                      color: '#E96479',
                      paddingLeft: '30px',

                      fontWeight: '700',
                      letterSpacing: '3px',
                    }}
                  >
                    OUR SERVICE
                  </h3>
                  <p
                    style={{
                      fontSize: '12px',
                      paddingLeft: '30px',
                      marginBottom: '50px',
                    }}
                  >
                    we help you to builld best product
                  </p>
                  <Row>
                    <Col xs={12} sm={6} md={6} lg={6} xl={6}>
                      <img alt="example" src={Ser1} />
                    </Col>
                    <Col xs={12} sm={6} md={6} lg={6} xl={6}>
                      <img alt="example" src={Ser2} />
                    </Col>
                    <Col xs={12} sm={6} md={6} lg={6} xl={6}>
                      <img alt="example" src={Ser3} />
                    </Col>
                    <Col xs={12} sm={6} md={6} lg={6} xl={6}>
                      <img alt="example" src={Ser4} />
                    </Col>
                  </Row>
                </ScrollAnimation>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    )
  }
}

export default StoryService

import React, { Component } from 'react'
import { Row, Button, Col } from 'antd'
import 'antd/dist/antd.css'
import Ilustrasi from '../images/ilustrasi.png'

class Landing extends Component {
  render() {
    return (
      <div
        style={{
          fontFamily: 'Montserrat',
          marginTop: '50px',
          marginBottom: '50px',
        }}
      >
        <Row>
          <Col xs={24} sm={24} md={9} lg={9} xl={9} style={{ padding: '20px' }}>
            <h2
              style={{
                paddingTop: '10%',
                color: '#E96479',
                fontWeight: '700',
                letterSpacing: '2px',
              }}
            >
              RAISIN
            </h2>

            <h5
              style={{
                color: '#38486F',
                fontWeight: '700',
                letterSpacing: '1px',
                marginTop: '0px',
                marginBottom: '20px',
              }}
            >
              SOFTWARE HOUSE
            </h5>
            <p style={{ fontSize: '12px', marginBottom: '50px' }}>
              We are software house based on Yogykarta. We create an interactive
              website and mobile application. Wanna works with us?
            </p>
            <Row type="flex" justify="center">
              <Button
                type="primary"
                htmlType="submit"
                style={{
                  background:
                    'linear-gradient(180deg, #BE246F -59%, #E96479 86%)',
                  fontFamily: 'Montserrat',
                  fontWeight: '600',
                  borderColor: 'white',
                  width: '150px',
                }}
              >
                <h5
                  style={{
                    color: 'white',
                    paddingTop: '5px',
                    fontSize: '12px',
                  }}
                >
                  CONTACT US
                </h5>
              </Button>
            </Row>
          </Col>
          <Col xs={24} sm={24} md={15} lg={15} xl={15}>
            <img alt="example" src={Ilustrasi} />
          </Col>
        </Row>
      </div>
    )
  }
}

export default Landing

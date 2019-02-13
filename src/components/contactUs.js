import React, { Component } from 'react'
import { Form, Input, Button, Row } from 'antd'
import TextArea from 'antd/lib/input/TextArea'
import './layout.css'

class ContactUs extends Component {
  render() {
    return (
      <div
        style={{
          marginTop: '25px',
          marginBottom: '50px',
          fontFamily: 'Montserrat',
        }}
      >
        <p
          style={{
            fontSize: '150px',
            color: '#F7F6FE',
            marginBottom: '-100px',
            marginLeft: '75px',
            fontWeight: '700',
          }}
        >
          05
        </p>
        <h3
          style={{
            color: '#E96479',
            marginBottom: '50px',
            fontWeight: '700',
            letterSpacing: '3px',
          }}
        >
          CONTACT US
        </h3>
        <Form layout="vertical" onSubmit={this.handleSubmit}>
          <Form.Item>
            <Input
              type="email"
              placeholder="Email"
              style={{
                border: '0',
                color: '#38486F',
                backgroundColor: '#F5FBFB',
              }}
            />
          </Form.Item>
          <Form.Item>
            <TextArea
              type="text"
              placeholder="Message"
              style={{
                border: '0',
                color: '#38486F',
                backgroundColor: '#F5FBFB',
                height: '150px',
              }}
            />
          </Form.Item>
          <Form.Item>
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
                  width: '100px',
                }}
              >
                <h5 style={{ color: 'white', paddingTop: '5px' }}>SEND</h5>
              </Button>
            </Row>
          </Form.Item>
        </Form>
      </div>
    )
  }
}
export default ContactUs

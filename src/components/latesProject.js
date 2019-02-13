import React, { Component } from 'react'
import { Tabs, Row, Card, Button } from 'antd'
import './layout.css'
import Pro1 from '../images/pro1.png'

function callback(key) {}

const TabPane = Tabs.TabPane
const { Meta } = Card

class LatesProject extends Component {
  state = {
    activeKey: '1',
  }

  tes = key => {
    let activeKey = this.state.activeKey
    this.setState(state => ({
      activeKey: key,
    }))
  }

  render() {
    return (
      <div
        style={{
          marginTop: '50px',
          marginBottom: '50px',
          paddingBottom: '20px',
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
          03
        </p>
        <h3
          style={{
            color: '#E96479',
            marginBottom: '50px',
            fontWeight: '700',
            letterSpacing: '3px',
          }}
        >
          LATEST PROJECT
        </h3>
        <Row type="flex" justify="center">
          <Tabs
            // type="primary"
            defaultActiveKey="1"
            onChange={callback}
            onTabClick={this.tes}
          >
            <TabPane tab="PROJECT" key="1" />
            <TabPane tab="CASE STUDY" key="2" />
          </Tabs>
        </Row>
        <Row type="flex" justify="center">
          <div
            style={{
              backgroundColor: 'white',
              height: '30px',
              width: '100%',
              marginBottom: '-30px',
              zIndex: '100',
            }}
          />
        </Row>
        <Row type="flex" justify="center">
          <Tabs
            defaultActiveKey="1"
            onChange={callback}
            activeKey={this.state.activeKey}
          >
            <TabPane tab="" key="1">
              <Row type="flex" justify="center">
                <Card
                  hoverable
                  style={{
                    width: 240,
                    layout: 'inline',
                    borderStyle: 'none',
                    margin: '20px',
                  }}
                  cover={<img alt="example" src={Pro1} />}
                >
                  <div style={{ marginTop: '-100px', paddingLeft: '80%' }}>
                    <Button
                      type="primary"
                      shape="circle"
                      icon="right"
                      size="large"
                      layout="block"
                    />
                  </div>
                </Card>

                <Card
                  hoverable
                  style={{
                    width: 240,
                    layout: 'inline',
                    borderStyle: 'none',
                    margin: '20px',
                  }}
                  cover={<img alt="example" src={Pro1} />}
                >
                  <div style={{ marginTop: '-100px', paddingLeft: '80%' }}>
                    <Button
                      type="primary"
                      shape="circle"
                      icon="right"
                      size="large"
                      layout="block"
                    />
                  </div>
                </Card>
              </Row>
            </TabPane>
            <TabPane tab="" key="2">
              <Row type="flex" justify="center">
                <Card
                  hoverable
                  style={{
                    width: 240,
                    layout: 'inline',
                    borderStyle: 'none',
                    margin: '20px',
                  }}
                  cover={<img alt="example" src={Pro1} />}
                >
                  <div style={{ marginTop: '-100px', paddingLeft: '80%' }}>
                    <Button
                      type="primary"
                      shape="circle"
                      icon="right"
                      size="large"
                      layout="block"
                    />
                  </div>
                </Card>

                <Card
                  hoverable
                  style={{
                    width: 240,
                    layout: 'inline',
                    borderStyle: 'none',
                    margin: '20px',
                  }}
                  cover={<img alt="example" src={Pro1} />}
                >
                  <div style={{ marginTop: '-100px', paddingLeft: '80%' }}>
                    <Button
                      type="primary"
                      shape="circle"
                      icon="right"
                      size="large"
                      layout="block"
                    />
                  </div>
                </Card>
              </Row>
            </TabPane>
          </Tabs>
        </Row>
      </div>
    )
  }
}

export default LatesProject

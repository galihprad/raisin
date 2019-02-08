import React, { Component } from 'react'
import { Tabs, Row, Card, Col } from 'antd'
import './layout.css'

function callback(key) {}

const TabPane = Tabs.TabPane
const { Meta } = Card

class LatesProject extends Component {
  tes = key => {
    let activeKey = this.activeKey
    this.setState(state => ({
      activeKey: '2',
    }))
    console.log('key=')
    console.log(key)
    console.log('actkey=')
    console.log(activeKey)
  }

  render() {
    // function tes(activeKey) {
    //   console.log(activeKey)
    //   this.sestState({
    //     activeKey: 1
    //   })
    // }
    return (
      <div
        style={{
          height: '800px',
          marginTop: '50px',
          marginBottom: '50px',
          paddingBottom: '20px',
          fontFamily: 'Montserrat',
        }}
      >
        <Row type="flex" justify="center">
          <Tabs
            defaultActiveKey="1"
            onChange={callback}
            onTabClick={this.tes}
            activeKey={this.activeKey}
          >
            <TabPane tab="PROJECT" key="1">
              tes
            </TabPane>
            <TabPane tab="CASE STUDY" key="2">
              CASE STUDY
            </TabPane>
          </Tabs>
        </Row>
        <Row type="flex" justify="center">
          <Tabs defaultActiveKey="1" onChange={callback}>
            <TabPane tab="PROJECT" key="1" style={{ paddingLeft: '-200px' }}>
              <Row>
                <Col span={24}>
                  <Card
                    hoverable
                    style={{ width: 500, layout: 'inline' }}
                    cover={<img alt="example" src="" />}
                  >
                    <Meta
                      title="Europe Street beat"
                      description="www.instagram.com"
                    />
                  </Card>
                </Col>
                {/* <Col span={12}>
                  <Card
                    hoverable
                    style={{ width: 240, layout: 'inline' }}
                    cover={<img alt="example" src="" />}
                  >
                    <Meta
                      title="Europe Street beat"
                      description="www.instagram.com"
                    />
                  </Card> */}
                {/* </Col> */}
              </Row>
            </TabPane>
            <TabPane tab="CASE STUDY" key="2">
              CASE STUDY
            </TabPane>
          </Tabs>
        </Row>
      </div>
    )
  }
}

export default LatesProject

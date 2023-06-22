import React from 'react'
import {Input, Row, Col, Card} from 'antd'
import {UserOutlined, GithubOutlined } from '@ant-design/icons'


export const ProfileForm=()=> {
  

return( <>
<Row>
  <Card title='Изменения профиля' bordered={false} style={{width:1200}}>
    <Row>
      <Col span={4}>Имя</Col>
      <Col span={20}>
        <Input prefix={<UserOutlined />} />
      </Col>
    </Row>
    <Row>
      <Col span={4}> gitHub </Col>
      <Col span={20}><Input prefix={<GithubOutlined />} /> </Col>
    </Row>
    <Row><Col span={4}> vk </Col>
      <Col span={20}><Input /> </Col> </Row>
  </Card>
</Row>
</>)
}

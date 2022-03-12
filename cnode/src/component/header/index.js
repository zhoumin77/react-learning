import React from 'react';
import { useSelector } from 'react-redux';
import { Layout, Menu, Row, Col } from 'antd';
import style from './index.module.scss';
import router from '../../routers/router'
import { Link } from 'react-router-dom'
const { Header } = Layout;
export default function Head() {
  const state = useSelector(state => state)
  console.log('state', state);
  return (
    <div className={style.header}>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <Row>
          <Col span={4}><div className="logo">
            <img src="http://static2.cnodejs.org/public/images/cnodejs_light.svg" />
          </div>
          </Col>
          <Col span={20}>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
              {router.map((item, index) => (
                item.isNav && <Menu.Item key={index}><Link to={item.path}>{item.title}</Link>
                </Menu.Item>
              )
              )}
            </Menu>
          </Col>
        </Row>
      </Header>
    </div>

  )
}



import React from 'react';
import RouterList from './routers'
import { Layout } from 'antd';
import Head from './component/header';

const { Content, Footer } = Layout;

function App() {
  return (
    <div className="App">
      <Layout>
        <Head></Head>
        <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
            <RouterList />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>

    </div>
  );
}

export default App;

import { Layout, Breadcrumb } from 'antd';
import React from 'react';

const { Footer, Content } = Layout;

function version() {
  return (
    <div>
      <Layout>
        <Layout>
          <Content style={{ padding: '0 50px 0' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Versão</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ background: '#fff', padding: 24, minHeight: 797 }}>

              <h3>version: 0.1.0 </h3>

            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>©2020 Created by Guilherme Bernal</Footer>

        </Layout>
      </Layout>
    </div>
  );
}

export default version;

import { Layout, Breadcrumb } from 'antd';
import React from 'react';
import List from '../components/List/List';
const { Footer, Content } = Layout;

function pesquisa() {
  return (
    <div>
      <Layout>
        <Layout>
          <Content style={{ padding: '0 50px 0' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Crud</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ background: '#fff', padding: 24, minHeight: 797 }}>

          <List/>

            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>©2020 Created by Guilherme Bernal</Footer>

        </Layout>
      </Layout>
    </div>
  );
}

export default pesquisa;

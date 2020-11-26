import { Layout, Breadcrumb } from 'antd';
import React from 'react';
import Form from '../components/Form/Form';
const { Footer, Content } = Layout;

function cadastro() {
  return (
    <div>
      <Layout>
        <Layout>
          <Content style={{ padding: '0 50px 0' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Crud</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ background: '#fff', padding: 24, minHeight: 797 }}>

            
            <Form/>
          

            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>©2020 Created by Guilherme Bernal</Footer>

        </Layout>
      </Layout>
    </div>
  );
}

export default cadastro;

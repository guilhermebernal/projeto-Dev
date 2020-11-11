import { Layout, Breadcrumb } from "antd"
import React from "react"

const { Footer, Content } = Layout;


function dayliList() {
  return (
    <div>
    <Layout>
      <Layout>
      <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Daily List</Breadcrumb.Item>
      </Breadcrumb>
      <div style={{ background: '#fff', padding: 24, minHeight: 797 }}>
        Listareeeeeeeeeeeeeeeeeeeeeeeeee
        </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>©2020 Created by Guilherme Bernal</Footer>
  
      </Layout>
    </Layout>
    </div>
  );
}

export default dayliList;

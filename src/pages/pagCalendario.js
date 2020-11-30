import { Layout, Breadcrumb } from 'antd';
import React from 'react';
import "antd/dist/antd.css";
import { Calendar } from "antd";


const { Footer, Content } = Layout;

function pagCalendario(value, mode) {
  console.log(value, mode);
  
  return (
    <div>
      <Layout>
        <Layout>
          <Content style={{ padding: '0 50px 0' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Calendario</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ background: '#fff', padding: 24, minHeight: 797 }}>

            <Calendar pagCalendario={pagCalendario} />

           
          </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>©2020 Created by Guilherme Bernal</Footer>

        </Layout>
      </Layout>
    </div>
  );
}

export default pagCalendario;

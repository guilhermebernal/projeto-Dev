import { Layout, Typography, Menu, Icon, Breadcrumb } from "antd"
import Avatar from "antd/lib/avatar/avatar";
import './App.css';
import React from "react"




const { Header, Footer, Sider, Content } = Layout;
const { Title } = Typography;
const { SubMenu,} = Menu;

 


function App() {
  return (
    <div className="App">
        <Layout>
        <Header style={{padding:10}}>
          <Avatar style={{float:'right'}} src='./avatarglobo.png'></Avatar>
          <Title style={{color:'white'}} level={3}> Daily List</Title>
        </Header>
        <Layout>
      <Sider >
        <Menu
        defaultSelectedKeys={['List']}
        mode="inline"
         >
          <Menu.Item key='List'>
           <b>Daily List</b> 
          </Menu.Item>
          <SubMenu       
          
           title={ 
            <span>
              <Icon type="info" />
              <span>Sobre</span>
            </span>
        }>
            <Menu.ItemGroup key='Sobre'title= 'Sobre'>
              <Menu.Item key='Code GitHub'>Code GitHub </Menu.Item>
              <Menu.Item key='Version'>Versão </Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout>
      <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Daily List</Breadcrumb.Item>
      </Breadcrumb>
      <div style={{ background: '#fff', padding: 24, minHeight: 797 }}>Lista</div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>©2020 Created by Guilherme Bernal</Footer>
  
      </Layout>
    </Layout>
    </Layout>
    
    </div>
  );
}

export default App;

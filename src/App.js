import { Layout, Typography, Menu, Icon, Avatar } from "antd"
import './App.css';
import React from "react"
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import version from './pages/version.js';
import dailyList from './pages/dayliList.js'


const { Header, Sider, Content } = Layout;
const { Title } = Typography;
const { SubMenu,} = Menu;

function refreshPage(){ 
  window.location.reload(); 
}

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
        <Header style={{padding:10}}>
          <Avatar style={{float:'right'}} src='./avatarglobo.png'></Avatar>
          <Title style={{color:'white'}} level={3}><b>Fast Note</b></Title>
        </Header>
        <Layout>
      <Sider >
        <Menu

        defaultSelectedKeys={['List']}
        mode="inline"
         >
           
          <Menu.Item onClick={ refreshPage }>
            <Link to="/"><b>Fast Note</b></Link>
          </Menu.Item>
          
          <SubMenu       
          
           title={ 
            <span>
              <Icon type="info" />
              <span>Sobre</span>
            </span>
        }>
            <Menu.ItemGroup key='Sobre'title= 'Sobre'>
            <Menu.Item onClick={ refreshPage } ><Link to="/version"></Link>Versão</Menu.Item>
            <Menu.Item key='Code GitHub'>Code GitHub <a href="https://github.com/guilhermebernal/projeto-lista.git"/> </Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout>
      <Content style={{ padding: '0 50px' }}>
      <Router>
        <Switch>
      <Route exact path="/" component={dailyList} />
      <Route path="/version" component={version} />
      </Switch>
      </Router>
    </Content>
      </Layout>
    </Layout>
    </Layout>
    </Router>
    </div>
    
  );
}

export default App;
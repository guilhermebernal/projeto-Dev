import { Layout, Typography, Menu, Icon, } from "antd"
import Avatar from "antd/lib/avatar/avatar";
import './App.css';
import React from "react"
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import version from './components/version.js';
import dailyList from './components/dayliList.js'

const { Header, Footer, Sider, Content } = Layout;
const { Title } = Typography;
const { SubMenu,} = Menu;


function App() {
  return (
    <div className="App">
      <Router>
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
           
          <Menu.Item >
            <Link to="/"><b>Daily List</b></Link>
          </Menu.Item>
          
          <SubMenu       
          
           title={ 
            <span>
              <Icon type="info" />
              <span>Sobre</span>
            </span>
        }>
            <Menu.ItemGroup key='Sobre'title= 'Sobre'>
            <Menu.Item key='Version'><Link to="/version"></Link>Versão</Menu.Item>
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
import { Layout, Menu, Icon } from "antd";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,

} from "react-router-dom";
import Sistema from "/home/bernal/Documentos/projeto-lista/src/Sistema/Sistema";

const { Header, Content, Footer } = Layout;
function refreshPage(){ 
  window.location.reload(); 
}

function Home() {
   return (

<Router>
      <Layout className="layout">
        <Header>
        <title style={{color:'white'}} level={3}></title>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            style={{ lineHeight: "64px" }}
          >
            <Menu.Item onClick={ refreshPage } key="Home" Link to='/'>Home</Menu.Item>
            <Menu.Item onClick={ refreshPage }><Link to="Sistema"></Link>Sistema</Menu.Item>
            <Menu.Item style={{float:'right'}} key='GitHub'><Icon type="github"/>GitHub <a href="https://github.com/guilhermebernal/projeto-lista.git"/></Menu.Item>

          </Menu>
        </Header>
        <Content style={{ padding: "0 50px" }}>
          <div style={{ background: "#fff", padding: 24, minHeight: 850 }} />

          <Router>
        <Switch>
        <Route path="/Sistema" component={Sistema} />
      </Switch>
      </Router>
        </Content>


        <Footer style={{ textAlign: "center" }}>
          ©2020 Created by Guilherme Bernal
        </Footer>
      </Layout>
      </Router>
    
  );
}
export default Home;
import { Layout, Typography, Menu, Icon, Avatar } from "antd"
import './App.css';
import React from "react"
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import version from './pages/version.js';
import dayliList from "./pages/dayliList.js";
import home from "./pages/home";
import calculadora from "./pages/calculadora";
import pesquisa from "./pages/pesquisa";
import Form from './components/Form/Form';
import cadastro from "./pages/cadastro";
import pagCalendario from "./pages/pagCalendario";



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
          <Title style={{color:'white'}} level={3}><b>Begins Dev</b></Title>
        </Header>
        <Layout>
      <Sider >
        <Menu

        defaultSelectedKeys={['List']}
        mode="inline"
         >
           
          <Menu.Item onClick={ refreshPage }>
            <Link to="/"><Icon type="home"/>Home</Link>
          </Menu.Item>

          <SubMenu       
          
          title={ 
           <span>
             <Icon type="book" />
             <span>Crud</span>
           </span>
       }>
           <Menu.ItemGroup key='crud'title= 'Crud'>
           <Menu.Item onClick={ refreshPage }><Link to="cadastro"></Link><Icon type="audit"/>Cadastro</Menu.Item>
           <Menu.Item onClick={ refreshPage }><Link to="pesquisa"></Link><Icon type="search"/>Pesquisa</Menu.Item>
           </Menu.ItemGroup>
         </SubMenu>

         <SubMenu       
          
          title={ 
           <span>
             <Icon type="laptop" />
             <span>Utilitários</span>
           </span>
       }>
           <Menu.ItemGroup key='ferramentas'title= 'Ferramentas'>
           <Menu.Item onClick={ refreshPage }><Link to="calculadora"></Link><Icon type="calculator"/>Calculadora</Menu.Item>
           <Menu.Item onClick={ refreshPage }><Link to="pagCalendario"></Link><Icon type="calendar"/>Calendário</Menu.Item>
           <Menu.Item onClick={ refreshPage }><Link to="dayliList"></Link><Icon type="snippets"/>Nota Rápida</Menu.Item>
           </Menu.ItemGroup>
         </SubMenu>
          
          <SubMenu       
          
           title={ 
            <span>
              <Icon type="info" />
              <span>Sobre</span>
            </span>
        }>
            <Menu.ItemGroup key='Sobre'title= 'Informações'>
            <Menu.Item onClick={ refreshPage } ><Link to="/version"></Link><Icon type="fire"/>Versão</Menu.Item>
            <Menu.Item key='GitHub'><Icon type="github"/>GitHub <a href="https://github.com/guilhermebernal/projeto-lista.git"/> </Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout>
      <Content style={{ padding: '0 50px' }}>

        {/* Rotas */}
      <Router>
        <Switch>
      <Route exact path="/" component={home} />
      <Route exact path="/form" component={Form} />
      <Route path="/form/:id" component={Form} />
      <Route path="/cadastro" component={cadastro} />
      <Route path="/pesquisa" component={pesquisa} />
      <Route path="/version" component={version} />
      <Route path="/note" component={dayliList} />
      <Route path="/calculadora" component={calculadora} />
      <Route path="/pagCalendario" component={pagCalendario} />
      <Route path="/dayliList" component={dayliList} />

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
import { Layout, Typography, Menu, Avatar, Icon } from "antd"
import React from "react"
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import version from "/home/bernal/Documentos/projeto-lista/src/pages/version"
import dayliList from "/home/bernal/Documentos/projeto-lista/src/pages/dayliList";
import calculadora from "/home/bernal/Documentos/projeto-lista/src/pages/calculadora";
import pesquisa from "/home/bernal/Documentos/projeto-lista/src/pages/pesquisa";
import cadastro from "/home/bernal/Documentos/projeto-lista/src/pages/cadastro";
import pagCalendario from "/home/bernal/Documentos/projeto-lista/src/pages/pagCalendario";
import inicial from "../pages/inicial";




const { Header, Sider, Content } = Layout;
const { Title } = Typography;
const { SubMenu,} = Menu;




// recarrega a pagina ao clicar no button
function refreshPage(){ 
  window.location.reload(); 
}

function Sistema() {
  return (
    <div className="system">   
      <Router>
        <Layout>
        <Header style={{padding:10}}>
          <Avatar style={{float:'right'}} size="large" icon="user"></Avatar>
          <Title style={{color:'white'}} level={3}></Title>
        </Header>
        <Layout>
      <Sider >
        <Menu

        defaultSelectedKeys={['List']}
        mode="inline"
         >
           
          <Menu.Item onClick={ refreshPage }>
            <Link to="/inicial"><Icon type="inicial"/>Inicial</Link>
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
        <Route path="/inicial" component={inicial} />
        
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

export default Sistema;
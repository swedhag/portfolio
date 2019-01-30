import React, { Component } from 'react';
import './App.css';
//import Navbar from './Navbar/Navbar';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
        <div className="demo-big-content">
            <Layout className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
                <Header className="header-color" title={< Link style={{textDecoration:'none', color:'white'}} to ="/"> MY PORTFOLIO </Link> } scroll>
                    <Navigation className="mdl-layout--large-screen-only">
                        <Link to="/resume">Resume</Link>
                        <Link to="/aboutme">About Me</Link>
                        <Link to="/projects">Projects</Link>
                        <Link to="/contact">Contact</Link>
                    </Navigation>
                </Header>
                <Drawer className="mdl-layout--small-screen-only" title={< Link style={{ textDecoration: 'none', color: 'black' }} to="/"> MY PORTFOLIO </Link>}>
                    <Navigation>
                        <Link to="/resume">Resume</Link>
                        <Link to="/aboutme">About Me</Link>
                        <Link to="/projects">Projects</Link>
                        <Link to="/contact">Contact</Link>
                    </Navigation>
                </Drawer>
                <Content>
                    <div className="page-content" />
                    <Main />
                </Content>
            </Layout>
        </div>
    );
 
  }
}

export default App;

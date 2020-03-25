import React from 'react';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import {Link} from 'react-router-dom';
import Main from './components/Main'
function App() {
  return (
    <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title="My Portfolio" scroll>
            <Navigation>
                <Link to="/resume" href="#">Resume</Link>
                <Link to="/aboutme" href="#">About Me</Link>
                <Link to="/projects" href="#">Projects</Link>
                <Link to="/contact" href="#">Contacts</Link>
            </Navigation>
        </Header>
        <Drawer title="My Portfolio">
        <Navigation>
                <Link to="/resume" href="#">Resume</Link>
                <Link to="/aboutme" href="#">About Me</Link>
                <Link to="/projects" href="#">Projects</Link>
                <Link to="/contact" href="#">Contacts</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>
  );
}

export default App;

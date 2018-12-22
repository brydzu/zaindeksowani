import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import { Footer, FooterSection, FooterDropDownSection, FooterLinkList } from 'react-mdl';
import landingpage from './Components/landingpage';
import Main from './Components/main';
//import Footer from './Components/Footer';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
    <Layout>
                   <h1 id="naglowek">Zaindeksowani glikemicznie</h1>
        <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}}
        to="/landingpage"><img src="./assets/images.jpg"/>Zaindeksowani glikemicznie</Link>} scroll>
            <Navigation>
                <Link to="/landingpage">Home</Link>
                <Link to="/info">Info</Link>
                <Link to="/przepisy">Przepisy</Link>
                <Link to="/kalkulatory">Kalkulatory</Link>
                <Link to="/tabele">Tabele kaloryczne</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/kontakt">Kontakt</Link>
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
                <Link to="/landingpage">Home</Link>
                <Link to="/info">Info</Link>
                <Link to="/przepisy">Przepisy</Link>
                <Link to="/kalkulatory">Kalkulatory</Link>
                <Link to="/tabele">Tabele kaloryczne</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/kontakt">Kontakt</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
        <Footer size="mega">
    <FooterSection type="middle">
        <FooterDropDownSection title="Features">
            <FooterLinkList>
                <a href="#">About</a>
                <a href="#">Terms</a>
                <a href="#">Partners</a>
                <a href="#">Updates</a>
            </FooterLinkList>
        </FooterDropDownSection>
        <FooterDropDownSection title="Details">
            <FooterLinkList>
                <a href="#">Specs</a>
                <a href="#">Tools</a>
                <a href="#">Resources</a>
            </FooterLinkList>
        </FooterDropDownSection>
        <FooterDropDownSection title="Technology">
            <FooterLinkList>
                <a href="#">How it works</a>
                <a href="#">Patterns</a>
                <a href="#">Usage</a>
                <a href="#">Products</a>
                <a href="#">Contracts</a>
            </FooterLinkList>
        </FooterDropDownSection>
        <FooterDropDownSection title="FAQ">
            <FooterLinkList>
                <a href="#">Questions</a>
                <a href="#">Answers</a>
                <a href="#">Contact Us</a>
            </FooterLinkList>
        </FooterDropDownSection>
    </FooterSection>
    <FooterSection type="bottom" logo="Zaindeksowani glikemicznie &copy; 2019 by Kamil Kryżar">
        <FooterLinkList>
            <a href="#">Pomoc</a>
            <a href="#">Zasady zachowania prywatności</a>
        </FooterLinkList>
    </FooterSection>
</Footer>
    </Layout>
</div>
    );
  }
}

export default App;

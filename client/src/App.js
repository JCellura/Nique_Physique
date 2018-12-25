import React, { Component } from 'react';
import { BrowserRouter as Router, Route, } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Navbars from "./components/Navbar";
import Home from "./pages/Home/Home.js";
import Coaching from "./pages/Coaching/Coaching";
import SocialMedia from "./pages/SocialMedia/SocialMedia";
import Affiliations from "./pages/Affiliations";
import Training from "./pages/Training";
import Kurt from "./pages/SuccessStories/Kurt";
import HSFootball from "./pages/SuccessStories/HSFootball";

let hashHistory = Router.hashHistory;


class App extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <div>
          <Navbars />
          <Wrapper id={"wrapper"}>
            <Route exact path="/" component={Home} />
            <Route path="/coaching" component={Coaching} />
            <Route path="/social" component={SocialMedia} />
            <Route path="/affiliations" component={Affiliations} />
            <Route path="/training" component={Training} />
            <Route path="/success/kurt" component={Kurt} />
            <Route path="/success/hsfootball" component={HSFootball} />
            {/* <Route exact path="/search" component={Search} /> */}
          </Wrapper>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;

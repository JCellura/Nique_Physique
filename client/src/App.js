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

let hashHistory = Router.hasHishtory;


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
            {/* <Route exact path="/search" component={Search} /> */}
          </Wrapper>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;

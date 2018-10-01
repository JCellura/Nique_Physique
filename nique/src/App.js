import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Navbars from "./components/Navbar";
import Home from "./pages/Home";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbars />
          <Wrapper id={"wrapper"}>
            <Route exact path="/" component={Home} />
            {/* <Route exact path="/about" component={About} />
            <Route exact path="/discover" component={Discover} />
            <Route exact path="/search" component={Search} /> */}
          </Wrapper>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;

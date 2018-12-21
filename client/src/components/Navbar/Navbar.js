import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Logo from "./Logo.png";
import {Grid, Row, Col} from "react-bootstrap";
import {Navbar, NavItem, Nav, NavDropdown, MenuItem} from "react-bootstrap"


// Logo is 1113 X 525 = 2.12  =>  253 x 120 = 2.1225 ***At a height of 120px, the width is perfect at 75%**

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbars = props => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Grid>
      <Row>
        <Col xs={12} sm={6} md={4} lg={4} style={{height: "120px", marginBottom: "15px"}}> 
          <Link className="navbar-brand" to="/">
            <img alt="Logo" src={Logo} style={{width:"75%", height: "120px", marginLeft:"12.5%"}} />
          </Link>
        </Col>
        <Col xsHidden={true} sm={6} md={4} lg={4} style={{height: "120px", marginBottom: "15px"}}> 
          <Link className="navbar-brand" to="/">
            <img alt="Logo" src={Logo} style={{width:"75%", height: "120px", marginLeft:"12.5%"}} />
          </Link>
        </Col>
        <Col xsHidden={true} smHidden={true} md={4} lg={4} style={{height: "120px", marginBottom: "15px"}}> 
          <Link className="navbar-brand" to="/">
            <img alt="Logo" src={Logo} style={{width:"75%", height: "120px", marginLeft:"12.5%"}} />
          </Link>
        </Col>
        <Col xsHidden={true} smHidden={true} mdHidden={true} lgHidden={true} style={{height: "120px", marginBottom: "15px"}}> 
          <Link className="navbar-brand" to="/">
            <img alt="Logo" src={Logo} style={{width:"75%", height: "120px", marginLeft:"12.5%"}} />
          </Link>
        </Col>
      </Row>
    </Grid>

    <Navbar inverse collapseOnSelect id={"bar"}>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="/">Nique Physique</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavItem eventKey={1} href="/coaching">
            Coaching
          </NavItem>
          <NavItem eventKey={2} href="#">
            Training
          </NavItem>
          <NavDropdown eventKey={3} title="Success Stories" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}>Action</MenuItem>
            <MenuItem eventKey={3.2}>Another action</MenuItem>
            <MenuItem eventKey={3.3}>Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.3}>Separated link</MenuItem>
          </NavDropdown>
        </Nav>
        <Nav pullRight>
          <NavItem eventKey={1} href="/affiliations">
            Affiliations
          </NavItem>
          <NavItem eventKey={2} href="/social">
            Social Media
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>;

  </nav>
  
);

export default Navbars;


{/* <div>
      <ul className="navbar-nav">
        <li
          className={
            window.location.pathname === "/" ||
            window.location.pathname === "/about"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/" className="nav-link">
            About
          </Link>
        </li>
        <li
          className={
            window.location.pathname === "/discover"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/discover" className="nav-link">
            Discover
          </Link>
        </li>
        <li
          className={
            window.location.pathname === "/search"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/search" className="nav-link">
            Search
          </Link>
        </li>
      </ul>
    </div> */}
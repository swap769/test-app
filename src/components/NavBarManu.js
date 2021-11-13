import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faList } from "@fortawesome/free-solid-svg-icons";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
class NavBarManu extends Component {
  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">User Data</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#link">
                <Link to="/list">
                  {" "}
                  <FontAwesomeIcon icon={faList} /> List
                </Link>
              </Nav.Link>
              {localStorage.getItem("login") ? (
                <Nav.Link href="#link">
                  <Link to="/logout">
                    <FontAwesomeIcon icon={faUser} /> Login{" "}
                  </Link>
                </Nav.Link>
              ) : (
                <Nav.Link href="#link">
                  <Link to="/">
                    <FontAwesomeIcon icon={faUser} /> Logout{" "}
                  </Link>
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavBarManu;

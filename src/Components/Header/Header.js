import React from "react";

import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import useAuth from "../../Hooks/useAuth";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <LinkContainer to="/home">
            <Navbar.Brand>Home</Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to="/addblog">
                <Nav.Link>Blog</Nav.Link>
              </LinkContainer>

              {/* <LinkContainer to="/contact">
                <Nav.Link>Contact</Nav.Link>
              </LinkContainer> */}

              <LinkContainer to="/register">
                <Nav.Link>Register</Nav.Link>
              </LinkContainer>

              {user.email && (
                <LinkContainer to="/dashboard">
                  <Nav.Link>Dashboard</Nav.Link>
                </LinkContainer>
              )}

              {user.email ? (
                <Button onClick={logOut} variant="outline-info">
                  LogOut
                </Button>
              ) : (
                <LinkContainer to="/login">
                  <Nav.Link>Login</Nav.Link>
                </LinkContainer>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;

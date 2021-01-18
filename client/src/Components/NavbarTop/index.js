import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import "./index.scss";
const NavbarTop = () => {
  const logout = () => {
    localStorage.clear();
    return <Redirect to="/" />
  }
  return (
    <Navbar className="navbar-header" bg="light" expand="lg">
      <Navbar.Brand href="/">Home</Navbar.Brand>
      <Container fluid className="header-nav-links">

        <Nav.Link href="/signup">SignUp</Nav.Link>
        <Nav.Link href="/signin">Signin</Nav.Link>
        <Nav.Link href="/profile">Profile</Nav.Link>
        {/* <Button onClick={logout}>Logout</Button> */}
      </Container>
    </Navbar>
  );
};
export default NavbarTop;

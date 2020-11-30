import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";

export default function Header() {
  const isAuthenticated = useAuth0();
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">dknoops</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          {!isAuthenticated.isAuthenticated && <LoginButton />}
          {isAuthenticated.isAuthenticated && <LogoutButton />}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

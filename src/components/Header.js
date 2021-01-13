import React from "react";
import GetUser from "../api/Get-User";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";

export default function Header() {
  const { isAuthenticated, isLoading } = useAuth0();
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">
        <img src="/images/logo.png" alt="Our logo"></img>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/cards">Cards</Nav.Link>
          {!isLoading && isAuthenticated && <GetUser />}
        </Nav>
        <Nav className="ml-auto">
          {!isLoading && isAuthenticated ? <LogoutButton /> : <LoginButton />}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

import React from "react";
import "../App.css";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout, user } = useAuth0();
  return (
    <>
      <NavDropdown
        id="basic-nav-dropdown"
        title={
          <img src={user.picture} alt="Profile" className="nav-user-profile" />
        }
      >
        <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item
          onClick={() => logout({ returnTo: window.location.origin })}
        >
          Log Out
        </NavDropdown.Item>
      </NavDropdown>
    </>
  );
};

export default LogoutButton;

import React from "react";
import "./Navbar.css";
import { useAuth0 } from "@auth0/auth0-react";
function Header() {
  const { user, isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (
      <>
        <div className="header">
          <h1>Wel<span>come</span></h1>
          <h1>{user.name}</h1>
        </div>
      </>
    )
  );
}

export default Header;

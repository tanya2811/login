import React from "react";
import "./Navbar.css";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import Header from './Header'
import Profile from "./Profile";
function Navbar() {
  return (
    <>
      <div className="navbar">
        
        <div className="list">
          <ul>
          
            <li className="li">Home</li>
            <li className="li">Contact Us</li>
            <li>
              <LoginButton />
              <LogoutButton />
              <Profile />
            </li>
            
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;

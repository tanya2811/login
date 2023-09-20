import React from 'react';
import './App.css';

import { useAuth0 } from '@auth0/auth0-react';
import Navbar from './components/Navbar';
import Main from './components/main'
import Header from './components/Header';
function App() {
  const { isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>

  return (
    <>
    <Navbar></Navbar>
    <Header></Header>
  
      {/* <LoginButton />
      <LogoutButton />
      <Profile /> */}
    </>
  );
}

export default App;
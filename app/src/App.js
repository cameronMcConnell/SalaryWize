import './App.css';
import SideBar from './components/SideBar';
import Home from './components/Home';
import Payments from './components/Payments';
import Monitor from './components/Monitor';
import SignIn from './components/SignIn';
import { useState } from 'react';

export default function App() {
  const [page, setPage] = useState(0);
  const [signedIn, setSignedIn] = useState(false);

  const account = {username: "", password: ""};

  const changePage = () => {
    switch (page) {
      case 0:
        return <Home />;
      case 1:
        return <Payments />;
      case 2:
        return <Monitor />;
      default:
        return <h1>Error</h1>;
    }
  }

  return (
    <span>
    { signedIn ? (
      <div id="app-container">
        <SideBar page={page} setPage={setPage}/>
        <div id="content-container">
          {changePage()}
        </div>
      </div>
      ) : (
        <SignIn account={account} setSignedIn={setSignedIn}/>
      )}
    </span>
  );
}
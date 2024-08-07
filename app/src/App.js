import './App.css';
import SideBar from './components/SideBar';
import Home from './components/Home';
import Profile from './components/Profile';
import Payments from './components/Payments';
import Monitor from './components/Monitor';
import { useState } from 'react';

export default function App() {
  const [page, setPage] = useState(0);

  const changePage = () => {
    switch (page) {
      case 0:
        return <Home />;
      case 1:
        return <Profile />;
      case 2:
        return <Payments />;
      case 3:
        return <Monitor />;
      default:
        return <h1>Error</h1>;
    }
  }

  return (
    <div>
      <SideBar page={page} setPage={setPage}/>
      <div id="content-container">
        {changePage()}
      </div>
    </div>
  );
}
import './App.css';
import SideBar from './components/SideBar';

export default function App() {
  return (
    <div id="primary-container">
      <SideBar />
      <div id="content-container">
        <h1>Hello there</h1>
      </div>
    </div>
  );
}
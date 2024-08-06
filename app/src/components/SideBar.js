import './styles/SideBar.css';
import logo from '../imgs/logo.png';
import account from '../imgs/account.png';
import home from '../imgs/home.png';
import payments from '../imgs/payments.png';
import monitoring from '../imgs/monitoring.png';

export default function SideBar({ page, setPage }) {
    return (
        <div className="sidebar flex-column horizontal-center">
            <img className="logo" src={logo} alt="Logo"/>
            <div className="flex-column flex-grow center full-width row-gap">
                <button id={page === 0 ? "selected" : ""} className="icon-button" onClick={() => setPage(0)}>
                    <img className="icon" src={home} alt="Home"/>
                </button>
                <button id={page === 1? "selected" : ""} className="icon-button" onClick={() => setPage(1)}>
                    <img className="icon" src={account} alt="Account"/>
                </button>
                <button id={page === 2 ? "selected" : ""} className="icon-button" onClick={() => setPage(2)}>
                    <img className="icon" src={payments} alt="Payments"/>
                </button>
                <button id={page === 3 ? "selected" : ""} className="icon-button" onClick={() => setPage(3)}>
                    <img className="icon" src={monitoring} alt="Monitoring"/>
                </button>
            </div>
        </div>
    );
}
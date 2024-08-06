import './styles/SideBar.css';
import logo from '../imgs/logo.png';
import account from '../imgs/account.png';
import home from '../imgs/home.png';
import payments from '../imgs/payments.png';
import monitoring from '../imgs/monitoring.png';

export default function SideBar() {
    return (
        <div className="sidebar flex-column horizontal-center">
            <img className="logo" src={logo} alt="Logo"/>
            <div className="flex-column flex-grow center full-width row-gap">
                <button>
                    <img className="icon" src={home} alt="Home"/>
                </button>
                <button>
                    <img className="icon" src={account} alt="Account"/>
                </button>
                <button>
                    <img className="icon" src={payments} alt="Payments"/>
                </button>
                <button>
                    <img className="icon" src={monitoring} alt="Monitoring"/>
                </button>
            </div>
        </div>
    );
}
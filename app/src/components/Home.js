import './styles/Home.css';
import panorama from '../imgs/panorama.jpg';
import { Fade } from "react-awesome-reveal";

export default function Home() {
    return (
        <div className="flex-column row-gap">
            <Fade direction="down" triggerOnce={true}>
                <div className="flex-column row-gap card">
                    <h1>Welcome to SalaryWize</h1>
                    <img className="panorama" src={panorama} alt="Home"/>
                </div>
                <div className="flex-column row-gap card">
                    <h2>About</h2>
                    <p>
                        SalaryWize is your go-to financial tool 
                        for managing expenses and gaining insights. 
                        Create an account, log your expenses by category, 
                        and view detailed statistics month-to-month 
                        and year-to-year to better 
                        understand and optimize your spending.
                    </p>
                </div>
                <div className="flex-column row-gap card">
                    <h2>Key Features</h2>

                </div>
            </Fade>
        </div>
    );
}
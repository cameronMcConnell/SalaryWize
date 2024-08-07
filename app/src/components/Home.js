import './styles/Home.css';
import panorama from '../imgs/panorama.jpg';
import { Fade } from "react-awesome-reveal";
import { useState, useEffect } from 'react';

export default function Home() {
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    const [date, setDate] = useState(new Date().toDateString());

    useEffect(() => {
        setInterval(() => {
            const dateObject = new Date();

            const currentTime = dateObject.toLocaleTimeString();

            setTime(currentTime);
        }, 1000);

        const getTimeUntilMidnight = () => {
            const now = new Date();
            const midnight = new Date(now);
            midnight.setHours(24, 0, 0, 0);
            return midnight - now;
        };

        setInterval(() => {
            const dateObject = new Date();

            const currentDate = dateObject.toDateString();

            setDate(currentDate);
        }, getTimeUntilMidnight)
    }, []);

    return (
        <div className="flex-column row-gap">
            <Fade direction="down" triggerOnce={true}>
                <div className="flex-column row-gap card">
                    <h1>Welcome to SalaryWize</h1>
                    <img className="panorama" src={panorama} alt="Home"/>
                </div>
                <div className="flex-column row-gap card">
                    <h2>Time Now</h2>
                    <p>{date}</p>
                    <p>{time}</p>
                </div>
                <div className="flex-column row-gap card">
                <h2>Updates</h2>
                    <p>We are excited to announce the release of Version 1.0 of SalaryWize!</p>
                    <ul className="ul-left-margin">
                        <li><strong>Expense Tracking:</strong> Easily log and categorize your expenses.</li>
                        <li><strong>Monthly and Yearly Insights:</strong> Gain valuable insights with detailed reports and visualizations.</li>
                        <li><strong>User-Friendly Interface:</strong> Enjoy a streamlined and intuitive user experience.</li>
                        <li><strong>Enhanced Security:</strong> Benefit from improved security features to keep your data safe.</li>
                        <li><strong>Bug Fixes and Performance Improvements:</strong> Experience a more stable and faster application.</li>
                    </ul>
                    <p>Thank you for using SalaryWize! We're committed to continually improving your financial management experience. Stay tuned for future updates and enhancements.</p>
                </div>
                <div className="flex-column row-gap card">
                    <h2>Contact Support</h2>
                    <p>If you have any questions or need assistance, feel free to reach out to our support team!</p>
                    <ul className="ul-left-margin">
                        <li><strong>Email:</strong> <a href="mailto:support@salarywize.com">support@salarywize.com</a></li>
                    </ul>
                    <p>We aim to respond to all inquiries within 24 hours. Thank you for using SalaryWize!</p>
                </div>
            </Fade>
        </div>
    );
}
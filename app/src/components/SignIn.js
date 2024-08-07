import './styles/SignIn.css';
import logo from '../imgs/logo.png';
import { Fade } from 'react-awesome-reveal';

export default function SignIn({ account, setSignedIn }) {
    return (
        <div className="full-page flex center background-image">
            <Fade className="full flex center" direction="down" triggerOnce={true}>
                <div className="sign-in-card flex-column">
                    <header className="logo-header flex center">
                        <img className="logo" src={logo} alt="Logo"/>
                    </header>
                    <div className="flex-grow flex center">
                        <h1>Login</h1>
                    </div>
                    <div className="flex-grow flex-column row-gap input-position">
                        <div className="flex-column row-gap input-container">
                            <label for="username"><strong>Username</strong></label>
                            <input placeholder="Type your username" name="username" type="text"></input>
                        </div>
                        <div className="flex-column row-gap input-container">
                            <label for="password"><strong>Password</strong></label>
                            <input placeholder="Type your password" name="password" type="password"></input>
                        </div>
                        <button className="switch-button"><strong>Sign Up</strong></button>
                        <button className="submit-button" onClick={() => setSignedIn(true)}><strong>Submit</strong></button>
                    </div>
                </div>
            </Fade>
        </div>
    );
}
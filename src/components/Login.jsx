import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Sidebar from "./Sidebar";
import Logo from "../img/logo2.png";
import Register from "./Register "; // Import the Register component
// import Menu from '@mui/material/Menu'

function Login() {
    const [emailAddress, setEmailAddress] = useState('abc@ads.com');
    const [password, setPassword] = useState('ads!@#4');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [error, setError] = useState('');
    const [isRegister, setIsRegister] = useState(false); // State to toggle between login and register

    useEffect(() => {
        const token = localStorage.getItem('enc_tkn');
        if (token) {
            setIsLoggedIn(true);
        }
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const url = `https://adsdeskapi.adscodegensolutions.com/api/v1/Token`;
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    emailAddress,
                    password
                }),
            });
            const data = await response.json();
            if (response.ok) {
                const token = data.access_Token;
                localStorage.setItem('enc_tkn', token);
                localStorage.setItem('enc_email', data.email);
                localStorage.setItem('enc_fname', data.firstName);
                localStorage.setItem('enc_lname', data.lastName);
                localStorage.setItem('enc_name', data.name);
                localStorage.setItem('enc_prop', data.profilePic);
                localStorage.setItem('enc_romane', data.roleName);
                localStorage.setItem('enc_utp', data.userType);
                if (data.userType === "Super Admin") {
                    setIsLoggedIn(true);
                } else {
                    setError("You don't have access to this dashboard.");
                }
            } else {
                setError(data.message || 'Failed to login. Please check your credentials.');
            }
        } catch (error) {
            setError('An error occurred. Please try again later.');
            toast.error('An error occurred. Please try again later.');
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('enc_tkn');
        localStorage.removeItem('enc_email');
        localStorage.removeItem('enc_fname');
        localStorage.removeItem('enc_lname');
        localStorage.removeItem('enc_name');
        localStorage.removeItem('enc_prop');
        localStorage.removeItem('enc_romane');
        localStorage.removeItem('enc_utp');
        setIsLoggedIn(false);
    };
   

    return (
        <>
            <ToastContainer />
            {!isLoggedIn ? (
                !isRegister ? (
                    <div className="main-wrapper">
                        <div className="account-content">
                            <div className="container">
                                <div className="account-logo text-center pt-3">
                                    <a href="#">
                                        <img src={Logo} alt="Logo" />
                                
                                    </a>
                                </div>
                                <div className="account-box mt-3">
                                    <div className="account-wrapper">
                                        <h3 className="text-center">Login</h3>
                                        <p className="account-subtitle">Access to our dashboard</p>
                                        <form onSubmit={handleSubmit}>
                                            <div className="form-group">
                                                <label>Email Address</label>
                                                <input
                                                    className="form-control"
                                                    type="text"
                                                    value={emailAddress}
                                                    onChange={(e) => setEmailAddress(e.target.value)}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <div className="row">
                                                    <div className="col">
                                                        <label>Password</label>
                                                    </div>
                                                    <div className="col-auto">
                                                        <a className="text-muted" href="forgot-password.html">
                                                            Forgot password?
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="position-relative">
                                                    <input
                                                        className="form-control"
                                                        type="password"
                                                        value={password}
                                                        onChange={(e) => setPassword(e.target.value)}
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-group text-center mt-3">
                                                <button className="loginbtn w-100" type="submit">
                                                    Login
                                                </button>
                                                {error && <p>{error}</p>}
                                            </div>
                                            <div className="account-footer text-center mt-3">
                                                <p>
                                                    Don't have an account yet?{" "}
                                                    <a href="#" className="account-footer" onClick={() => setIsRegister(true)}>
                                                        Register
                                                    </a>
                                                </p>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <Register onSwitchToLogin={() => setIsRegister(false)} />
                )
            ) : (
                <Sidebar onLogout={handleLogout} />
            )}
        </>
    );
}

export default Login;

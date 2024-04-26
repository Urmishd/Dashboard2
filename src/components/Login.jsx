import React, { useState } from "react";
import Logo from "../img/logo2.png";
import axios from "axios";
import Sidebar from "./Sidebar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
    const [username, setUsername] = useState('kminchelle');
    const [password, setPassword] = useState('0lelplR');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Assuming your API endpoint for login is '/login'
            const response = await fetch('https://dummyjson.com/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });
            const data = await response.json();
            if (response.ok) {
                setIsLoggedIn(true);
                toast.success('Login successful!');
            } else {
                setError(data.message); // Assuming your API returns error messages
                toast.error(data.message);
            }
        } catch (error) {
            setError('An error occurred. Please try again later.');
            toast.error('An error occurred. Please try again later.');
        }
    };
    
    return (
        <>
            <ToastContainer />
            {!isLoggedIn ? (
                <div className="main-wrapper">
                    <div className="account-content">
                        <div className="container">
                            <div className="account-logo text-center pt-3">
                                <a href="#">
                                    <img src={Logo} alt="Dreamguy's Technologies" />
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
                                                value={username}
                                                onChange={(e) => setUsername(e.target.value)}
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
                                                <a href="#" className="account-footer">
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
                <div>
                    <Sidebar />
                </div>
            )}
        </>
    );
}

export default Login;

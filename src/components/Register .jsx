import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Logo from "../img/logo2.png";

function Register({ onSwitchToLogin }) {
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isAdmin, setIsAdmin] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Registration logic here
        toast.success('Registration successful!');
        onSwitchToLogin();  // Switch back to login after successful registration
    };

    return (
        <>
            <ToastContainer />
            <div className="main-wrapper h-100">
                <div className="account-content">
                    <div className="container">
                        <div className="account-logo text-center pt-3">
                            <a href="#">
                                <img src={Logo} alt="Logo" />
                            </a>
                        </div>
                        <div className="account-box mt-3">
                            <div className="account-wrapper">
                                <h3 className="text-center">Register</h3>
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label>Name</label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Last Name</label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            value={lastname}
                                            onChange={(e) => setLastname(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Email Address</label>
                                        <input
                                            className="form-control"
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Password</label>
                                        <input
                                            className="form-control"
                                            type="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Confirm Password</label>
                                        <input
                                            className="form-control"
                                            type="password"
                                            value={confirmPassword}
                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="form-group form-check d-flex gap-2">
                                        <input
                                            type="checkbox"
                                            className="form-check-input mt-3"
                                            id="isAdminCheck"
                                            checked={isAdmin}
                                            onChange={(e) => setIsAdmin(e.target.checked)}
                                        />
                                        <label className="form-check-label" htmlFor="isAdminCheck">
                                            Register as Admin
                                        </label>
                                    </div>
                                    <div className="form-group text-center mt-3">
                                        <button className="loginbtn w-100" type="submit">
                                            Register
                                        </button>
                                    </div>
                                    <div className="account-footer text-center mt-3">
                                        <p>
                                            Already have an account?{" "}
                                            <a href="#" className="account-footer" onClick={onSwitchToLogin}>
                                                Login
                                            </a>
                                        </p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Register;
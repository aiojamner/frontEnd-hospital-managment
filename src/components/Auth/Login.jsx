// import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import axios from 'axios';
// import { Form, Button, Alert } from 'react-bootstrap';
import './Login.css';
// import Dashboard from '../Dashboard/Dashboard';

const LoginComponent = () => {
    // const [credentials, setCredentials] = useState({ username: '', password: '' });
    // const [error, setError] = useState(null);
    // const history = useHistory();
    // const [username, setUsername] = useState('');
    const navigate = useNavigate();


    // const handleClick = async (e) => {
    //     e.preventDefault();
    //     try {
    //         const response = await axios.post('/api/login', credentials); // Adjust the API endpoint as needed
    //         if (response.data.token) {
    //             localStorage.setItem('token', response.data.token); // Store the token in local storage
    //             navigate.push('/dashboard'); // Redirect to the Dashboard
    //         } else {
    //             setError('Invalid login credentials');
    //         }
    //     } catch (err) {
    //         setError('An error occurred during login');
    //     }
    // };
    const handleClick = () => {
          navigate('/dashboard');
       
    };
    return (
        <div>


            <div class="panel-lite">
                <div class="thumbur">
                    <div class="icon-lock"></div>
                </div>
                <h4>Login</h4>
                <div class="form-group">
                    <input class="form-control" required="required" />
                    <label class="form-label">Username</label>
                </div>
                <div class="form-group">
                    <input class="form-control" type="password" required="required" />
                    <label class="form-label">Password</label>
                </div><a href="#">Forgot Password ?</a>
                <button class="floating-btn" onClick={handleClick}><i class="icon-arrow"></i></button>
            </div>
        </div>
    );
};

export default LoginComponent;

import React, { useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext.jsx'; // Import AuthContext
import './Auth.css'; // Import CSS for styling
import { Link } from 'react-router-dom'; // Import Link for navigation

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useContext(AuthContext); // Use AuthContext

    console.log("Login component rendered"); // Log to confirm rendering

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/auth/login', { username, password });
            login(response.data.token, response.data.role); // Call login function from context
            alert('Login successful');
            window.location.href = '/dashboard'; // Redirect to dashboard
        } catch (error) {
            alert('Login failed');
        }
    };

    return (
        <div className="auth-container">
            <form onSubmit={handleLogin}>
                <h2>Login</h2>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Login</button>
                <p>Don't have an account? <Link to="/signup">Sign up</Link></p> {/* Link to Signup */}
            </form>
        </div>
    );
};

export default Login;

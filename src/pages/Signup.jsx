import React, { useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext.jsx'; // Import AuthContext
import './Auth.css'; // Import CSS for styling
import { Link } from 'react-router-dom'; // Import Link for navigation

const Signup = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('user'); // Default role
    const { login } = useContext(AuthContext); // Use AuthContext

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/auth/signup', { username, password, role });
            login(response.data.token, role); // Call login function from context
            alert('Signup successful');
            window.location.href = '/dashboard'; // Redirect to dashboard
        } catch (error) {
            if (error.response && error.response.status === 409) {
                alert('Username is already registered. Please try a different username.'); // Handle username conflict
            } else {
                alert('Signup failed');
            }
        }
    };

    return (
        <div className="auth-container">
            <form onSubmit={handleSignup}>
                <h2>Signup</h2>
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
                <select value={role} onChange={(e) => setRole(e.target.value)}>
                    <option value="user">User</option>
                    <option value="lawyer">Lawyer</option>
                    <option value="admin">Admin</option>
                </select>
                <button type="submit">Signup</button>
                <p>Already have an account? <Link to="/">Login</Link></p> {/* Link to Login */}
            </form>
        </div>
    );
};

export default Signup;

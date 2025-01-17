import React, { useContext } from 'react';
import './Dashboard.css'; // Import CSS for styling
import { AuthContext } from '../context/AuthContext'; // Import AuthContext

const UserDashboard = () => {
    const { logout } = useContext(AuthContext); // Use AuthContext

    return (
        <div className="dashboard-container">
            <h1 className="dashboard-title">User Dashboard</h1>
            <p className="dashboard-content">User specific content goes here.</p>
            <button onClick={logout}>Logout</button> {/* Logout button */}
        </div>
    );
};

export default UserDashboard;

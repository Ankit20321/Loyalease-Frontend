import React, { useContext } from 'react';
import './Dashboard.css'; // Import CSS for styling
import { AuthContext } from '../context/AuthContext'; // Import AuthContext

const LawyerDashboard = () => {
    const { logout } = useContext(AuthContext); // Use AuthContext

    return (
        <div className="dashboard-container">
            <h1 className="dashboard-title">Lawyer Dashboard</h1>
            <p className="dashboard-content">Lawyer specific content goes here.</p>
            <button onClick={logout}>Logout</button> {/* Logout button */}
        </div>
    );
};

export default LawyerDashboard;

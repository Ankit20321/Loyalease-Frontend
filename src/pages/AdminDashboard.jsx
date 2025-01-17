import React, { useContext } from 'react';
import './Dashboard.css'; // Import CSS for styling
import UserManagement from './UserManagement'; // Import UserManagement component
import { AuthContext } from '../context/AuthContext'; // Import AuthContext

const AdminDashboard = () => {
    const { logout } = useContext(AuthContext); // Use AuthContext

    return (
        <div className="dashboard-container">
            <h1 className="dashboard-title">Admin Dashboard</h1>
            <UserManagement /> {/* Include UserManagement component */}
            <button onClick={logout}>Logout</button> {/* Logout button */}
        </div>
    );
};

export default AdminDashboard;

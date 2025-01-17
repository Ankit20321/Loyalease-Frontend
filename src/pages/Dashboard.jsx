import React from 'react';
import AdminDashboard from './AdminDashboard';
import LawyerDashboard from './LawyerDashboard';
import UserDashboard from './UserDashboard';

const Dashboard = () => {
    const role = localStorage.getItem('role'); // Assuming role is stored in local storage

    return (
        <div>
            <h1>{role.charAt(0).toUpperCase() + role.slice(1)} Dashboard</h1>
            {role === 'admin' && <AdminDashboard />}
            {role === 'lawyer' && <LawyerDashboard />}
            {role === 'user' && <UserDashboard />}
        </div>
    );
};

export default Dashboard;

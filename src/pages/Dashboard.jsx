import React from 'react';
import AdminDashboard from './AdminDashboard';
import LawyerDashboard from './LawyerDashboard';
import UserDashboard from './UserDashboard';

const Dashboard = () => {
const role = localStorage.getItem('role') || 'guest'; // Default to 'guest' if no role is found

    return (
        <>
            <div className="dashboard-container">
                {/* <h1 className="dashboard-title">{role.charAt(0).toUpperCase() + role.slice(1)} Dashboard</h1> */}
            {role === 'admin' && <AdminDashboard />}
            {role === 'lawyer' && <LawyerDashboard />}
            {role === 'user' && <UserDashboard />}
            </div>
            </>
    );
};

export default Dashboard;

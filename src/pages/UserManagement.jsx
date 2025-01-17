import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Dashboard.css'; // Import CSS for styling

const UserManagement = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            const response = await axios.get('http://localhost:5000/api/users'); // Fetch users from backend
            setUsers(response.data);
        };
        fetchUsers();
    }, []);

    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:5000/api/users/${id}`); // Delete user
        setUsers(users.filter(user => user._id !== id)); // Update local state
    };

    return (
        <div className="dashboard-container">
            <h1 className="dashboard-title">User Management</h1>
            <table>
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Role</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user._id}>
                            <td>{user.username}</td>
                            <td>{user.role}</td>
                            <td>
                                <button onClick={() => handleDelete(user._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserManagement;
